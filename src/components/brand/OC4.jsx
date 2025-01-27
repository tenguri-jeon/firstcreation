import { useEffect, useRef, useState } from 'react';
import { PartWrap } from './OC';

const OC4 = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const imgRef1 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imgRef1.current) {
                        setIsVisible1(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: '-300px 0px',
            }
        );

        if (imgRef1.current) {
            observer.observe(imgRef1.current);
        }

        return () => {
            if (imgRef1.current) {
                observer.unobserve(imgRef1.current);
            }
        };
    }, []);

    return (
        <PartWrap>
            <div className="titleBox">
                <div className="icon">
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/headquaters/design.gif?raw=true"
                        alt="design"
                    />
                </div>
                <p className="partName">디자인본부</p>
            </div>
            <div className="line">
                <div className={`lineMotion ${isVisible1 ? 'visible' : ''}`} ref={imgRef1}></div>
            </div>
            <div className="descBox">
                <div className="name">디자인팀</div>
                <div className="name">인테리어팀</div>
                <div className="name">해외사업팀</div>
            </div>
        </PartWrap>
    );
};

export default OC4;
