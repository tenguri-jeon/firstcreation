import { BsFillPatchCheckFill } from "react-icons/bs";
import { ElseInfoComponents } from "./styled";

const ElseInfo = () => {
    return (
        <ElseInfoComponents>
            <span>
                <BsFillPatchCheckFill/>
                체외로 배출 되는 건강한 0칼로리 알룰로스 당을 사용해 가벼움을 
                더하는 저칼로리 음료
            </span>
        </ElseInfoComponents>
    );
};

export default ElseInfo;