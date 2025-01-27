import { GrNext, GrPrevious } from 'react-icons/gr';
import { PaginationWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    currentPage,
    firstPage,
    lastPage,
    nextPage,
    prevPage,
    totalData,
} from '../../../store/modules/comupageSlice';

const ComuPagination = () => {
    const dispatch = useDispatch();
    const { filteredItems } = useSelector((state) => state.comuSearch);
    const { currPage, totalPage } = useSelector((state) => state.comupagination);

    useEffect(() => {
        dispatch(totalData(filteredItems));
    }, [filteredItems]);

    const selectPage = (idx) => {
        if (idx >= 1 && idx <= totalPage && idx !== currPage) {
            dispatch(currentPage(idx));
        }
    };

    const arr = Array.from({ length: totalPage }, (_, i) => i + 1);

    return (
        <PaginationWrap>
            {currPage > 1 && (
                <div className="prev">
                    <button onClick={() => dispatch(firstPage())}>
                        <GrPrevious />
                    </button>
                    <button onClick={() => dispatch(prevPage())}>
                        <GrPrevious />
                    </button>
                </div>
            )}

            <div className="nums">
                {arr.map((page) => (
                    <button
                        key={page}
                        className={currPage === page ? 'active' : ''}
                        onClick={() => selectPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {currPage < arr.length && (
                <div className="next">
                    <button onClick={() => dispatch(nextPage())}>
                        <GrNext />
                    </button>
                    <button onClick={() => dispatch(lastPage())}>
                        <GrNext />
                    </button>
                </div>
            )}
        </PaginationWrap>
    );
};

export default ComuPagination;
