import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePurchasingForm from '../../../components/franchise/alliance/AlliancePurchasingForm';
import { AlliancePurchasingContainer } from './style';
import { useNavigate } from 'react-router-dom';
import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AlliancePopup01 from '../../../components/franchise/alliance/AlliancePopup01';

// 제휴/제안 기업 및 단체 구매 문의
const AlliancePurchasing = () => {
    const navigate = useNavigate();

    return (
        <AlliancePurchasingContainer>
            <AllianceLayout ktit={'기업 및 단체 구매 문의'} />
            <div className="inner">
                <form action="" method="post">
                    <h3>기업 및 단체 구매 문의 개인정보 수집·이용 동의</h3>
                    <section className="agreement">
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'개인정보 수집 및 이용에 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup01}
                            page={'purchasing'}
                        />
                    </section>

                    <AlliancePurchasingForm />
                </form>
            </div>
        </AlliancePurchasingContainer>
    );
};

export default AlliancePurchasing;
