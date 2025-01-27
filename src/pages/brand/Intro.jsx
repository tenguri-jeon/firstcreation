import SubLayout from '../../common/sub/SubLayout';
import { ConfectioneryCenter, Special, Support } from '../../components/brand';

import { Inner } from './style';

const Intro = () => {
    return (
        <>
            <SubLayout kTitle={'소개'} eTitle={'Introduction'} />
            <Inner>
                <Special />
                <Support />
                <ConfectioneryCenter />
            </Inner>
        </>
    );
};

export default Intro;