import { useEffect, useRef, useState } from 'react';
import { SupportWrap, ImgBoxWrap, DetailWrap } from './SupportCss';

// detail DATA API
import SupportDetailList from '../../assets/api/brandSupportDetail';

const Support = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);

    // detail
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState({});
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imgRef1.current) {
                        setIsVisible1(entry.isIntersecting);
                    } else if (entry.target === imgRef2.current) {
                        setIsVisible2(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px',
            }
        );

        if (imgRef1.current) {
            observer.observe(imgRef1.current);
        }
        if (imgRef2.current) {
            observer.observe(imgRef2.current);
        }

        return () => {
            if (imgRef1.current) {
                observer.unobserve(imgRef1.current);
            }
            if (imgRef2.current) {
                observer.unobserve(imgRef2.current);
            }
        };
    }, []);

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
        setItems(SupportDetailList);
    };

    return (
        <SupportWrap>
            <p className="header">브랜드 지원</p>
            <h3>디저트39 물류센터</h3>
            <p className="sub">
                대형 물류 창고를 통한 안정적인 적재 및 긴급 발주 등에 효과적으로 대처하기 위한 다양한 프로세스를 구축하여
                <br />
                물류 배송에 만전을 기하였으며,언제든지 물류 배송이 가능한 자체 물류 시스템을 확립하여 안전하고 정확한 배송을 도와드리고
                있습니다.
            </p>
            <ImgBoxWrap>
                <div className={`frame1 ${isVisible1 ? 'visible' : ''}`} ref={imgRef1}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_02.jpg?raw=true"
                        alt="Introdution_02"
                    />
                </div>
                <div className={`frame2 ${isVisible2 ? 'visible' : ''}`} ref={imgRef2}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_03.jpg?raw=true"
                        alt="Introdution_03"
                    />
                </div>
            </ImgBoxWrap>
            <DetailWrap>
                <h4>
                    <span></span>Distribution Center
                </h4>
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            data-id={item.id}
                            className={visibleItems[item.id] ? 'visible' : ''}
                        >
                            <div className="icon">
                                <img src={item.iconUrl} alt={`distribution_center_${item.id}`} />
                            </div>
                            <div className="num" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="txt" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        </li>
                    ))}
                </ul>
            </DetailWrap>
        </SupportWrap>
    );
};

export default Support;
