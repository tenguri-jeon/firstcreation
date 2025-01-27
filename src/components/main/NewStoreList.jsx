import { NewStoreListWrap, NewStoreLeft, NewStoreRight } from './NewStoreListCss';
import NewStoreListSlider from './NewStoreListSlider';

const NewStoreList = () => {
    return (
        <NewStoreListWrap>
            <NewStoreLeft>
                <span>NEW STORE</span>
                <br />
                OPENINGS
            </NewStoreLeft>
            <NewStoreRight>
                <div className="topComment">
                    24년 10~11월 기준<span> 신규 오픈 가맹점 현황 · 53 개 점포</span>
                </div>
                <NewStoreListSlider />
            </NewStoreRight>
        </NewStoreListWrap>
    );
};

export default NewStoreList;
