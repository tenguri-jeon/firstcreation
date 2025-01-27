import { MobileNavWrap, TextDesc, TextDescItem } from './style';
import menuList from '../../assets/api/menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const titleArray = ['brand', 'menu', 'store', 'community', 'franchise'];

const mobileIcon = [
    'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6b3b99b462d58d942d653dbaf5b2646f80deb7b0/icon/mobile/mobile_brand.svg',
    'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6b3b99b462d58d942d653dbaf5b2646f80deb7b0/icon/mobile/mobile_menu.svg',
    'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6b3b99b462d58d942d653dbaf5b2646f80deb7b0/icon/mobile/mobile_store.svg',
    'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6b3b99b462d58d942d653dbaf5b2646f80deb7b0/icon/mobile/mobile_franchise.svg',
    'https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6b3b99b462d58d942d653dbaf5b2646f80deb7b0/icon/mobile/mobile_community.svg',
];

const MobileNav = ({ isOpen }) => {
    const [openMenus, setOpenMenus] = useState({});

    // HTML 엔티티를 실제 문자로 변환하는 함수
    const decodeHTMLEntities = (text) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    };

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <MobileNavWrap $isOpen={isOpen}>
            <div>
                <div className="mobileTop">
                    <div className="imgBox">
                        <img
                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/f0f18514a4453b060d705fce52b844cee0c89b05/icon/dessert39_simbol.svg"
                            alt="dessert39_simbol"
                        />
                    </div>
                    <h3>DESSERT39</h3>
                </div>
            </div>
            <span className="partitionLine"></span>
            <ul>
                {titleArray.map((title, index) => (
                    <li key={index}>
                        <a className="lineColor" onClick={() => toggleMenu(index)}>
                            <span className="icon">
                                <img src={mobileIcon[index]} alt={title} />
                            </span>
                            <span className="text">{title}</span>
                            <span className={`arrow ${openMenus[index] ? 'open' : ''}`}></span>
                        </a>
                        <TextDesc $isOpen={openMenus[index]}>
                            {menuList[title].map((item, itemIndex) => (
                                <TextDescItem key={item.id} $isOpen={openMenus[index]} $index={itemIndex}>
                                    <Link to={`/${title}/${item.main}`}>
                                        <span>{decodeHTMLEntities(item.desc)}</span>
                                    </Link>
                                </TextDescItem>
                            ))}
                        </TextDesc>
                    </li>
                ))}
            </ul>
        </MobileNavWrap>
    );
};

export default MobileNav;
