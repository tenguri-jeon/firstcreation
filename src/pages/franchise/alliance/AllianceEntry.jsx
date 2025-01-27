import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AllianceEntryForm from '../../../components/franchise/alliance/AllianceEntryForm';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePopup02 from '../../../components/franchise/alliance/AlliancePopup02';
import AlliancePopup03 from '../../../components/franchise/alliance/AlliancePopup03';
import AlliancePopup04 from '../../../components/franchise/alliance/AlliancePopup04';
import { AllianceEntryContainer } from './style';
import { RiCheckFill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AllianceCertify from '../../../components/franchise/alliance/AllianceCertify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAllPersonalCheck, onEmail, resetState } from '../../../store/modules/allianceEntrySlice';

// 제휴/제안 입점 제의
const AllianceEntry = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isPopup, setIsPopup] = useState(false);
    const [email, setEmail] = useState('');
    const b_name = useSelector((state) => state.allianceEntry.b_name);
    const b_phone = useSelector((state) => state.allianceEntry.b_phone);
    /* const allPersonalCheck = useSelector((state) => state.allianceEntry.allPersonalCheck); */

    /* 
    모든 동의 버튼 누르면 3개 다 체크되어야함. 이미 체크되어있으면 3개 다 해제
    */
    const changeInput = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        dispatch(onEmail(email));
    }, [email]);

    // 페이지 떠날 때 상태 초기화
    useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, [dispatch]);

    return (
        <AllianceEntryContainer>
            <AllianceLayout ktit={'입점 제의'} />

            <div className="inner">
                <form action="" method="post">
                    <h3>입점 제의 상담 신청 동의</h3>
                    <section className="agreement">
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'입점 제의 상담 신청에 동의합니다.'}
                            button={'입점제의 상담신청'}
                            PopupComponent={AlliancePopup02}
                            page={'entry1'}
                        />
                        <AllianceAgreementItem
                            id={'agree2'}
                            txt={'신규 입점 제의 이용약관을 읽었으며 이에 동의합니다.'}
                            button={'입점제의 상담신청'}
                            PopupComponent={AlliancePopup03}
                            page={'entry2'}
                        />
                        <AllianceAgreementItem
                            id={'agree3'}
                            txt={'개인정보 수집 및 이용에 대해 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup04}
                            page={'entry3'}
                        />
                        {/* <button onClick={() => dispatch(onAllPersonalCheck())} className="all" type="button">
                            <RiCheckFill />
                            모든 약관과 방침을 읽었으며 이에 동의합니다.
                        </button> */}
                    </section>

                    <section className="certify">
                        <div className="l_box">
                            <div className="pic">
                                <img src="https://teamproject-dessert39.github.io/dataCenter/icon/phone-call.svg" alt="휴대폰 인증하기" />
                            </div>
                            <div className="txt">
                                <strong>휴대폰 인증하기</strong>
                                <p>본인 명의의 휴대폰을 통해 인증합니다.</p>
                                <button onClick={() => (b_name ? alert('인증이 완료되었습니다.') : setIsPopup(true))} type="button">
                                    인증하기
                                </button>
                            </div>
                        </div>
                        <div className="r_box">
                            <div className="input_box name">
                                <div className="left">
                                    <label className="req" htmlFor="name">
                                        담당자 성함
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="" id="name" value={b_name} disabled />
                                </div>
                            </div>
                            <div className="input_box tel">
                                <div className="left">
                                    <label className="req" htmlFor="tel">
                                        담당자 연락처
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="" id="tel" value={b_phone} disabled />
                                </div>
                            </div>
                            <div className="input_box email">
                                <div className="left">
                                    <label className="req" htmlFor="email">
                                        담당자 이메일
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="email" id="email" onChange={changeInput} placeholder="이메일을 입력해 주세요." />
                                </div>
                            </div>
                        </div>

                        <AllianceCertify setIsPopup={setIsPopup} active={isPopup} />
                    </section>

                    <AllianceEntryForm />
                </form>
            </div>
        </AllianceEntryContainer>
    );
};

export default AllianceEntry;
