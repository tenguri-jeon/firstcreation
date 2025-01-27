import { useNavigate } from 'react-router-dom';
import { GlobalStyle, ButtonsContainer, BlobButton, ButtonInner, ButtonBlobs, ButtonBlob, MoreBtnWrap } from './MoreCss';
import SVGFilter from './SVGFilter';

const More = ({ linkUrl }) => {
    const navigate = useNavigate();
    return (
        <>
            <MoreBtnWrap></MoreBtnWrap>
            <GlobalStyle />
            <ButtonsContainer>
                <BlobButton onClick={() => navigate(linkUrl)}>
                    More
                    <ButtonInner>
                        <ButtonBlobs>
                            {[0, 1, 2, 3].map((index) => (
                                <ButtonBlob key={index} $index={index} />
                            ))}
                        </ButtonBlobs>
                    </ButtonInner>
                </BlobButton>
            </ButtonsContainer>
            <SVGFilter />
        </>
    );
};

export default More;
