import { useDispatch, useSelector } from 'react-redux';
import NoticeItem from './NoticeItem';
import { NoticeListWrap } from './NoticeStyle';
import { useEffect } from 'react';
import { addItemR } from '../../../store/modules/comuSearchSlice';
import ComuSearch from '../comuSearch/ComuSearch';

const NoticeList = () => {
    const { noticeData } = useSelector((state) => state.comuData);
    const { filteredItems } = useSelector((state) => state.comuSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        if (noticeData.length) {
            dispatch(addItemR(noticeData));
        }
    }, [noticeData]);

    return (
        <NoticeListWrap>
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
                    {filteredItems.map((noti) => (
                        <NoticeItem key={noti.id} noti={noti} />
                    ))}
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
