import { Link } from 'react-router-dom';
import { ReadMoreBtnWrap } from './ReadMoreCss';

const ReadMore = ({ linkUrl, txt, circle, square }) => {
    /* 
        props guide
        linkUrl : 연결할 URL
        txt : 버튼 내용
        * circle, square 둘 중 하나만 true 처리
            circle : 버튼 내부 도형 원
            square : 버튼 내부 도형 사각형

        ex)
        <ReadMore linkUrl={'/franchise/interior'} txt={'INTERIOR MORE'} circle={true} />
    */
    return (
        <ReadMoreBtnWrap>
            <Link to={linkUrl}>
                {square ? (
                    <>
                        <span className="engText bold">{txt}</span>
                        <span className="square back">
                            <span className="arrow">
                                <img
                                    src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/724a0b41d66f450930a5bdd5d1ce95e6fa567964/icon/arrow_black_icon.svg"
                                    alt="화살표 아이콘"
                                />
                            </span>
                        </span>
                    </>
                ) : null}
                {circle ? (
                    <>
                        <span className="engText">{txt}</span>
                        <span className="circle back">
                            <span className="arrow">
                                <img
                                    src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/724a0b41d66f450930a5bdd5d1ce95e6fa567964/icon/arrow_black_icon.svg"
                                    alt="화살표 아이콘"
                                />
                            </span>
                        </span>
                    </>
                ) : null}
            </Link>
        </ReadMoreBtnWrap>
    );
};

export default ReadMore;
