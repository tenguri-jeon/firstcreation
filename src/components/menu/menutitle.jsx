import { useState } from "react";
import { MenuTitleComponents } from "./styled";
import { onBeverageFilter } from "../../store/modules/menuDataSlice";
import { useDispatch } from "react-redux";

const MenuTitle = ({ title, getData }) => {
    const menuItems = ['NEW & BEST MENU', 'SEASON & NEW MENU', 'REUSABLE CUP DISCOUNT & [12oz] Tall SIZE', 'COFFEE'];
    const tabmenu = [
        { id: 1, menu: 'ALL', isChk: true },
        { id: 2, menu: 'ICE', isChk: false },
        { id: 3, menu: 'HOT', isChk: false },
    ];

    const [localTabmenu, setLocalTabmenu] = useState(tabmenu);
    
    const dispatch = useDispatch();

    const filter = (menu) => {
        const menuname = menu.toLowerCase();  

        dispatch(onBeverageFilter({title , menuname})); 

        setLocalTabmenu((prevTabmenu) => 
            prevTabmenu.map(item => 
                item.menu === menu 
                    ? { ...item, isChk: true } 
                    : { ...item, isChk: false }
            )
        );
    };

    return (
        <MenuTitleComponents>
            <h3>{title}</h3>
            {getData === 'beverage' && (
                <>
                    <p className="price-info">[ 특수매장에 한 해, 일부 음료 가격이 상이 할 수 있습니다. ]</p>
                    {menuItems.includes(title) && (
                        <ul className="beverage-condition">
                            {
                                localTabmenu.map(item => (
                                    <li
                                        key={item.id}
                                        onClick={() => filter(item.menu)}
                                        className={item.isChk ? 'on' : ''}  
                                    >
                                        {item.menu}
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </>
            )}
        </MenuTitleComponents>
    );
};

export default MenuTitle;
