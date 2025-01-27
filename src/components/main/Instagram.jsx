import ReadMore from '../button/ReadMore';
import { InstagramWrap, TitleWrap, LeftSide, RightSide } from './InstagramCss';
import InstagramSlider from './InstagramSlider';

const Instagram = () => {
    return (
        <InstagramWrap>
            <TitleWrap>Instagram</TitleWrap>
            <div className="instagramInner">
                <LeftSide>
                    <img
                        className="svg"
                        src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/4ea1296265f2b6af6191d1c76d39dcf68fab1f59/icon/dessert39_simbol.svg"
                        alt="dessert39_simbol"
                    />
                    <p>@dessert39_official</p>
                    <div className="btnPadding">
                        <ReadMore linkUrl={'https://www.instagram.com/dessert39_official/'} txt="Follow" square={true} />
                    </div>
                </LeftSide>
                <RightSide>
                    <InstagramSlider />
                </RightSide>
            </div>
        </InstagramWrap>
    );
};

export default Instagram;
