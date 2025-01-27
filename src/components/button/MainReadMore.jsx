import { Link } from 'react-router-dom';
import { MainReadMoreBtnWrap } from './MainReadMoreCss';

const MainReadMore = ({ linkUrl, bg, circleBg }) => {
    /* 
        props guide
        linkUrl : 연결할 URL
        circleBg : 원 배경색
        bg : 버튼 내부 배경색

        ex)
        <ReadMore linkUrl={'/franchise/interior'} circleBg={'')} bg={''} />
    */
    return (
        <MainReadMoreBtnWrap style={{ backgroundColor: bg }}>
            <Link to={linkUrl}>
                <>
                    <span className="engText">READ MORE</span>
                    <span className="circle back" style={{ backgroundColor: circleBg }}>
                        <span className="arrow">
                            <img
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/724a0b41d66f450930a5bdd5d1ce95e6fa567964/icon/arrow_black_icon.svg"
                                alt="화살표 아이콘"
                            />
                        </span>
                    </span>
                </>
            </Link>
        </MainReadMoreBtnWrap>
    );
};

export default MainReadMore;
