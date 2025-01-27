import React, { useEffect, useState } from 'react';
import SubLayout from '../../common/sub/SubLayout';
import { SoteCon } from './styled';
// import data from '../../assets/api/store';
import { useDispatch, useSelector } from 'react-redux';
import { filterOn, onModalData } from '../../store/modules/storeSlice';
import StoreModal from './storeModal';
import { TbParkingCircleFilled } from "react-icons/tb";
import { MdTakeoutDining } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { PiToiletFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import StoreItem from './StoreItem';

const { kakao } = window;

const Store = () => {
  const dispatch = useDispatch()
  const {Modal , filterData } = useSelector(state => state.storeSlice)

  const [btn , setBtn] = useState([
    {id : 1 , title : '포장' ,  isChk : false},
    {id : 2 , title : '주차' , isChk : false},
    {id : 3 , title : 'WIFI' ,  isChk : false},
    {id : 4 , title : '화장실' ,  isChk : false},
  ])

  const [text , setText] = useState('')

  // 마커들을 지도에 추가하는 함수
  const setMarkers = (map) => {
    filterData.forEach((item) => {
      const position = new kakao.maps.LatLng(item.lating[0], item.lating[1]);

      // 커스텀 마커 이미지 설정
      const imageSrc = 'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/1691e1711279e5bde9722d85d4890a3faa958e7a/icon/map_pin.svg'; // 마커이미지의 주소
      const imageSize = new kakao.maps.Size(64, 69); // 마커이미지 크기
      const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 이미지의 옵션

      // 마커 이미지 객체 생성
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: position,
        title: item.name, // 마커의 툴팁
        image: markerImage, // 커스텀 이미지 설정
      });

      // 마커를 지도에 표시
      marker.setMap(map);

      // 마커 클릭 시 이벤트 처리
      kakao.maps.event.addListener(marker, 'click', () => {
        dispatch(onModalData(item))
      });
    });
  };

  useEffect(() => {
    // 지도를 표시할 HTML 요소
    const container = document.getElementById('map');
    const mainPosition = new kakao.maps.LatLng(37.51180, 127.0597); // 지도 중심 좌표

    const options = {
      center: mainPosition, // 지도 중심
      level: 3, // 지도 확대/축소 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // 다른 마커들 세팅
    setMarkers(map);
  }, []);

  const choiceService = (id) => {
    // 클릭 시 isChk 를 toggle 해주는 이벤트
    setBtn(prevBtn =>
      prevBtn.map(item =>
        item.id === id ? { ...item, isChk: !item.isChk } : item
      )
    );
  };

  const onFilter = () => {
    const servicetab = btn.filter(item => item.isChk === true);
    const serviceName = servicetab.map(item => item.title)
    if (serviceName.length === 0 || text === '') {
      dispatch(filterOn({ serviceName, text }));
    } else {
      dispatch(filterOn({ serviceName, text }));
    }
  };
  

  const onChange = (e) => {
    const { value, name } = e.target;  
    setText(value);  
  }

  
  return (
    <SoteCon>
      <SubLayout kTitle={'전국 매장 찾기'} eTitle={'Store'} />
      {Modal && <div className="ModalBg"><StoreModal/></div>}
      <div className="map-wrap">
        <article id="map" className="google-map" />
        <div className="con">
            <div className="top">
                <p>· 찾으시는 매장을 지도에서 클릭하시면 자세히 볼 수 있습니다.</p>
                <div className="filter-tab">
                    <strong>이용 가능한 서비스</strong>
                    <ul>
                      {
                       btn.map(item => <li 
                        key={item.id}
                        onClick={()=> choiceService(item.id , item.title)}
                        className={item.isChk === true ? 'on' : ''}
                        >
                        {item.id === 1 && <MdTakeoutDining />}
                        {item.id === 2 && <TbParkingCircleFilled />}
                        {item.id === 3 && <IoIosWifi />}
                        {item.id === 4 && <PiToiletFill />}
                        {item.title}</li>) 
                      }
                    </ul>
                    <strong>지역별 매장 안내</strong>
                    <label>
                      <input type="text" name='storeName' value={text}  placeholder='매장명 또는 주소를 입력하세요.' onChange={(e)=>onChange(e)}/>
                      <button onClick={onFilter}><CiSearch size={30}/></button>
                    </label>
                </div>
                <span><IoIosArrowDown />검색결과</span>
            </div>
            <div className="bottom">
                <ul>
                    {filterData.map(item => <StoreItem key={item.id} {...item}/>)}
                    {filterData.length === 0 && <li>죄송합니다 검색 결과가 없습니다</li>}
                </ul>
            </div>
        </div>
      </div>
    </SoteCon>
  );
};

export default Store;
