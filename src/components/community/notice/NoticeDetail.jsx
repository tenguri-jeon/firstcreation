import { useNavigate, useParams } from 'react-router-dom';
import { NoticeDetailWrap } from './NoticeStyle';
import { useSelector } from 'react-redux';
import { FaRegEye } from 'react-icons/fa';
import SubLayout from '../../../common/sub/SubLayout';
const NoticeDetail = () => {
    const navigate = useNavigate();
    const { noticeID } = useParams();
    const { noticeData } = useSelector((state) => state.comuData);
    const newItem = noticeData.find((item) => item.id === Number(noticeID));
    const { id, title, imgurl, desc, date, hit } = newItem;

    return (
        <NoticeDetailWrap>
            <SubLayout kTitle={'공지'} eTitle={'Notice'} />
            <div className="inner">
                <div className="titleTop">
                    <h3>{title}</h3>
                    <div className="info">
                        <p className="date">{date}</p>
                        <p className="hit">
                            <i>
                                <FaRegEye />
                            </i>
                            {hit}
                        </p>
                    </div>
                </div>

                <div className="img">
                    <img src={imgurl} alt="" />
                </div>
                <div className="titleDesc">{desc}</div>

                <div className="back">
                    <button onClick={() => navigate('/community/notice')}>목록으로</button>
                </div>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
