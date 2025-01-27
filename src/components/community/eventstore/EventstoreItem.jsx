import { Link } from 'react-router-dom';
import { EventstoreItemWrap } from './Eventstorestyle';

const EventstoreItem = ({ event }) => {
    const { id, title, date } = event;
    return (
        <EventstoreItemWrap>
            <td className="id">{id}</td>

            <td className="tit">
                <Link to={`/community/eventstore/${id}`}>{title}</Link>
            </td>

            <td className="date">{date}</td>
        </EventstoreItemWrap>
    );
};

export default EventstoreItem;
