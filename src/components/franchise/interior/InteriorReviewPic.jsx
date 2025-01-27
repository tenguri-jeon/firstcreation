import React, { useEffect, useRef, useState } from 'react';
import { InteriorReviewPicContainer } from './style';

const InteriorReviewPic = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const picRef = useRef(null);

    useEffect(() => {
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

        if (picRef.current) {
            observer.observe(picRef.current);
        }

        return () => {
            if (picRef.current) {
                observer.unobserve(picRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <InteriorReviewPicContainer ref={picRef} className={isVisible ? 'visible' : ''}>
            <img src={item.url} alt={`${item.store} 리뷰 사진`} />
        </InteriorReviewPicContainer>
    );
};

export default InteriorReviewPic;
