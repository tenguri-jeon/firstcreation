import { BlobButton, ButtonBlob, ButtonBlobs, ButtonInner, ButtonsContainer, WaveBtnWrap, WaveGlobalStyle } from './WaveBtnCss';
import SVGFilter from './SVGFilter';
import { useEffect, useState } from 'react';

const WaveBtn = ({ txt, submit, white }) => {
    /* 
    submit 버튼이면 props로 true값 전달,
    white 버튼이면 props로 true값 전달
    */
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024.1);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 612);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <button type={`${submit ? 'submit' : 'button'}`} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <WaveBtnWrap />
            <WaveGlobalStyle />
            <ButtonsContainer className={`${white ? 'white' : ''}`}>
                <BlobButton className={`${white ? 'white' : ''} ${isMobile ? 'mo' : ''}`} type="button">
                    {txt}
                    <ButtonInner className={`${white ? 'white' : ''}`}>
                        <ButtonBlobs>
                            {[0, 1, 2, 3].map((index) => (
                                <ButtonBlob className={`${white ? 'white' : ''}`} key={index} $index={index} />
                            ))}
                        </ButtonBlobs>
                    </ButtonInner>
                </BlobButton>
            </ButtonsContainer>
            <SVGFilter />
        </button>
    );
};

export default WaveBtn;
