import { InteriorListContainer } from './style';
import InteriorItem from './InteriorItem';
import InteriorDetail from './InteriorDetail';
import InteriorReview from './InteriorReview';
import interiorDesc from '../../../assets/api/interior_desc';

const InteriorList = () => {
    const interiorData = interiorDesc.find((item) => item.category === 'interior').list;

    return (
        <InteriorListContainer>
            {interiorData.map((item) => (
                <InteriorItem item={item} key={item.id} />
            ))}
            <InteriorDetail />
            <InteriorReview />
        </InteriorListContainer>
    );
};

export default InteriorList;
