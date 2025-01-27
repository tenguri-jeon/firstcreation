import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsExclamationCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { onAddr } from '../../../store/modules/allianceEntrySlice';

const AllianceAddr = () => {
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const wrapRef = useRef(null);
    const isAddr = useSelector((state) => state.allianceEntry.addr);

    const [formAddr, setFormAddr] = useState({
        addr1: '',
        addr2: '',
        addr3: '',
    });
    const dispatch = useDispatch();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormAddr((item) => ({
            ...item,
            [name]: value,
        }));
    };

    useEffect(() => {
        dispatch(onAddr(formAddr));
    }, [formAddr]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const foldDaumPostcode = () => {
        if (wrapRef.current) {
            wrapRef.current.style.display = 'none';
        }
    };

    const execDaumPostcode = () => {
        const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new window.daum.Postcode({
            oncomplete: (data) => {
                let addr = '';
                let extraAddr = '';

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if (data.userSelectedType === 'R') {
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' : '') + data.buildingName;
                    }
                    if (extraAddr !== '') {
                        extraAddr = ` (${extraAddr})`;
                    }
                }

                setPostcode(data.zonecode);
                setAddress(addr);

                // formAddr 업데이트
                setFormAddr((prev) => ({
                    ...prev,
                    addr1: data.zonecode,
                    addr2: addr,
                }));

                if (wrapRef.current) {
                    wrapRef.current.style.display = 'none';
                }

                document.body.scrollTop = currentScroll;
            },
            onresize: (size) => {
                if (wrapRef.current) {
                    wrapRef.current.style.height = `${size.height}px`;
                }
            },
            width: '100%',
            height: '100%',
        }).embed(wrapRef.current);

        if (wrapRef.current) {
            wrapRef.current.style.display = 'block';
        }
    };

    return (
        <>
            <div>
                <button type="button" onClick={execDaumPostcode} className="button">
                    <FaMapMarkerAlt />
                    주소찾기
                </button>
                <input type="text" onChange={(e) => changeInput(e)} disabled value={postcode} name="addr1" placeholder="우편번호" />
            </div>
            <div
                className="find"
                id="wrap"
                ref={wrapRef}
                style={{
                    display: 'none',
                    border: '1px solid',
                    height: '300px',
                    margin: '5px 0',
                    position: 'relative',
                }}>
                <img
                    src="//t1.daumcdn.net/postcode/resource/images/close.png"
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '0px',
                        top: '-1px',
                        zIndex: 1,
                    }}
                    onClick={foldDaumPostcode}
                    alt="접기 버튼"
                />
            </div>
            <div>
                <input type="text" onChange={(e) => changeInput(e)} value={address} name="addr2" placeholder="주소" disabled />
            </div>
            <div>
                <input
                    type="text"
                    value={detailAddress}
                    name="addr3"
                    onChange={(e) => {
                        setDetailAddress(e.target.value);
                        changeInput(e);
                    }}
                    placeholder="상세주소 입력"
                />
            </div>
            <p>
                <BsExclamationCircle />
                주소 검색이 안되실 경우 추천 주소(시, 군, 구)를 임의로 선택 후 상세주소에 실제 주소를 입력하시거나, 아래 기타 상세에 별도로 입력하여 주시면
                담당자가 확인 가능합니다.
            </p>
        </>
    );
};

export default AllianceAddr;
