import { SubLayoutContainer } from './style';

const SubLayout = ({ kTitle, eTitle, txt }) => {
    return (
        <SubLayoutContainer>
            <div className="inner">
                <h2>
                    디저트39
                    <b>{kTitle}</b>
                    {txt}
                    <span>{eTitle}</span>
                </h2>
            </div>
        </SubLayoutContainer>
    );
};

export default SubLayout;

/*
sublayout에 props로 제목 전달해주세요.
ex) <SubLayout kTitle={'창업경쟁력'} eTitle={'COMPETITIVE'} />
한글제목 뒤에 추가 텍스트있으면 props txt부분에 추가 텍스트 적어주세요
*/
