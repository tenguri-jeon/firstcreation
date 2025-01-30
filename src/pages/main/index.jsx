import ImageSlider from '../../components/main/ImageSlider';
import ReuserableGraph from '../../components/main/ReuserableGraph';
import EcoStory from '../../components/main/EcoStory';
import SNS from '../../components/main/SNS';
import Beverage from '../../components/main/Beverage';
import Introduction from '../../components/main/Introduction';
import StoreInterior from '../../components/main/StoreInterior';
import EventNews from '../../components/main/EventNews';
import NewStoreList from '../../components/main/NewStoreList';
import Instagram from '../../components/main/Instagram';
import BookInroduction from '../../components/main/BookInroduction';

const Main = () => {
    return (
        <>
            {/* 이미지 슬라이드 */}
            <ImageSlider />

            {/* 책소개 */}
            <BookInroduction/>

            
            {/* SNS */}
            <SNS />


            {/* 디저트 - 이미지 슬라이드 변형 */}

            {/* 이미지 슬라이드 */}
            <Instagram />
        </>
    );
};

export default Main;
