import { useNavigate, useParams } from 'react-router-dom';
import { EventstoreDetailWrap } from './Eventstorestyle';
import { useSelector } from 'react-redux';
import SubLayout from '../../../common/sub/SubLayout';

const EventstoreDetail = () => {
    const navigate = useNavigate();

    const { eventstoreID } = useParams();
    const { eventData } = useSelector((state) => state.comuData);
    const newItem = eventData.find((item) => item.id === Number(eventstoreID));
    const { title, desc, store, date } = newItem;

    const BackToList = () => {
        navigate('/community/eventstore');
    };

    return (
        <EventstoreDetailWrap>
            <SubLayout kTitle={'판매 매장 리스트'} eTitle={'Store List'} />
            <div className="inner">
                <div className="titleTop">
                    <h3>{title}</h3>
                    <div className="info">
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="titleDesc">
                    {desc}
                    <br />
                    <br />
                    {store}
                </div>

                <div className="back">
                    <button onClick={BackToList}>목록으로</button>
                </div>
            </div>
        </EventstoreDetailWrap>
    );
};

export default EventstoreDetail;
