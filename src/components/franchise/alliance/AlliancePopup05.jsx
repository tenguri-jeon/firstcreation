import { useEffect } from 'react';
import WaveBtn from '../../button/WaveBtn';
import { IoCloseSharp } from 'react-icons/io5';
import { AlliancePopupContainer } from './style';

const AlliancePopup05 = ({ setIsPopup, setIsChk, active }) => {
    return (
        <AlliancePopupContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <div className="title">
                    <strong>개인정보 수집 및 이용 동의</strong>
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
                            <p>수집하는 개인 정보에 대한 항목, 목적, 보유 기간 안내</p>
                        </li>
                        <li>
                            <p>- 항목</p>
                            <p>이름, 연락처, 이메일, 주소</p>
                            <p>- 목적</p>
                            <p>협력 고객사 등록 처리</p>
                            <p>- 보유 및 이용 기간</p>
                            <p>신규입점제의 상담 신청 후 12개월 또는 동의 철회 시까지</p>
                            <p>단, 관계법령에 의한 개인정보 별도 보존이 필요한 경우 해당기간까지 보존</p>
                            <p>(2. 관계법령에 의한 개인정보 보존기간 참고)</p>
                        </li>
                        <li>
                            <b>2. 관계 법령에 의한 개인 정보 보존 기간</b>
                            <p>- 서비스 이용 기록, 접속 로그, 접속 IP 정보 (통신비밀보호법: 3개월)</p>
                            <p>- 표시/광고에 관한 기록 (전자상거래법 : 6개월)</p>
                            <p>- 계약 또는 청약철회 등에 관한 기록 (전자상거래법 : 5년)</p>
                            <p>- 대금결제 및 재화 등의 공급에 관한 기록 (전자상거래법 : 5년)</p>
                            <p>- 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래법 : 3년)</p>
                        </li>
                        <li>
                            <b>* 귀하는 개인정보 수집에 동의를 거부할 권리가 있으며, 동의 거부 시 협력사 신청이 불가합니다.</b>
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
        </AlliancePopupContainer>
    );
};

export default AlliancePopup05;
