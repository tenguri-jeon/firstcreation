import { AllianceLayoutContainer } from './style';

const AllianceLayout = ({ etit, ktit }) => {
    return (
        <AllianceLayoutContainer>
            <div className="inner">
                <h2>
                    {etit ? <b className="eng">{etit}</b> : null}
                    {ktit ? <b className="kor">{ktit}</b> : null}
                    <span>제휴·제안</span>
                </h2>
            </div>
        </AllianceLayoutContainer>
    );
};

export default AllianceLayout;
