import React, { useEffect, useRef, useState } from 'react';
import { InteriorPhotoContainer } from './style';

const InteriorPhoto = ({ pic, i }) => {
    const [isVisible, setIsVisible] = useState(false);
    const photoRef = useRef(null);

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

        return observeIntersection(photoRef.current, onVisible);
    }, []);

    return (
        <InteriorPhotoContainer ref={photoRef} className={isVisible ? 'visible' : ''}>
            <img src={pic} alt={i.store + '포토존 사진'} />
        </InteriorPhotoContainer>
    );
};

export default InteriorPhoto;
