import { IoSearchOutline } from 'react-icons/io5';
import { SearchWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { addItem, searchItem, setFilterType } from '../../../store/modules/comuSearchSlice';
import { resetPage } from '../../../store/modules/comupageSlice';

const ComuSearch = () => {
    const dispatch = useDispatch();
    const { infoData } = useSelector((state) => state.comuData);
    const { noticeData } = useSelector((state) => state.comuData);
    const [text, setText] = useState('');
    const textRef = useRef();

    // 검색
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchItem(text));
        textRef.current.focus();
        dispatch(resetPage());
    };

    // 필터 타입 변경
    const onFilterChange = (e) => {
        dispatch(setFilterType(e.target.value));
        dispatch(searchItem(text));
    };

    // 컴포넌트가 마운트될 때 및 infoData가 변경될 때 items 설정
    useEffect(() => {
        dispatch(addItem(infoData));
        dispatch(addItem(noticeData));
    }, [infoData, noticeData]);

    return (
        <SearchWrap>
            <form onSubmit={onSubmit}>
                <div className="inner">
                    <select name="filterType" className="filterType" onChange={onFilterChange}>
                        <option value="title">제목</option>
                        <option value="desc">내용</option>
                        <option value="all">제목+내용</option>
                    </select>
                    <div className="search">
                        <input
                            type="text"
                            name="text"
                            value={text}
                            className="searchevent"
                            onChange={(e) => setText(e.target.value)}
                            ref={textRef}
                            placeholder="검색어를 입력하세요."
                        />
                        <button className="searchbtn" type="submit">
                            <i>
                                <IoSearchOutline />
                            </i>
                        </button>
                    </div>
                </div>
            </form>
        </SearchWrap>
    );
};

export default ComuSearch;
