import InteriorKeyword from '../../../components/franchise/interior/InteriorKeyword';
import InteriorList from '../../../components/franchise/interior/InteriorList';
import InteriorTitle from '../../../components/franchise/interior/InteriorTitle';
import InteriorVisual from '../../../components/franchise/interior/InteriorVisual';
import { InteriorContainer } from './style';

const Interior = () => {
    return (
        <InteriorContainer>
            <InteriorVisual />
            <InteriorKeyword />
            <InteriorList />
        </InteriorContainer>
    );
};

export default Interior;
