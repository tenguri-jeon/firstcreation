import { Link } from 'react-router-dom';
import { SubContainer, SubMenu } from './style';
import MenuData from '../../assets/api/menu';

const Sub = () => {
    const decodeHTMLEntities = (text) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    };

    const renderMenuItems = (categories) => {
        return categories.map((category) => (
            <ul key={category}>
                {MenuData[category].map(
                    (item) =>
                        !item.sub && (
                            <li key={item.id}>
                                <Link to={`/${category}/${item.main}`}>{decodeHTMLEntities(item.desc)}</Link>
                            </li>
                        )
                )}
            </ul>
        ));
    };

    return (
        <SubContainer>
            <SubMenu className="left">{renderMenuItems(['Introduce', 'Publishing', 'PrintAndDesign','CustomerService'])}</SubMenu>
        </SubContainer>
    );
};

export default Sub;