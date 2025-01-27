import { ContactContainer } from './style';
import ContactLayout from '../../../components/franchise/contact/ContactLayout';
import ContactAgreement from '../../../components/franchise/contact/ContactAgreement';
import ContactQuickList from '../../../components/franchise/contact/ContactQuickList';
import ContactIntro from '../../../components/franchise/contact/ContactIntro';
import ContactForm from '../../../components/franchise/contact/ContactForm';
import ContactTitle from '../../../components/franchise/contact/ContactTitle';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactLayout />
            <div className="inner">
                <ContactIntro />

                <form action="" method='post'>
                    <ContactAgreement />
                    <ContactTitle txt={'상담 희망자 정보'} />
                    <ContactForm />
                </form>

                <ContactQuickList />
            </div>
        </ContactContainer>
    );
};

export default Contact;
