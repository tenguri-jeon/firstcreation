import MenuSlide from "../../components/menu/menu_slide";
import Title from "../../components/menu/Title";
import { MenuCom } from "./styled";
import ClickMenu from "../../components/menu/ClickMenu";
import MenuTitle from "../../components/menu/menutitle";
import ClickProductItem from "../../components/menu/ClickProductItem";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadingData } from "../../store/modules/menuDataSlice";
import MenuModal from "../../components/menu/menuModal";
import SubLayout from "../../common/sub/SubLayout";

const Dessert = () => {
    const location = useLocation();
    const scrollRefs = useRef([]);
    const { productItem, newMenuItem, clickMenuItem, Modal } = useSelector(state => state.menu || {});
    
    const dispatch = useDispatch();
    const getData = location.pathname.replace(/\/menu\//g, '');
    
    useEffect(() => {
        dispatch(onLoadingData(getData));
    }, [getData, dispatch]);
    
    const DessertClickMenu = clickMenuItem;
    const MenuTit = DessertClickMenu.map(item => item.engtit);

    const handelScrollView = (index) => {
        if (scrollRefs.current[index]) {
            scrollRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [title , setTitle] = useState([
        {id : 1 , data : 'dessert' , kTitle : ' 디저트 메뉴 소개' , eTitle : 'Dessert'},
        {id : 2 , data : 'beverage' , kTitle : ' 음료 메뉴 소개' , eTitle : 'Beverage'},
        {id : 3 , data : 'mdproduct' , kTitle : ' MD 상품 소개' , eTitle : 'MD 상품'}
    ])

    return (
        <MenuCom>
            {
                title.map(item=> item.data === getData && <SubLayout kTitle={item.kTitle} eTitle={item.eTitle} />)
            }
            

            {Modal && <div className="ModalBg"><MenuModal /></div>}
            <section className="topCon">
                <div className="inner">
                    <Title title={`디저트39 신메뉴`} />
                    <MenuSlide newMenuItem={newMenuItem}></MenuSlide>
                </div>
            </section>
            <section className="mainCon">
                <div className="inner">
                    <Title title={`DESSERT MENU`} />
                    <span>찾으시는 메뉴를 클릭해서 확인해보세요.</span>
                    <ul className="click-menu">
                        {DessertClickMenu.map((item, index) => 
                            <ClickMenu 
                                key={item.id} 
                                {...item} 
                                handelScrollView={() => handelScrollView(index)} 
                            />
                        )}
                    </ul>
                    
                    <div className="con2">
                        {MenuTit.map((item, idx) => (
                            <div key={item} ref={el => (scrollRefs.current[idx] = el)}> 
                                <MenuTitle title={item} getData={getData}/>
                                <ul>
                                    { !productItem || productItem.length === 0 ? (
                                            <li>죄송합니다 메뉴가 없어요</li>
                                        ) : (
                                            productItem.map(itemData => 
                                                item === itemData.category && (
                                                    <ClickProductItem 
                                                        key={itemData.id} 
                                                        {...itemData} 
                                                        getData={getData} 
                                                    />
                                                )
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MenuCom>
    );
};

export default Dessert;
