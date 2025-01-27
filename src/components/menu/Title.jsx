import { TitleComponents } from "./styled";

const Title = ({title}) => {
    return (
        <TitleComponents>
            <h2>{title}</h2>   
        </TitleComponents>
    );
};

export default Title;