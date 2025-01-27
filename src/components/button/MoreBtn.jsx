import { useNavigate } from 'react-router-dom';
import { GlobalStyle, ButtonsContainer, BlobButton, ButtonInner, ButtonBlobs, ButtonBlob, MoreBtnWrap } from './MoreCss';
import SVGFilter from './SVGFilter';

const MoreBtn = ({onModal}) => {

    return (
        <div onClick={onModal}>
            <MoreBtnWrap></MoreBtnWrap>
            <GlobalStyle />
            <ButtonsContainer>
                <BlobButton>
                    자세히보기
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
        </div>
    );
};

export default MoreBtn;
