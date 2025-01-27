import { BeverageWrap } from './BeverageCss';
import BeverageSlider from './BeverageSlider';
import { TitleWrap } from './EcoStoryCss';

const Beverage = () => {
    return (
        <BeverageWrap>
            <TitleWrap>DESSERT39 BEVERAGE</TitleWrap>
            <h2>개인컵 지참 시 모든 음료 5% ~ 최대 1,000원 할인</h2>
            <BeverageSlider />
        </BeverageWrap>
    );
};

export default Beverage;
