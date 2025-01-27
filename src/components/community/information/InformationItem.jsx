import { Link } from 'react-router-dom';
import { EventItemWrap } from './InformationStyle';

const InformationItem = ({ item }) => {
    const { id, title, imgurl, date } = item;
    return (
        <EventItemWrap>
            <Link to={`/community/information/${id}`}>
                <div className="bgbox">
                    <img src={imgurl} alt="" />
                    <div className="textbox">
                        <h3 className="tit">{title}</h3>
                        <span className="date">{date}</span>
                    </div>
                </div>
            </Link>
        </EventItemWrap>
    );
};

export default InformationItem;
