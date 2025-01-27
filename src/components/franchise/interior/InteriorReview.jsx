import { InteriorReviewContainer } from './style';
import InteriorTitle from './InteriorTitle';
import InteriorReviewPic from './InteriorReviewPic';
import interiorData from '../../../assets/api/interior_desc';

const InteriorReview = () => {
    const reviewData = interiorData.find((item) => item.category === 'review').list;

    return (
        <InteriorReviewContainer>
            <div className="inner">
                <InteriorTitle title={'인테리어 전문가가 만듭니다.'} />
                <div className="box">
                    <div className="txt">
                        <p className="desc">
                            프랜차이즈의 틀에 박힌 디자인이 아닙니다.
                            <br className="pc" />
                            "인테리어가 멋져요"라는 한마디를 듣기 위해
                            <br className="pc" />
                            디저트39 인테리어 전문가들이 다양한 시도로 노력하고 있습니다.
                        </p>
                        <div className="pic">
                            <img
                                src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/interior_se06_img01.png"
                                alt="인테리어 전문가가 만듭니다"
                            />
                        </div>
                    </div>
                    <div className="pics">
                        {reviewData.map((item) => (
                            <InteriorReviewPic item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </InteriorReviewContainer>
    );
};

export default InteriorReview;
