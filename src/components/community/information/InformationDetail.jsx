import { FaRegEye } from 'react-icons/fa';
import { EventDetailWrap } from './InformationStyle';
import SubLayout from '../../../common/sub/SubLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InformationDetail = () => {
    const navigate = useNavigate();
    const { informationID } = useParams();
    const { infoData } = useSelector((state) => state.comuData);
    const newItem = infoData.find((item) => item.id === Number(informationID));
    const { id, title, imgurl, date, hit } = newItem;

    return (
        <EventDetailWrap>
            <SubLayout kTitle={'이벤트 & 소식'} eTitle={'Event & News'} />
            <div className="inner">
                <div className="tit_g">
                    <h3>{title}</h3>
                    <div className="etc">
                        <span className="etc_date">{date}</span>
                        <span className="etc_hit">
                            <i>
                                <FaRegEye />
                            </i>
                            {hit}
                        </span>
                    </div>
                </div>
                <div className="infoImg">
                    <img src={imgurl} />
                </div>
                <div className="back">
                    <button onClick={() => navigate('/community/information')}>목록으로</button>
                </div>
            </div>
        </EventDetailWrap>
    );
};

export default InformationDetail;
