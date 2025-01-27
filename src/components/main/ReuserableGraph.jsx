import { ReuserableGraphWrap, CenterCommentWrap, GraphWrap, ChartTitleWrap } from './ReuserableGraphCss';
import { IoTriangle } from 'react-icons/io5';
import Recharts from '../../common/recharts/recharts';
import graphData from '../../assets/api/mainGraph';

const ReuserableGraph = () => {
    return (
        <ReuserableGraphWrap>
            <CenterCommentWrap>
                <p className="top">디저트39 친환경 리유저블 텀블러 사용 고객 604만 돌파!</p>
                <p className="mid">
                    디저트39에서 무상으로 제공되는 <br />
                    친환경 인증 리유저블 텀블러로
                    <br />
                    <span className="midSub">604만 2613 잔의 1회용 컵 사용을 줄였습니다.</span>
                </p>
                <p className="btm">&#39;국내 유일&#39; 2027년까지 탄소중립 실천 기업 디저트39</p>
            </CenterCommentWrap>
            <GraphWrap>
                <Recharts data={graphData} />
            </GraphWrap>
            <ChartTitleWrap>
                <IoTriangle />
                디저트39 리유저블 컵 재사용 실제 데이터[일자별]
                <IoTriangle />
            </ChartTitleWrap>
        </ReuserableGraphWrap>
    );
};

export default ReuserableGraph;
