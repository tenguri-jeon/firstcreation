import React from 'react';
import { StoreItemCon } from './styled';
import { useDispatch } from 'react-redux';
import { onModalData } from '../../store/modules/storeSlice';

const StoreItem = ({...item}) => {
    const dispatch = useDispatch()

    return (
        <StoreItemCon onClick={()=> dispatch(onModalData(item))}>
            <img src={item.imgurl} alt={item.name} />
            <div className="item-wrap">
                <h5>{item.name}</h5>
                <div className="d-flex">
                    <strong>주소</strong>
                    <p>{item.addr}</p>
                </div>
                <div className="d-flex">
                    <strong>영업시간</strong>
                    <p>{item.time}</p>
                </div>
            </div>
        </StoreItemCon>
    );
};

export default StoreItem;