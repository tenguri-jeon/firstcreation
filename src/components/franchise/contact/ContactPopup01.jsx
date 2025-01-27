import { useEffect } from 'react';
import WaveBtn from '../../button/WaveBtn';
import { ContactPopupContainer } from './style';
import { IoCloseSharp } from 'react-icons/io5';

const ContactPopup01 = ({ setIsPopup, setIsChk, active }) => {
    return (
        <ContactPopupContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <div className="title">
                    <strong>개인정보취급방침</strong>
                    <button
                        className="close"
                        type="button"
                        onClick={() => {
                            setIsPopup(false);
                        }}>
                        <IoCloseSharp className="icon" />
                    </button>
                </div>
                <div className="desc">
                    <ul>
                        <li>
                            <p>원활한 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
                        </li>
                        <li>
                            <p>1. 개인정보의 수집 및 이용 목적</p>
                            <p>
                                가맹점 개설에 관한 상담 서비스 제공을 위한 본인 식별, 상담 내용 전달, 점포 오픈 관련 정보 안내, 의사 소통 경로 확보 및 기타
                                원활한 양질의 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                            </p>
                        </li>
                        <li>
                            <p>2. 수집하는 개인정보의 항목</p>
                            <p> 이름(한글/한문/영문), 성별, 연령, 휴대폰번호, 이메일주소</p>
                        </li>
                        <li>
                            <p>3. 개인정보의 보유 및 이용시간</p>
                            <p>개인정보의 수집목적 또는 제공받은 목적 달성 시 내규에 준하여 보관 및 파기합니다.</p>
                            <p>※개인정보 수집, 이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부하실 경우 접수에 제한이 있습니다.</p>
                        </li>
                    </ul>
                </div>
                {/* 물결버튼 */}
                <div
                    className="agree"
                    onClick={() => {
                        setIsChk(true);
                        setIsPopup(false);
                    }}>
                    <WaveBtn txt="동의합니다." />
                </div>
            </div>
        </ContactPopupContainer>
    );
};

export default ContactPopup01;
