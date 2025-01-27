import SubLayout from '../../../common/sub/SubLayout';
import ComuPagination from '../../../components/Community/comupagination/ComuPagination';
import InformationList from '../../../components/Community/information/InformationList';

import { InformationWrap } from './style';

const Information = () => {
    return (
        <InformationWrap>
            <SubLayout kTitle={'이벤트 & 소식'} eTitle={'Event & News'} />

            <InformationList />
            <ComuPagination />
        </InformationWrap>
    );
};

export default Information;
