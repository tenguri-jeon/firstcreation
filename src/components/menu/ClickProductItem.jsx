import { useDispatch } from "react-redux";
import { ProductItemComponents } from "./styled";
import { onModalData } from "../../store/modules/menuDataSlice";
import MoreBtn from "../button/MoreBtn";
import ProgressiveImg from "./ProgressiveImg";

const ClickProductItem = ({getData, ...item}) => {
    const {imgurl , name , price} = item
    const dispatch = useDispatch()

    const onModal = () =>{
        dispatch(onModalData(item))
    }

    return (
        <ProductItemComponents 
            className={ getData === 'mdproduct' ? 'mdproduct' : ''} 
        >
            <ProgressiveImg src={name} placeholderSrc={imgurl}/>
            <strong>{name}</strong>
            {
                getData === 'beverage' && <p>{item.subtit}</p> 
            }
            <p>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            <MoreBtn onModal={onModal}>자세히보기</MoreBtn>
        </ProductItemComponents>
    );
};

export default ClickProductItem;