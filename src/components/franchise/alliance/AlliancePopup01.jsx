import { useEffect } from 'react';
import WaveBtn from '../../button/WaveBtn';
import { IoCloseSharp } from 'react-icons/io5';
import { AlliancePopupContainer } from './style';

const AlliancePopup01 = ({ setIsPopup, setIsChk, active }) => {
    return (
        <AlliancePopupContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <div className="title">
                    <strong>개인정보 수집·이용 동의</strong>
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
                            <b>온라인 상담 접수 및 처리를 위한 개인 정보 수집·이용 동의서</b>
                        </li>
                        <li>
                            <p>1.개인 정보의 수집 및 이용 목적</p>
                            <p>- 대량, 단체, 기업 고객의 구매 상담 서비스 이용을 위한 본인 식별</p>
                            <p>- 기타 원활한 양질의 서비스 제공</p>
                        </li>
                        <li>
                            <p>2. 수집하는 개인정보의 항목</p>
                            <p>- 이름, 연락처, 이메일, 사업자 등록번호</p>
                        </li>
                        <li>
                            <p>3. 개인정보의 보유 및 이용시간</p>
                            <p>
                                - 원칙적으로 개인 정보 이용 목적이 달성된 후 또는 관계 법령에 의한 별도 보존 기간 (4. 관계 법령에 의한 개인 정보 보존 기간 참고)
                            </p>
                        </li>
                        <li>
                            <p>4. 관계 법령에 의한 개인 정보 보존 기간</p>
                            <p>- 서비스이용기록, 접속로그, 접속IP정보 (통신비밀보호법 : 3개월)</p>
                            <p>- 표시/광고에 관한 기록 (전자상거래법 : 6개월)</p>
                            <p>- 계약 또는 청약철회 등에 관한 기록 (전자상거래법 : 5년)</p>
                            <p>- 대금결제 및 재화 등의 공급에 관한 기록 (전자상거래법 : 5년)</p>
                            <p>- 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래법 : 3년)</p>
                            <p>- 세금계산서, 영수증 등 거래내역 관련 정보 (전자상거래법 : 5년)</p>
                        </li>
                        <li>
                            <b>* 귀하는 개인정보 수집에 동의를 거부할 권리가 있으며, 동의 거부 시 기업 및 단체 구매 문의가 불가합니다.</b>
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

export default AlliancePopup01;
