import ImageSlider from '../../components/main/ImageSlider';
import ReuserableGraph from '../../components/main/ReuserableGraph';
import EcoStory from '../../components/main/EcoStory';
import DessertList from '../../components/main/SNS';
import Beverage from '../../components/main/Beverage';
import Introduction from '../../components/main/Introduction';
import StoreInterior from '../../components/main/StoreInterior';
import EventNews from '../../components/main/EventNews';
import NewStoreList from '../../components/main/NewStoreList';
import Instagram from '../../components/main/Instagram';

const Main = () => {
    return (
        <>
            {/* 이미지 슬라이드 */}
            <ImageSlider />

            {/* 공지사항 */}
            

            {/* 디저트 - 이미지 슬라이드 변형 */}
            <DessertList />

            {/* 이미지 슬라이드 */}
            <Instagram />
        </>
    );
};

export default Main;
