import More from '../button/More';
import { EventNewsWrap, TitleWrap } from './EventNewsCss';
import EventNewsSlider from './EventNewsSlider';

const EventNews = () => {
    return (
        <EventNewsWrap>
            <TitleWrap>Event & News</TitleWrap>
            <EventNewsSlider />
            <More linkUrl={'/community/information'} />
        </EventNewsWrap>
    );
};

export default EventNews;
