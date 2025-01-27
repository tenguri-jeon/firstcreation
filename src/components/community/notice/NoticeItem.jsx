import { Link } from 'react-router-dom';
import { NoticeItemWrap } from './NoticeStyle';

const NoticeItem = ({ noti }) => {
    const { id, title, text, date, hit } = noti;
    return (
        <NoticeItemWrap>
            <td className="id">{id}</td>

            <td className="tit">
                <Link to={`/community/notice/${id}`}>{title}</Link>
            </td>

            <td className="date">{date}</td>
        </NoticeItemWrap>
    );
};

export default NoticeItem;
