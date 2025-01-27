import { EventListWrap } from './InformationStyle';
import InformationItem from './InformationItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addData } from '../../../store/modules/comupageSlice';
import { addItem } from '../../../store/modules/comuSearchSlice';
import ComuSearch from '../comuSearch/ComuSearch';

const InformationList = () => {
    // 검색된 결과를 포함하는 items를 가져옵니다.

    const { filteredItems } = useSelector((state) => state.comuSearch);
    const { infoData } = useSelector((state) => state.comuData);
    const { currPage, postsPerPage } = useSelector((state) => state.comupagination);

    const dispatch = useDispatch();

    // 페이지네이션 계산
    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = filteredItems.slice(firstPost, lastPost);

    // 처음 정보 데이터를 설정
    useEffect(() => {
        dispatch(addData(infoData));
        dispatch(addItem(infoData)); // search 상태에도 infoData 설정
    }, [infoData]);

    return (
        <EventListWrap>
            <div className="center">
                <ComuSearch />
                <ul>
                    {currentPosts.length > 0 ? (
                        currentPosts.map((item) => <InformationItem key={item.id} item={item} />)
                    ) : (
                        <li className="noitem">게시물이 없습니다.</li>
                    )}
                </ul>
            </div>
        </EventListWrap>
    );
};

export default InformationList;
