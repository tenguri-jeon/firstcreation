import AllianceTitle from './AllianceTitle';
import { AllianceEntryFormContainer } from './allianceEntryStyle';
import { useEffect, useState } from 'react';
import AllianceAddr from './AllianceAddr';
import { IoMdCheckmark } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmit, onSubmitReset } from '../../../store/modules/allianceEntrySlice';
import { useNavigate } from 'react-router-dom';

const AllianceEntryForm = () => {
    const isSubmit = useSelector((state) => state.allianceEntry.isSubmit);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        store: '',
        recommend: '',
        addr: {
            addr1: '',
            addr2: '',
            addr3: '',
        },
        area: {
            area1: '',
            area2: '',
        },
        hope: {
            hope1: '',
            hope2: '',
            hope3: '',
        },
        etc: '',
    });

    // textarea 글자 수 확인
    const [textarea, setTextarea] = useState('');
    const [textCount, setTextCount] = useState(0);

    const changeTextarea = (e) => {
        setTextarea(e.target.value);
        setTextCount(e.target.value.length);
    };

    const changeInput = (e) => {
        const { name, value, id } = e.target;

        switch (name) {
            case 'area':
                setFormState((item) => {
                    return {
                        ...item,
                        area: {
                            ...item.area,
                            [id]: value,
                        },
                    };
                });
                break;

            case 'hope':
                setFormState((item) => {
                    return {
                        ...item,
                        hope: {
                            ...item.hope,
                            [id]: value,
                        },
                    };
                });
                break;

            case 'store':
            case 'recommend':
            case 'etc':
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
        <AllianceEntryFormContainer>
            <AllianceTitle txt={'신규 입점 제의 상담 신청'} />
            <div className="form01">
                <div className="input_wrap">
                    <div className="input_box store">
                        <div className="left">
                            <label className="req" htmlFor="store">
                                점포 구분
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="store01">
                                    <input type="radio" name="store" id="store01" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>일반 (일반 건물에 입점 매장)</span>
                                </label>
                                <label htmlFor="store02">
                                    <input type="radio" name="store" id="store02" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>드라이브스루 (차량을 이용한주문 가능매장)</span>
                                </label>
                                <label htmlFor="store03">
                                    <input type="radio" name="store" id="store03" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>토지(신축 단독매장)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box recommend">
                        <div className="left">
                            <label className="req" htmlFor="recommend">
                                추천인 구분
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="recommend01">
                                    <input type="radio" name="recommend" id="recommend01" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>임대인 본인 (소유권자)</span>
                                </label>
                                <label htmlFor="recommend02">
                                    <input type="radio" name="recommend" id="recommend02" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>대리인 (부동산, 에이전트)</span>
                                </label>
                                <label htmlFor="recommend03">
                                    <input type="radio" name="recommend" id="recommend03" onChange={changeInput} />
                                    <span className="custom"></span>
                                    <span>임대인 지인 (가족, 지인)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box addr">
                        <div className="left">
                            <label className="req" htmlFor="addr">
                                추천점포 주소
                            </label>
                        </div>
                        <div className="right">
                            <AllianceAddr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form02">
                <div className="input_wrap">
                    <div className="input_box area">
                        <div className="left">
                            <label className="req" htmlFor="area">
                                면적
                            </label>
                        </div>
                        <div className="right">
                            <div className="box">
                                <input type="text" name="area" id="area1" placeholder="토지면적을 입력해주세요." onChange={changeInput} />
                                <p>평</p>
                            </div>
                            <div className="box">
                                <input type="text" name="area" id="area2" placeholder="전용면적을 입력해주세요." onChange={changeInput} />
                                <p>
                                    평<span>[전용면적 : 건물 내 실 면적]</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="input_box hope">
                        <div className="left">
                            <label className="req" htmlFor="hope">
                                희망 임대조건
                            </label>
                        </div>
                        <div className="right">
                            <div className="box">
                                <input type="text" name="hope" id="hope1" placeholder="보증금을 입력해주세요." onChange={changeInput} />
                                <p>만원</p>
                            </div>
                            <div className="box">
                                <input type="text" name="hope" id="hope2" placeholder="임대료을 입력해주세요." onChange={changeInput} />
                                <p>만원</p>
                            </div>
                            <div className="box">
                                <input type="text" name="hope" id="hope3" placeholder="관리비를 입력해주세요." onChange={changeInput} />
                                <p>만원</p>
                            </div>
                        </div>
                    </div>

                    <div className="input_box etc">
                        <div className="left">
                            <label className="req" htmlFor="etc">
                                기타 상세
                            </label>
                        </div>
                        <div className="right">
                            <textarea
                                onChange={(e) => {
                                    changeTextarea(e);
                                    changeInput(e);
                                }}
                                name="etc"
                                id="etc"
                                maxLength={1800}
                                placeholder="입점 신청 주소지 주변 상권에 대한 상세 설명, 임차료 협의 가능 여부, 복수 층일 경우 층별 면적 등"></textarea>
                            <p>
                                <span>{textCount}</span> / 1800byte
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="guide">
                <p>
                    <IoMdCheckmark />
                    입점 제의 상가는 인근 희망 점주님에게 추천 후 여부에 따라 개별적으로 연락드립니다.
                </p>
                <p>
                    <IoMdCheckmark />
                    입력된 정보가 부정확할 경우 검토가 제한될 수 있습니다.
                </p>
                <p>
                    <IoMdCheckmark />
                    내부 사정에 따라 회신이 지연될 수 있으며, 이 경우 다시 신청하여 주시길 바랍니다.
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
        </AllianceEntryFormContainer>
    );
};

export default AllianceEntryForm;
