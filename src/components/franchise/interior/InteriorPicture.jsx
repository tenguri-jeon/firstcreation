import { useEffect, useRef, useState } from 'react';
import { InteriorPictureContainer } from './style';

const InteriorPicture = ({ pic, i }) => {
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
        <InteriorPictureContainer ref={picRef} className={isVisible ? 'visible' : ''}>
            <img src={pic} alt={i.store + '매장 사진'} />
        </InteriorPictureContainer>
    );
};

export default InteriorPicture;
