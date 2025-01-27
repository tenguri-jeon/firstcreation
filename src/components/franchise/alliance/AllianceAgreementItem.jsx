import { useEffect, useRef, useState } from 'react';
import { AllianceAgreementItemContainer } from './style';
import { RiCheckFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { onPersonalCheck } from '../../../store/modules/alliancePurchasingSlice';
import { onPersonalCheck1, onPersonalCheck2, onPersonalCheck3 } from '../../../store/modules/allianceEntrySlice';
import { onPersonalCheckSupplier } from '../../../store/modules/allianceSupplierSlice';

const AllianceAgreementItem = ({ id, txt, button, page, PopupComponent }) => {
    const [isPopup, setIsPopup] = useState(false);
    const [isChk, setIsChk] = useState(false);
    const chkBox = useRef();
    const dispatch = useDispatch();
    const allPersonalCheck = useSelector((state) => state.allianceEntry.allPersonalCheck);

    const toggleChk = () => {
        if (isChk) {
            setIsChk(false);
        } else {
            setIsChk(true);
        }
    };

    useEffect(() => {
        if (page === 'purchasing') dispatch(onPersonalCheck(isChk));
        if (page === 'entry1') dispatch(onPersonalCheck1(isChk));
        if (page === 'entry2') dispatch(onPersonalCheck2(isChk));
        if (page === 'entry3') dispatch(onPersonalCheck3(isChk));
        if (page === 'supplier') dispatch(onPersonalCheckSupplier(isChk));
    }, [isChk]);

    return (
        <>
            <AllianceAgreementItemContainer>
                <label htmlFor={id}>
                    <span className={`chk ${isChk ? 'chked' : ''}`}>
                        <RiCheckFill />
                    </span>
                    <input checked={isChk} onChange={toggleChk} type="checkbox" name="agree" id={id} ref={chkBox} />
                    <span className="txt">{txt}</span>
                </label>
                <button
                    type="button"
                    onClick={() => {
                        setIsPopup(true);
                    }}>
                    {button}
                </button>
            </AllianceAgreementItemContainer>

            {/* 컴포넌트 자체를 props로 받아옴 */}
            {PopupComponent && <PopupComponent setIsPopup={setIsPopup} setIsChk={setIsChk} active={isPopup} />}
        </>
    );
};

export default AllianceAgreementItem;
