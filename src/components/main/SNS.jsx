import { SNSListWrap, TitleWrap } from './DessertListCss';
import DessertListSlider from './DessertListSlider';

const SNS = () => {
    return (
        <SNSListWrap>
            <h1>SNS</h1>
            <span>첫창조에 관한 게시물을 <br/>가장 먼저 만나보세요!</span>
            <TitleWrap></TitleWrap>
            <DessertListSlider />
        </SNSListWrap>
    );
};

export default SNS;
