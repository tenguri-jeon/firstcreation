import { Link, useNavigate } from 'react-router-dom';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import { AllianceContainer } from './style';
import { IoArrowUpSharp } from 'react-icons/io5';
import AllianceList from '../../../components/franchise/alliance/AllianceList';

// 제휴/제안 메인
const Alliance = () => {
    const navigate = useNavigate();

    return (
        <AllianceContainer>
            <AllianceLayout etit={'DESSERT39 partnership'} />
            <div className="inner">
                <div className="intro">
                    <p>
                        디저트39를 찾아주셔서 감사합니다.
                        <b>원하시는 메뉴를 선택해 주세요.</b>
                    </p>
                    <p>
                        <Link to={'/franchise/contact'}>
                            가맹 문의
                            <IoArrowUpSharp />
                        </Link>
                    </p>
                </div>
                <AllianceList />
            </div>
        </AllianceContainer>
    );
};

export default Alliance;
