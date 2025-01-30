import CheckBtn from "../button/CheckBtn";
import { BookIntroduceCon } from "./BookIntroduceCss";

const BookInroduction = () =>{

    return (
        <BookIntroduceCon>
            <div className="img-wrap">
                <img src="https://github.com/tenguri-jeon/firstCreationImg/blob/main/main/bookIntoduce_book,.png?raw=true" alt="첫창조 벗은발 책 소개" />
            </div>
            <div className="text-wrap">
                <div className="text-wrapper">
                    <div className="title">
                        <strong className="op80p">"</strong>
                        <strong>벗은발 선지서와 사도행전</strong>
                        <strong className="op80p">"</strong>
                    </div>
                    <span>광야에서 외치는 자의 소리!</span>
                    <p>
                        주와 복음을 위해 벗은발로 전세계 30여개국을 다니며 <br />
                        주의 복음을 전한 이석인(두요한) 선교사가 <br />
                        한국교회와 기독인들에게 전한다!
                    </p>
                </div>
                <small>이석인 (두요한) | 이석인</small>
                <CheckBtn/>
            </div>
        </BookIntroduceCon>
    );
}
export default BookInroduction;