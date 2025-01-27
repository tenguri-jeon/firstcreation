import { useEffect, useState } from 'react';
import AllianceTitle from './AllianceTitle';
import { AlliancePurchasingFormContainer } from './alliancePurchasingStyle';
import { MdLocalPostOffice } from 'react-icons/md';
import { IoMdCheckmark } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onSubmit, onSubmitReset } from '../../../store/modules/alliancePurchasingSlice';

const AlliancePurchasingForm = () => {
    // 이메일 직접 입력 클릭시 input text로 바뀌어야함.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSubmit = useSelector((state) => state.alliancePurchasing.isSubmit);

    const [formState, setFormState] = useState({
        info: {
            purchaser: '',
            company: '',
            b_number: {
                part1: '',
                part2: '',
                part3: '',
            },
            b_name: '',
            title: '',
            email: {
                part1: '',
                part2: '',
            },
            phone: {
                part1: '',
                part2: '',
                part3: '',
            },
            pay: '',
        },
        question: {
            hope: '',
            price: '',
            num: '',
            date: '',
            desc: '',
        },
    });

    const changeInput = (e) => {
        const { name, value, type, checked, id } = e.target;

        const nameEmail = () => {
            setFormState((item) => {
                const updatedItems = { ...item.info.email };

                if (type === 'text') {
                    updatedItems.part1 = value;
                }
                if (id === 'email_sel') {
                    updatedItems.part2 = value;
                }

                return {
                    ...item,
                    info: {
                        ...item.info,
                        email: updatedItems,
                    },
                };
            });
        };

        const namePhone = (key) => {
            setFormState((item) => {
                const updatedItems = { ...item.info[key] };

                if (id === `${key}01`) {
                    updatedItems.part1 = value;
                }
                if (id === `${key}02`) {
                    updatedItems.part2 = value;
                }
                if (id === `${key}03`) {
                    updatedItems.part3 = value;
                }

                return {
                    ...item,
                    info: {
                        ...item.info,
                        [key]: updatedItems,
                    },
                };
            });
        };

        switch (name) {
            case 'purchaser':
            case 'company':
            case 'b_name':
            case 'title':
            case 'pay':
                setFormState((item) => ({
                    ...item,
                    info: {
                        ...item.info,
                        [name]: value,
                    },
                }));
                break;

            case 'b_number':
            case 'phone':
                namePhone(name);
                break;

            case 'email':
                nameEmail();
                break;

            case 'hope':
            case 'price':
            case 'num':
            case 'date':
            case 'desc':
                setFormState((item) => ({
                    ...item,
                    question: {
                        ...item.question,
                        [name]: value,
                    },
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
        console.log(formState);
        dispatch(onSubmit(formState));
    };

    useEffect(() => {
        if (isSubmit) {
            navigate('/main');
            dispatch(onSubmitReset());
        }
    }, [isSubmit]);

    return (
        <AlliancePurchasingFormContainer>
            <AllianceTitle txt={'기업 및 단체 구매 희망자 정보'} />
            <div className="form01">
                <div className="input_wrap">
                    <div className="input_box purchaser">
                        <div className="left">
                            <label className="req" htmlFor="purchaser">
                                구매자 유형
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="purchaser01">
                                    <input type="radio" name="purchaser" id="purchaser01" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>개인 사업자</span>
                                </label>
                                <label htmlFor="purchaser02">
                                    <input type="radio" name="purchaser" id="purchaser02" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>법인 사업자</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box company">
                        <div className="left">
                            <label className="req" htmlFor="company">
                                회사명
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="company" id="company" placeholder="회사명을 입력해 주세요" onChange={changeInput} />
                        </div>
                    </div>
                    <div className="input_box b_number">
                        <div className="left">
                            <label className="req" htmlFor="b_number">
                                사업자등록번호
                            </label>
                            <span>[사업자등록증]</span>
                        </div>
                        <div className="right">
                            <input type="text" name="b_number" id="b_number01" onChange={changeInput} maxLength={3} />
                            <input type="text" name="b_number" id="b_number02" onChange={changeInput} maxLength={2} />
                            <input type="text" name="b_number" id="b_number03" onChange={changeInput} maxLength={5} />
                        </div>
                    </div>
                    <div className="input_box name">
                        <div className="left">
                            <label className="req" htmlFor="b_name">
                                담당자명
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="b_name" id="b_name" placeholder="담당자명을 입력해 주세요" onChange={changeInput} />
                        </div>
                    </div>
                    <div className="input_box title">
                        <div className="left">
                            <label htmlFor="title">직함</label>
                        </div>
                        <div className="right">
                            <input type="text" name="title" id="title" placeholder="직함을 입력해 주세요" onChange={changeInput} />
                        </div>
                    </div>
                    <div className="input_box email">
                        <div className="left">
                            <label className="req" htmlFor="email">
                                담당자 이메일
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="email" id="email" placeholder="이메일을 입력해 주세요" onChange={changeInput} />@
                            <select name="email" id="email_sel" onChange={changeInput}>
                                <option value="">선택</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="hotmall.com">hotmall.com</option>
                                <option value="empal.com">empal.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="lycos.co.kr">lycos.co.kr</option>
                                <option value="chol.com">chol.com</option>
                                <option value="netian.com">netian.com</option>
                                <option value="korea.com">korea.com</option>
                                {/* <option value="">직접 입력</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="input_box phone">
                        <div className="left">
                            <label className="req" htmlFor="phone">
                                담당자 연락처
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="phone" id="phone01" maxLength={3} onChange={changeInput} />
                            <input type="text" name="phone" id="phone02" maxLength={4} onChange={changeInput} />
                            <input type="text" name="phone" id="phone03" maxLength={4} onChange={changeInput} />
                        </div>
                    </div>
                    <div className="input_box pay">
                        <div className="left">
                            <label className="req" htmlFor="pay">
                                결제수단
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="pay01">
                                    <input type="radio" name="pay" id="pay01" value={'별도문의'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>별도문의</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AllianceTitle txt={'기업 및 단체 구매 문의사항'} />
            <div className="form02">
                <div className="input_wrap">
                    <div className="input_box hope">
                        <div className="left">
                            <label className="req" htmlFor="hope">
                                구매 희망 상품
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="hope01">
                                    <input type="radio" name="hope" id="hope01" value={'디저트&베이커리'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>디저트&베이커리</span>
                                </label>
                                <label htmlFor="hope02">
                                    <input type="radio" name="hope" id="hope02" value={'텀블러'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>텀블러</span>
                                </label>
                                <label htmlFor="hope03">
                                    <input type="radio" name="hope" id="hope03" value={'머그컵'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>머그컵</span>
                                </label>
                                <label htmlFor="hope04">
                                    <input type="radio" name="hope" id="hope04" value={'기타MD'} onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>기타MD</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box price">
                        <div className="left">
                            <label className="req" htmlFor="price">
                                예상 구매 금액
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="price" id="price" placeholder="숫자만 입력해 주세요" onChange={changeInput} />
                            <span>만원</span>
                        </div>
                    </div>
                    <div className="input_box num">
                        <div className="left">
                            <label className="req" htmlFor="num">
                                예상 구매 수량
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="num" id="num" placeholder="숫자만 입력해 주세요" onChange={changeInput} />
                            <span>개</span>
                        </div>
                    </div>
                    <div className="input_box date">
                        <div className="left">
                            <label className="req" htmlFor="date">
                                구매 희망 일자
                            </label>
                        </div>
                        <div className="right">
                            <input type="date" name="date" id="date" onChange={changeInput} />
                        </div>
                    </div>
                    <div className="input_box desc">
                        <div className="left">
                            <label className="req" htmlFor="desc">
                                문의 내용
                            </label>
                        </div>
                        <div className="right">
                            <textarea name="desc" id="desc" placeholder="문의하실 내용을 입력해 주세요." onChange={changeInput}></textarea>
                        </div>
                    </div>
                </div>

                {/* 버튼 클릭시 form2 wrap 추가, 우측 상단 삭제버튼 있어야함 */}
                {/* <button className="add" type="button">
                    문의사항 추가
                    <span>
                        <FaPlus />
                    </span>
                </button> */}
            </div>

            <div className="guide">
                <h3>기업 및 단체 구매 상담 안내 사항</h3>
                <p>
                    <MdLocalPostOffice />
                    상품 구매 및 상담 문의 : <span>dessert39@dessert39.com</span>
                </p>
                <p>
                    <IoMdCheckmark />
                    답변 및 안내는 상담 운영시간 내에 이메일 또는 전화번호로 안내드립니다.
                </p>
                <p>
                    <IoMdCheckmark />
                    기재 오류 시 답변이 불가할 수 있으니 기재 시 꼭 메일 주소 및 전화번호를 확인해 주시기 바랍니다.
                </p>
            </div>

            <div className="btns">
                <button onClick={() => navigate(-1)} type="button" className="prev">
                    뒤로
                </button>
                <button onClick={clickSubmit} type="submit" className="sure">
                    확인
                </button>
            </div>
        </AlliancePurchasingFormContainer>
    );
};

export default AlliancePurchasingForm;
