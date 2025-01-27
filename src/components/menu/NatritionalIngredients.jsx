import React from 'react';
import { NatritionalIngredientsComponents } from './styled';
import { useSelector } from 'react-redux';

const NatritionalIngredients = () => {
    const currentModal = useSelector(state=> state.menu.currentModal)
    const {  cal , protein , saturatedFat , sodium , sugar } = currentModal
    return (
        <NatritionalIngredientsComponents>
            <ul className='left'>
                <li>칼로리[{cal} cal]</li>
                <li>단백질[{protein} g]</li>
                <li>나트륨[{sodium} mg]</li>
            </ul>
            <ul className='right'>
                <li>당류[{sugar} g]</li>
                <li>포화지방[{saturatedFat} g]</li>
            </ul>
        </NatritionalIngredientsComponents>
    );
};

export default NatritionalIngredients;