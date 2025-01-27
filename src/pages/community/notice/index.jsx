import SubLayout from '../../../common/sub/SubLayout';
import NoticeList from '../../../components/Community/notice/NoticeList';

const Notice = () => {
    return (
        <div>
            <SubLayout kTitle={'공지'} eTitle={'Notice'} />
            <NoticeList />
        </div>
    );
};

export default Notice;
