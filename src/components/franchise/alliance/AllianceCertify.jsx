import { IoCloseSharp } from 'react-icons/io5';
import { AllianceCertifyContainer } from './style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCertifyNumber, insertCertify, onCertify, resetCertifyNum } from '../../../store/modules/allianceEntrySlice';

const AllianceCertify = ({ setIsPopup, active }) => {
    const [formCertify, setFormCertify] = useState({
        certify_name: '',
        certify_phone: {
            agency: '',
            part1: '',
            part2: '',
            part3: '',
        },
    });
    const dispatch = useDispatch();
    const certifyNum = useSelector((state) => state.allianceEntry.certifyNum);

    const changeInput = (e) => {
        const { name, value } = e.target;

        if (name === 'certify_name') {
            setFormCertify((item) => ({
                ...item,
                [name]: value,
            }));
        } else {
            setFormCertify((item) => ({
                ...item,
                certify_phone: {
                    ...item.certify_phone,
                    [name]: value,
                },
            }));
        }
    };

    useEffect(() => {
        dispatch(onCertify(formCertify));
    }, [formCertify]);

    return (
        <AllianceCertifyContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <button
                    className="close"
                    type="button"
                    onClick={() => {
                        setIsPopup(false);
                    }}>
                    <IoCloseSharp className="icon" />
                </button>
                <div className="title">
                    <strong>본인인증</strong>
                    <p>
                        신용카드 명의자의 휴대폰 번호를 확인하시고. <span>SMS 인증번호 6자리</span>를 입력해 주세요.
                    </p>
                </div>
                <div className="form">
                    <div className="desc">
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <label htmlFor="certify_name">실명</label>
                                    </th>
                                    <td>
                                        <input
                                            onChange={changeInput}
                                            value={formCertify.certify_name}
                                            type="text"
                                            name="certify_name"
                                            id="certify_name"
                                            placeholder="실명 입력"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="">휴대폰번호</label>
                                    </th>
                                    <td className="phone">
                                        <select onChange={changeInput} name="agency" id="agency" value={formCertify.certify_phone.agency}>
                                            <option value="">통신사</option>
                                            <option value="SKT">SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="LG U+">LG U+</option>
                                            <option value="알뜰폰 SKT">알뜰폰 SKT</option>
                                            <option value="알뜰폰 KT">알뜰폰 KT</option>
                                            <option value="알뜰폰 LG U+">알뜰폰 LG U+</option>
                                            <option value="헬로모바일">헬로모바일</option>
                                        </select>
                                        <select onChange={changeInput} name="part1" id="part1" value={formCertify.certify_phone.part1}>
                                            <option value="">선택</option>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="016">016</option>
                                            <option value="017">017</option>
                                            <option value="018">018</option>
                                            <option value="019">019</option>
                                        </select>
                                        <span>-</span>
                                        <input
                                            onChange={changeInput}
                                            type="text"
                                            name="part2"
                                            id="part2"
                                            maxLength={4}
                                            value={formCertify.certify_phone.part2}
                                        />
                                        <span>-</span>
                                        <input
                                            onChange={changeInput}
                                            type="text"
                                            name="part3"
                                            id="part3"
                                            maxLength={4}
                                            value={formCertify.certify_phone.part3}
                                        />
                                        <button onClick={() => dispatch(getCertifyNumber())} type="button">
                                            인증번호 받기
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="">인증번호</label>
                                    </th>
                                    <td>
                                        <input type="text" name="" id="" value={certifyNum} readOnly minLength={6} maxLength={6} placeholder="인증번호" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            휴대폰 인증 이용 시 이동통신사 사정으로 일시적으로 인증번호 발송이
                            <br />
                            지연될 수 있으니 양해하여 주시기 바랍니다.
                        </p>
                    </div>
                    <div className="certify_btns">
                        <button
                            onClick={() => {
                                setFormCertify({
                                    certify_name: '',
                                    certify_phone: {
                                        agency: '',
                                        part1: '',
                                        part2: '',
                                        part3: '',
                                    },
                                });
                                setIsPopup(false);
                                dispatch(resetCertifyNum());
                            }}
                            className="prev"
                            type="button">
                            취소
                        </button>
                        <button
                            onClick={() => {
                                setIsPopup(false);
                                dispatch(insertCertify());
                            }}
                            type="button"
                            className="next">
                            다음
                        </button>
                    </div>
                </div>
            </div>
        </AllianceCertifyContainer>
    );
};

export default AllianceCertify;
