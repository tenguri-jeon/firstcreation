import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import EventstoreItem from './EventstoreItem';
import { EventstoreListWrap } from './Eventstorestyle';
import { addDataR, totalData } from '../../../store/modules/comupageSlice';
import { addItemR } from '../../../store/modules/comuSearchSlice';
import ComuSearch from '../comuSearch/ComuSearch';

const EventstoreList = () => {
    const { eventData } = useSelector((state) => state.comuData);
    const { filteredItems } = useSelector((state) => state.comuSearch);
    const { currPage, postsPerPage } = useSelector((state) => state.comupagination);
    const dispatch = useDispatch();

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = filteredItems.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(addDataR(eventData));
        dispatch(addItemR(eventData));
    }, [eventData]);

    useEffect(() => {
        dispatch(totalData(filteredItems));
    }, [filteredItems]);

    return (
        <EventstoreListWrap>
            <ComuSearch />
            <table className="noticeTable">
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th className="numbox">NO</th>
                        <th className="titbox">제목</th>
                        <th className="datebox">날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.length > 0 ? (
                        currentPosts.map((event) => <EventstoreItem key={event.id} event={event} />)
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                                게시물이 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </EventstoreListWrap>
    );
};

export default EventstoreList;
