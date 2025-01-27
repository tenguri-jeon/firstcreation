import { AllianceTitleContainer } from './style';

const AllianceTitle = ({ txt }) => {
    return (
        <AllianceTitleContainer>
            <h3>
                {txt}
                <span>항목은 필수 입력 사항입니다.</span>
            </h3>

            {/* contact에만 있음 */}
            {/* <p>
                입력하신 개인 정보는 개설 문의에 대한 답변 목적으로 사용되며, <b>이용 목적 달성시 지체 없이 파기</b>합니다.
            </p> */}
        </AllianceTitleContainer>
    );
};

export default AllianceTitle;
