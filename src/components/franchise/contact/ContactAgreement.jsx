import ContactAgreementItem from './ContactAgreementItem';
import ContactPopup01 from './ContactPopup01';
import { ContactAgreementContainer } from './style';

const ContactAgreement = () => {
    return (
        <ContactAgreementContainer>
            <ContactAgreementItem
                id={'agree1'}
                txt={'개인정보취급방침을 읽었으며 이에 동의합니다.'}
                button={'개인정보취급방침'}
                PopupComponent={ContactPopup01}
            />
        </ContactAgreementContainer>
    );
};

export default ContactAgreement;
