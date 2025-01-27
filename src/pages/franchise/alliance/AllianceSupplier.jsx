import { useNavigate } from 'react-router-dom';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import { AllianceSupplierContainer } from './style';
import { useDispatch } from 'react-redux';
import { onDisabled } from '../../../store/modules/allianceSupplierSlice';
import { useState } from 'react';

// 제휴/제안 협력사 신청 및 조회
const AllianceSupplier = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        b_num: '',
        b_pw: '',
    });
    // 조회하기 누르면 '해당 기능은 아직 사용하실 수 없습니다.' alert 띄우기

    const changeInput = (e) => {
        const { name, value } = e.target;

        setFormState((item) => ({
            ...item,
            [name]: value,
        }));
    };

    return (
        <AllianceSupplierContainer>
            <AllianceLayout ktit={'협력사 신청 및 조회'} />

            <div className="inner">
                <ul className="steps">
                    <li className="on">협력사 제휴·제안 안내</li>
                    <li>등록 및 약관</li>
                    <li>제출 완료</li>
                </ul>

                <ul className="appli">
                    <li>
                        <div className="txt">
                            <div className="pic">
                                <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img04.svg" alt="신규 협력 고객사 신청" />
                            </div>
                            <h3>신규 협력 고객사 신청</h3>
                            <p>
                                디저트39와 함께 협력하길 원하시는 기업, 기관은
                                <br />
                                문의 주시면 검토 후 연락드리겠습니다.
                            </p>
                        </div>
                        <button onClick={() => navigate('/franchise/alliance/allianceSupplier2')} type="button">
                            신청하기
                        </button>
                    </li>
                    <li>
                        <div className="txt">
                            <div className="pic">
                                <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img05.svg" alt="협력 신청 내역 조회" />
                            </div>
                            <h3>협력 신청 내역 조회</h3>
                        </div>
                        <div className="inp">
                            <dl className="num">
                                <dt>사업자 번호</dt>
                                <dd>
                                    <input
                                        onChange={changeInput}
                                        type="text"
                                        name="b_num"
                                        id="b_num"
                                        placeholder="- 없이 숫자만 입력해 주세요."
                                        maxLength={10}
                                    />
                                </dd>
                            </dl>
                            <dl className="pw">
                                <dt>비밀번호</dt>
                                <dd>
                                    <input onChange={changeInput} type="password" name="b_pw" id="b_pw" placeholder="비밀번호를 입력해 주세요." />
                                </dd>
                            </dl>
                        </div>
                        <button onClick={() => dispatch(onDisabled(formState))} type="button">
                            조회하기
                        </button>
                    </li>
                </ul>
            </div>
        </AllianceSupplierContainer>
    );
};

export default AllianceSupplier;
