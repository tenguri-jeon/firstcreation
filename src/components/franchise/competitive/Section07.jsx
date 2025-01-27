import { Section07Container } from './section07style';
import { FaUserCircle } from 'react-icons/fa';
import competitiveData from '../../../assets/api/competitive_slide';

const Section07 = () => {
    const se07Data = competitiveData.find((item) => item.sec === 7);

    return (
        <Section07Container>
            <div className="inner">
                <div className="left">
                    <h3>
                        코로나 역대 최대시기에도 2호점 이상 오픈중인 <span>디저트39의 경쟁력</span>
                    </h3>
                    <p>디저트39 2개 이상 오픈 점주님들 인터뷰</p>
                    <div className="video">
                        <iframe
                            src="https://www.youtube.com/embed/4GItSD_3oX4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <p>코로나에도 2호점 이상 오픈한 매장 점주님들께서 3, 4호점 오픈 생각까지 있다고 할 정도의 디저트39의 매출 경쟁력</p>
                </div>
                <div className="right">
                    <p className="title">디저트39 2호점 이상 오픈점</p>
                    <ul>
                        {se07Data.list.map((item) => (
                            <li key={item.id}>
                                {/* length2 이상이면 표시, 3이상이면 표시.  */}
                                <i>
                                    <FaUserCircle />
                                </i>
                                <p className="store01">
                                    <span>1호점</span>
                                    {item.store[0]}
                                </p>
                                <p className="store02">
                                    <span>2호점</span>
                                    {item.store[1]}
                                </p>
                                {item.store.length > 2 ? (
                                    <p className="store03">
                                        <span>3호점</span>
                                        {item.store[2]}
                                    </p>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section07Container>
    );
};

export default Section07;
