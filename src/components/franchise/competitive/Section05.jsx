import { Section05Container } from './section05style';

const Section05 = () => {
    return (
        <Section05Container>
            <div className="inner">
                <div className="video">
                    <iframe
                        src="https://www.youtube.com/embed/Vca-qhv4FPE?si=uWhai2FiLC8c6996"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className="txt01">
                    <p>10평 내외 소형매장에서도 폭발적인 매출력!</p>
                    <p>진주혁신도시점 일 최고 매출 1600만 원 이상 달성</p>
                </div>
                <div className="txt02">
                    <p>디저트39는 공간의 한계를 극복하여</p>
                    <p>한계 매출이 없는 독보적인 경쟁력을 갖추고 있습니다.</p>
                </div>
            </div>
        </Section05Container>
    );
};

export default Section05;
