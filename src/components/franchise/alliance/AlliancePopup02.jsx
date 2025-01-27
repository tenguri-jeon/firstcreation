import { useEffect } from 'react';
import WaveBtn from '../../button/WaveBtn';
import { IoCloseSharp } from 'react-icons/io5';
import { AlliancePopupContainer } from './style';

const AlliancePopup02 = ({ setIsPopup, setIsChk, active }) => {
    return (
        <AlliancePopupContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <div className="title">
                    <strong>입점 제의 상담 신청</strong>
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
                            <b>입점 제의 상담 신청 전 꼭 확인해주세요.</b>
                        </li>
                        <li>
                            <p>- 상담 신청에 대한 답변은 접수 후 순차적으로 안내 드립니다.</p>
                            <p>- 답변은 모두 유선상으로 이루어지니 정확한 정보 입력 부탁드립니다.</p>
                            <p>- 입점 제의 주소가 불분명할 경우 검토에 어려움이 있으니 반드시 확인 부탁드립니다.</p>
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

export default AlliancePopup02;
