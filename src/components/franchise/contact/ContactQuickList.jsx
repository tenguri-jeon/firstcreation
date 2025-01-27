import { ContactQuickListContainer } from './style';
import { Link, useNavigate } from 'react-router-dom';

const ContactQuickList = () => {
    const navigate = useNavigate();

    return (
        <ContactQuickListContainer className="quick">
            <ul className="list">
                <li className="item item01" onClick={() => navigate('/franchise/alliance/alliancePurchasing')}>
                    <Link to={'/franchise/alliance/alliancePurchasing'}>
                        <div className="icon"></div>
                        <div className="tit">
                            <p>Wholesale</p>
                            <strong>
                                기업 및 단체
                                <br className="mo" />
                                구매 문의
                            </strong>
                        </div>
                    </Link>
                </li>
                <li className="item item02" onClick={() => navigate('/franchise/alliance/allianceEntry')}>
                    <Link to={'/franchise/alliance/allianceEntry'}>
                        <div className="icon"></div>
                        <div className="tit">
                            <p>Store Proposal</p>
                            <strong>입점 제의</strong>
                        </div>
                    </Link>
                </li>
                <li className="item item03" onClick={() => navigate('/franchise/alliance/allianceSupplier')}>
                    <Link to={'/franchise/alliance/allianceSupplier'}>
                        <div className="icon"></div>
                        <div className="tit">
                            <p>Business Collaboration</p>
                            <strong>협력사 신청</strong>
                        </div>
                    </Link>
                </li>
            </ul>
        </ContactQuickListContainer>
    );
};

export default ContactQuickList;
