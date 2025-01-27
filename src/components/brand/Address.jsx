import { useEffect, useState } from 'react';

const Address = () => {
    const { kakao } = window;

    const [map, setMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch('서울특별시 서초구 방배중앙로 155', function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image: new kakao.maps.MarkerImage(
                        'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/map/marker_map04.png',
                        new kakao.maps.Size(50, 50)
                    ),
                });

                const infowindow = new kakao.maps.InfoWindow({
                    content:
                        '<div style="padding:5px;font-size:12px"><a href="https://map.kakao.com/link/map/우리빌딩,' +
                        result[0].y +
                        ',' +
                        result[0].x +
                        '" target="_blank">우리빌딩</a></div>',
                });

                kakao.maps.event.addListener(marker, 'click', function () {
                    window.open(`https://map.kakao.com/link/map/우리빌딩,${result[0].y},${result[0].x}`, '_blank');
                });

                infowindow.open(map, marker);

                map.setCenter(coords);
            }
        });
    }, []);

    return <div id="map" style={{ width: '100%', height: '470px', marginTop: '50px' }}></div>;
};

export default Address;
