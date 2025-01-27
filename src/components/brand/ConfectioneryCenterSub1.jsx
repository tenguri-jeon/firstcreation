import { ConfectioneryCenterSub1Wrap } from './ConfectioneryCenterSub1Css';
import ConfectioneryCenterList from '../../assets/api/brandConfectioneryCenterDetail';
import { useEffect, useRef, useState } from 'react';

const ConfectioneryCenterSub1 = () => {
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState({});
    const itemRefs = useRef([]);

    // detail
    useEffect(() => {
        // API에서 데이터 가져오기
        fetchData();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisibleItems((prev) => ({
                        ...prev,
                        [entry.target.dataset.id]: entry.isIntersecting,
                    }));
                });
            },
            { threshold: 0.5 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [items]);

    const fetchData = async () => {
        setItems(ConfectioneryCenterList);
    };

    return (
        <ConfectioneryCenterSub1Wrap>
            <div className="subTitle">
                <div>01</div>
                <p>
                    디저트39의 제과센터는 빠르고 정확한 생산을 위하여
                    <br />
                    <b>제조 공정을 분업화하여 체계적인 생산 시스템</b>을 확립하였습니다.
                </p>
            </div>
            <ul>
                {ConfectioneryCenterList.map((item, index) => (
                    <li
                        key={item.id}
                        ref={(el) => (itemRefs.current[index] = el)}
                        data-id={item.id}
                        className={visibleItems[item.id] ? 'visible' : ''}
                    >
                        <div className="frame">
                            <img src={item.linkUrl} alt={`circle_Introdution_${item.id}`} />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: item.title }}></p>
                    </li>
                ))}
            </ul>
        </ConfectioneryCenterSub1Wrap>
    );
};

export default ConfectioneryCenterSub1;
