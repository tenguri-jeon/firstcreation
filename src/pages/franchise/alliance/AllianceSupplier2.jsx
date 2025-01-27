import { useEffect, useState } from 'react';
import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePopup05 from '../../../components/franchise/alliance/AlliancePopup05';
import { AllianceSupplierContainer2 } from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AllianceCertifySupplier from '../../../components/franchise/alliance/AllianceCertifySupplier';
import { onSubmit, onSubmitReset, resetState } from '../../../store/modules/allianceSupplierSlice';

// 제휴/제안 협력사 신청 및 조회
const AllianceSupplier2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSubmit = useSelector((state) => state.allianceSupplier.isSubmit);
    const b_name = useSelector((state) => state.allianceSupplier.appli.b_name);
    const b_phone = useSelector((state) => state.allianceSupplier.appli.b_phone);
    const [isPopup, setIsPopup] = useState(false);
    const [formState, setFormState] = useState({
        b_email: '',
        b_num: {
            part1: '',
            part2: '',
            part3: '',
        },
    });

    const changeInput = (e) => {
        const { name, value, id } = e.target;

        if (name === 'b_email') {
            setFormState((item) => ({
                ...item,
                [name]: value,
            }));
            return;
        }
        if (name === 'b_num') {
            setFormState((item) => ({
                ...item,
                b_num: {
                    ...item.b_num,
                    [id]: value,
                },
            }));
            return;
        }
    };

    const clickSubmit = (e) => {
        e.preventDefault();
        dispatch(onSubmit(formState));
    };

    useEffect(() => {
        if (isSubmit) {
            navigate('/franchise/alliance/allianceSupplier3');
            dispatch(onSubmitReset());
        }
    }, [isSubmit]);

    /* 
    사업자 등록번호 숫자 유효성 검사 필요
    인증하기 누르면 정보 오른쪽에 들어가야함.

    모든 정보 입력해야 다음 버튼 누를수 있음. 
    인풋 하나씩 다 alert 검사 알림.
    */

    // 페이지 떠날 때 상태 초기화
    useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, [dispatch]);

    return (
        <AllianceSupplierContainer2>
            <AllianceLayout ktit={'협력사 신청 및 조회'} />

            <div className="inner">
                <ul className="steps">
                    <li>협력사 제휴·제안 안내</li>
                    <li className="on">등록 및 약관</li>
                    <li>제출 완료</li>
                </ul>

                <form action="" method="post">
                    <section className="agreement">
                        <h3>협력사 신청 개인정보 수집 및 이용 동의</h3>
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'협력고객사 등록 신청 개인정보 수집 및 이용에 대해 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup05}
                            page={'supplier'}
                        />
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
                                        담당자 이름
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" value={b_name} name="name" id="name" disabled />
                                </div>
                            </div>
                            <div className="input_box tel">
                                <div className="left">
                                    <label className="req" htmlFor="tel">
                                        담당자 연락처
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" value={b_phone} name="tel" id="tel" disabled />
                                </div>
                            </div>
                            <div className="input_box email">
                                <div className="left">
                                    <label className="req" htmlFor="b_email">
                                        담당자 이메일
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" onChange={changeInput} name="b_email" id="b_email" placeholder="담당자 이메일" />
                                </div>
                            </div>
                        </div>

                        <AllianceCertifySupplier setIsPopup={setIsPopup} active={isPopup} />
                    </section>

                    <section className="num">
                        <div className="left">
                            <label className="req" htmlFor="num">
                                사업자 등록번호
                            </label>
                            <span>[사업자등록증]</span>
                        </div>
                        <div className="right">
                            <input type="text" name="b_num" id="part1" onChange={changeInput} maxLength={3} />
                            <input type="text" name="b_num" id="part2" onChange={changeInput} maxLength={2} />
                            <input type="text" name="b_num" id="part3" onChange={changeInput} maxLength={5} />
                        </div>
                    </section>
                </form>
                <div className="btns">
                    <button onClick={() => navigate('/franchise/alliance/allianceSupplier')} type="button" className="prev">
                        이전
                    </button>
                    <button onClick={clickSubmit} type="button" className="next">
                        다음
                    </button>
                </div>
            </div>
        </AllianceSupplierContainer2>
    );
};

export default AllianceSupplier2;
