import { useDispatch, useSelector } from 'react-redux';
import { ContactFormContainer } from './style';
import { useEffect, useState } from 'react';
import { onSubmit, onSubmitReset } from '../../../store/modules/allianceContactSlice';
import WaveBtn from '../../../components/button/WaveBtn';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSubmit = useSelector((state) => state.allianceContact.isSubmit);

    const [formState, setFormState] = useState({
        phone: {
            input: {
                part1: '',
                part2: '',
            },
            checkInput: {
                part1: '',
                part2: '',
            },
        },
        purpose: '',
        shape: [],
        time: '',
        motive: [],
        desc: '',
    });

    const changeInput = (e) => {
        const { name, value, type, checked, id } = e.target;

        const typeCheckbox = (key) => {
            setFormState((item) => {
                const updatedItems = [...item[key]];

                if (type === 'checkbox') {
                    if (checked) {
                        updatedItems.push({
                            value,
                        });
                    } else {
                        const index = updatedItems.findIndex((i) => i.value === '기타');
                        if (index > -1) {
                            updatedItems.splice(index, 1);
                        }
                    }
                } else if (type === 'text') {
                    const index = updatedItems.findIndex((i) => i.value === '기타');
                    if (index > -1) {
                        updatedItems[index] = {
                            ...updatedItems[index],
                            input: value,
                        };
                    }
                }

                return {
                    ...item,
                    [key]: updatedItems,
                };
            });
        };

        const namePhone = () => {
            setFormState((item) => {
                const updatedItems = { ...item.phone.input };

                if (id === 'phone_sel') {
                    updatedItems.part1 = value;
                }
                if (type === 'text') {
                    updatedItems.part2 = value;
                }

                return {
                    ...item,
                    phone: {
                        ...item.phone,
                        input: updatedItems,
                    },
                };
            });
        };

        const namePhoneCheck = () => {
            setFormState((item) => {
                const updatedItems = { ...item.phone.checkInput };

                if (id === 'phoneCheck_sel') {
                    updatedItems.part1 = value;
                }
                if (type === 'text') {
                    updatedItems.part2 = value;
                }

                return {
                    ...item,
                    phone: {
                        ...item.phone,
                        checkInput: updatedItems,
                    },
                };
            });
        };

        switch (name) {
            case 'phone':
                namePhone(name);
                break;

            case 'phoneCheck':
                namePhoneCheck();
                break;

            case 'shape':
            case 'motive':
                typeCheckbox(name);
                break;

            case 'time':
            case 'desc':
            case 'purpose':
                setFormState((item) => ({
                    ...item,
                    [name]: value,
                }));
                break;

            default:
                console.warn(`error`);
                break;
        }
    };

    // 신청하기
    const clickSubmit = (e) => {
        e.preventDefault();
        dispatch(onSubmit(formState));
    };

    useEffect(() => {
        if (isSubmit) {
            navigate('/main');
            dispatch(onSubmitReset());
        }
    }, [isSubmit]);

    return (
        <ContactFormContainer>
            <div className="input_wrap input_wrap01">
                <div className="input_box phone">
                    <div className="left">
                        <label className="req" htmlFor="phone">
                            휴대전화
                        </label>
                    </div>
                    <div className="right">
                        <select name="phone" type="select" id="phone_sel" onChange={changeInput}>
                            <option value="">선택</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                        </select>
                        <input type="text" name="phone" id="" placeholder="- 없이 입력해 주세요." minLength={8} maxLength={8} onChange={changeInput} />
                    </div>
                </div>
                <div className="input_box phone">
                    <div className="left">
                        <label className="req" htmlFor="phoneCheck">
                            휴대전화 확인
                        </label>
                    </div>
                    <div className="right">
                        <select name="phoneCheck" type="select" id="phoneCheck_sel" onChange={changeInput}>
                            <option value="">선택</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                        </select>
                        <input type="text" name="phoneCheck" id="" placeholder="- 없이 입력해 주세요." minLength={8} maxLength={8} onChange={changeInput} />
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap02">
                <div className="input_box purpose">
                    <div className="left">
                        <label className="req" htmlFor="">
                            상담 목적
                        </label>
                    </div>
                    <div className="right">
                        <p className="plus">✔️ 입점 제의 상가는 인근 희망 점주님에게 추천 후 여부에 따라 개별적으로 연락드립니다.</p>
                        <div className="radio">
                            <label htmlFor="purpose01">
                                <input type="radio" name="purpose" id="purpose01" value={'가맹 문의'} onChange={changeInput} />
                                <span className="custom"></span>
                                <span>가맹 문의</span>
                            </label>
                            <label htmlFor="purpose02">
                                <input type="radio" name="purpose" id="purpose02" value={'입점 문의'} onChange={changeInput} />
                                <span className="custom"></span>
                                <span>입점 제의</span>
                            </label>
                            <label htmlFor="purpose03">
                                <input type="radio" name="purpose" id="purpose03" value={'업종 변경'} onChange={changeInput} />
                                <span className="custom"></span>
                                <span>업종 변경</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input_box shape">
                    <div className="left">
                        <label className="req" htmlFor="">
                            상담 형태
                        </label>
                        <span>[다중 선택 가능]</span>
                    </div>
                    <div className="right">
                        <p className="plus">✔️ 빠른 상담 원하시면 전화 상담을 꼭 체크해 주세요.</p>
                        <div className="check">
                            <div className="top">
                                <label htmlFor="shape01">
                                    <input type="checkbox" name="shape" id="shape01" value={'전화 상담'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>전화 상담</span>
                                </label>
                                <label htmlFor="shape02">
                                    <input type="checkbox" name="shape" id="shape02" value={'문자 상담'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>문자 상담</span>
                                </label>
                                <label htmlFor="shape03">
                                    <input type="checkbox" name="shape" id="shape03" value={'카카오톡 상담'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>카카오톡 상담</span>
                                </label>
                            </div>
                            <label htmlFor="shape_other">
                                <input type="checkbox" name="shape" id="shape_other" value={'기타'} onChange={changeInput} />
                                <span className="custom"></span>
                                <span>기타(직접 입력)</span>
                                <input type="text" name="shape" id="shape_other_text" onChange={changeInput} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input_box time">
                    <div className="left">
                        <label className="req" htmlFor="time">
                            상담 희망 시간
                        </label>
                    </div>
                    <div className="right">
                        <select name="time" id="time" onChange={changeInput}>
                            <option value="">선택</option>
                            <option value="상시 가능">상시 가능</option>
                            <option value="9:30 ~ 10:30">9:30 ~ 10:30</option>
                            <option value="10:30 ~ 11:30">10:30 ~ 11:30</option>
                            <option value="11:30 ~ 12:30">11:30 ~ 12:30</option>
                            <option value="12:30 ~ 13:30">12:30 ~ 13:30</option>
                            <option value="13:30 ~ 14:30">13:30 ~ 14:30</option>
                            <option value="14:30 ~ 15:30">14:30 ~ 15:30</option>
                            <option value="15:30 ~ 16:30">15:30 ~ 16:30</option>
                            <option value="16:30 ~ 17:30">16:30 ~ 17:30</option>
                            <option value="그 외 시간">그 외 시간</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap03">
                <div className="input_box motive">
                    <div className="left">
                        <label className="req" htmlFor="motive">
                            신청계기
                        </label>
                        <span>[다중 선택 가능]</span>
                    </div>
                    <div className="right">
                        <div className="check">
                            <div className="top">
                                <label htmlFor="motive01">
                                    <input type="checkbox" name="motive" id="motive01" value={'유튜브'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>유튜브</span>
                                </label>
                                <label htmlFor="motive02">
                                    <input type="checkbox" name="motive" id="motive02" value={'네이버검색'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>네이버검색</span>
                                </label>
                                <label htmlFor="motive03">
                                    <input type="checkbox" name="motive" id="motive03" value={'네이버블로그'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>네이버블로그</span>
                                </label>
                                <label htmlFor="motive04">
                                    <input type="checkbox" name="motive" id="motive04" value={'인스타그램'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>인스타그램</span>
                                </label>
                                <label htmlFor="motive05">
                                    <input type="checkbox" name="motive" id="motive05" value={'지인소개'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>지인소개</span>
                                </label>
                                <label htmlFor="motive06">
                                    <input type="checkbox" name="motive" id="motive06" value={'매장방문'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>매장방문</span>
                                </label>
                            </div>
                            <label htmlFor="motive_other">
                                <input type="checkbox" name="motive" id="motive_other" value={'기타'} onChange={changeInput} />
                                <span className="custom"></span>
                                <span>기타(직접 입력)</span>
                                <input type="text" name="motive" id="motive_other_text" onChange={changeInput} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap04">
                <div className="input_box desc">
                    <div className="left">
                        <label className="req" htmlFor="desc">
                            문의 내용
                        </label>
                    </div>
                    <div className="right">
                        <textarea name="desc" id="desc" placeholder="내용을 입력해 주세요." onChange={changeInput}></textarea>
                        <p className="precaution">
                            지나친 욕설이나 광고글, 타인의 명예를 훼손하는 글을 올리시거나 반복적인 글은 별도의 통보 없이 삭제될 수 있습니다.
                            <br />
                            입력하신 개인 정보는 개설 문의에 대한 답변 목적으로 사용되며, 이용 목적이 달성되면 지체 없이 파기합니다.
                            <br />
                            아래 개인 정보를 입력하시고 개설 문의를 하셨을 경우 dessert.39 홈페이지 개인정보취급방침에 동의하신 것으로 간주합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="submit_btn" onClick={clickSubmit}>
                <WaveBtn txt={'신청하기'} submit={true} />
            </div>
        </ContactFormContainer>
    );
};

export default ContactForm;
