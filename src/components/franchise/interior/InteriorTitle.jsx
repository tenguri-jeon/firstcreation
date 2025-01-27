import { InteriorTitleContainer } from './style';

const InteriorTitle = ({ title, bold }) => {
    return (
        <InteriorTitleContainer>
            <h3 className={`${bold ? 'bold' : ''}`}>{title}</h3>
        </InteriorTitleContainer>
    );
};

export default InteriorTitle;
