import SubLayout from '../../../common/sub/SubLayout';
import ComuPagination from '../../../components/Community/comupagination/ComuPagination';
import EventstoreList from '../../../components/Community/eventstore/EventstoreList';
import { EventStoreWrap } from './style';

const EventStore = () => {
    return (
        <EventStoreWrap>
            <SubLayout kTitle={'판매 매장 리스트'} eTitle={'Store List'} />
            <EventstoreList />
            <ComuPagination />
        </EventStoreWrap>
    );
};

export default EventStore;
