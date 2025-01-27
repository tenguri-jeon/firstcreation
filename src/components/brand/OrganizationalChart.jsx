import OC1 from './OC1';
import OC2 from './OC2';
import OC3 from './OC3';
import OC4 from './OC4';
import OC5 from './OC5';

const OrganizationalChart = () => {
    return (
        <>
            <div className="center">
                <h3>Organizational Chart</h3>
                <p className="desc">
                    디저트39 본사 에서는 <b>전문적인 인력과 체계</b>를 갖춰 고객과 가맹점주께 <b>최고의 가치를 제공</b>합니다.
                </p>
                <div className="partList">
                    <OC1 />
                    <OC2 />
                    <OC3 />
                    <OC4 />
                    <OC5 />
                </div>
            </div>
        </>
    );
};

export default OrganizationalChart;
