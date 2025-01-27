import { useEffect, useRef, useState } from 'react';
import { PartWrap } from './OC';

const OC3 = () => {
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
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/headquaters/franchise_business.gif?raw=true"
                        alt="franchise_business"
                    />
                </div>
                <p className="partName">가맹사업본부</p>
            </div>
            <div className="line">
                <div className={`lineMotion ${isVisible1 ? 'visible' : ''}`} ref={imgRef1}></div>
            </div>
            <div className="descBox">
                <div className="name">가맹사업관리팀</div>
                <div className="name">운영팀</div>
                <div className="name">점포개발팀</div>
                <div className="name">메뉴개발팀</div>
                <div className="name">구매팀</div>
            </div>
        </PartWrap>
    );
};

export default OC3;
