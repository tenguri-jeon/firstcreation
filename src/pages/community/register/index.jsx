import { Link } from 'react-router-dom';
import { RegisterWrap } from './style';
import SubLayout from '../../../common/sub/SubLayout';

const Register = () => {
    return (
        <RegisterWrap>
            <SubLayout kTitle={'고객 문의 접수'} eTitle={'Register'} />
            <div className="inner">
                <h3 className="regTit">안녕하세요. 찾아주셔서 감사합니다.</h3>
                <p className="regArt1">
                    불편한 사항 및 기타 문의사항은 디저트39
                    <em className="regbold"> 카카오톡 채널</em>로 접수해 주시면 감사드리겠습니다.
                </p>
                <p className="regTxt">상담 가능 시간 [평일] 10:00~ 17:00</p>

                <div className="kakao">
                    <Link to="https://pf.kakao.com/_LNjxfK" target="_blank">
                        <img
                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/refs/heads/master/images/community/kakao.svg"
                            alt=""
                        />
                        <p>카카오톡 문의</p>
                    </Link>
                </div>
                <p className="regArt2">
                    매장의
                    <em className="regbold"> 보유재고 및 예약 관련 문의</em>는 해당
                    <em className="regbold">매장에 문의</em> 주시길 바랍니다.
                </p>
            </div>
        </RegisterWrap>
    );
};

export default Register;
