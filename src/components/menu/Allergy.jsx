import React from 'react';
import { AllergyComponents } from './styled';
import { useSelector } from 'react-redux';

const Allergy = () => {
    const currentModal = useSelector(state=> state.menu.currentModal)
    const allergy  = currentModal.allergy
    return (
        <AllergyComponents>
            <span>알레르기 성분 정보 <span className='bold'>{allergy}</span> </span>
        </AllergyComponents>
    );
};

export default Allergy;