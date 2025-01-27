import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { onModalClose } from "../../store/modules/storeSlice";
import { SoteModalCon } from "./styled";
import { TbParkingCircleFilled } from "react-icons/tb";
import { MdTakeoutDining } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { PiToiletFill } from "react-icons/pi";
import React, { useEffect } from "react";

// 아이콘 컴포넌트를 매핑할 객체
const iconMapping = {
  MdTakeoutDining: MdTakeoutDining,
  IoIosWifi: IoIosWifi,
  PiToiletFill: PiToiletFill,
  TbParkingCircleFilled: TbParkingCircleFilled,
};

const StoreModal = () => {
  const dispatch = useDispatch();
  const { modalData } = useSelector((state) => state.storeSlice);

    // 마커들을 지도에 추가하는 함수
    const setMarkers = (map) => {
        const position = new kakao.maps.LatLng(modalData.lating[0], modalData.lating[1]);
    
        // 커스텀 마커 이미지 설정
        const imageSrc = 'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/1691e1711279e5bde9722d85d4890a3faa958e7a/icon/map_pin.svg'; // 마커이미지의 주소
        const imageSize = new kakao.maps.Size(64, 69); // 마커이미지 크기
        const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 이미지의 옵션
    
        // 마커 이미지 객체 생성
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
        // 마커 생성
        const marker = new kakao.maps.Marker({
          position: position,
          title: modalData.name, // 마커의 툴팁
          image: markerImage, // 커스텀 이미지 설정
        });
    
        // 마커를 지도에 표시
        marker.setMap(map);

    };
    
    useEffect(() => {
        // 지도를 표시할 HTML 요소
        const container = document.getElementById('modal-map');
        const mainPosition = new kakao.maps.LatLng(modalData.lating[0], modalData.lating[1]); // 지도 중심 좌표
    
        const options = {
          center: mainPosition, // 지도 중심
          level: 2, // 지도 확대/축소 레벨
        };
    
        // 지도 생성
        const map = new kakao.maps.Map(container, options);
    
        // 다른 마커들 세팅
        setMarkers(map);
    }, []);

  return (
    <SoteModalCon>
      <div className="modal">
        <div className="modal_header">
          <span>{modalData.name}</span>
          <button className="closeBtn" onClick={() => dispatch(onModalClose())}>
            <IoMdCloseCircleOutline size={40} />
          </button>
        </div>
        <div className="modal-body">
          <img src={modalData.imgurl} alt={modalData.name} />
          <span>이용 가능 서비스</span>
          <ul>
            {modalData.service.map((item) => (
              <li key={item.id}>
                {React.createElement(iconMapping[item.icon])} {item.service}
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <strong>주소</strong>
            <p>{modalData.addr}</p>
          </div>
          <div className="d-flex">
            <strong>전화번호</strong>
            <p>{modalData.tel}</p>
          </div>
          <div className="d-flex">
            <strong>영업시간</strong>
            <p>{modalData.time}</p>
          </div>
          <p className="small">* 영업시간은 매장 사정에 따라 변동될 수 있습니다.</p>
          <article id="modal-map" className="modal-google-map" />
        </div>
      </div>
    </SoteModalCon>
  );
};

export default StoreModal;
