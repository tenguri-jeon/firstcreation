import React from 'react';
import { MenuModalComponents } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { onModalClose } from '../../store/modules/menuDataSlice';
import NatritionalIngredients from './NatritionalIngredients';
import Allergy from './Allergy';
import ElseInfo from './ElseInfo';

const MenuModal = () => {
    const currentModal = useSelector(state => state.menu.currentModal);
    const dispatch = useDispatch();
    const getData = location.pathname.replace(/\/menu\//g, '');


    if (!currentModal) {
        return null; 
    }

    return (
        <MenuModalComponents>
            <figure>
                {
                    getData === 'mdproduct' ? (
                        <img referrerPolicy='no-referrer' src={currentModal.transImg} alt="" />
                    )
                    :
                    (
                        <img referrerPolicy='no-referrer' src={currentModal.imgurl} alt="" />
                    )
                }
            </figure>
            <button className='closeBtn' onClick={() => dispatch(onModalClose())}>
                <IoMdCloseCircleOutline size={40} />
            </button>
            <div className="modal-body">
                <div className="product-data">
                    <span>
                        {currentModal.name}
                    </span>
                    {
                        getData === 'beverage' && <p className='subtit'>{currentModal.subtit}</p>
                    }
                    <p>
                        {currentModal.con.split('<br>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <strong>가격 {currentModal.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                </div>
            </div>
            {
                (currentModal.protein || currentModal.else) &&
                <span className='standard'>※ 100g(ml)당 기준</span> 
            }
            {
                currentModal.protein ? <NatritionalIngredients /> : null
            }
            {
                currentModal.allergy ? <Allergy /> : null
            }
            {
                currentModal.else && <ElseInfo />
            }
        </MenuModalComponents>
    );
};

export default MenuModal;
