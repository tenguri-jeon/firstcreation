import React, { useEffect, useRef, useState } from 'react';
import { InteriorDetailPicContainer } from './style';

const InteriorDetailPic = ({ pic, i }) => {
    const [isVisible, setIsVisible] = useState(false);
    const picRef = useRef(null);

    useEffect(() => {
        const observeIntersection = (target, callback) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setIsVisible(entry.isIntersecting);
                    });
                },
                {
                    threshold: 0.3,
                }
            );
            if (target) observer.observe(target);

            return () => {
                if (target) observer.unobserve(target);
            };
        };

        const onVisible = (entry) => {
            setIsVisible(entry.isIntersecting);
        };

        return observeIntersection(picRef.current, onVisible);
    }, []);

    return (
        <InteriorDetailPicContainer ref={picRef} className={`pic ${isVisible ? 'visible' : ''}`}>
            <img src={pic} alt={i.title + '사진'} />
        </InteriorDetailPicContainer>
    );
};

export default InteriorDetailPic;
