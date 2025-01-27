import { useRef } from "react";
import { ClickMenuComponents } from "./styled";

const ClickMenu = ({imgurl , hoverimg , title ,handelScrollView}) => {
    return (
        <ClickMenuComponents onClick={handelScrollView}>
            <figure>
                <img src={imgurl} alt={title} />
                <img src={hoverimg} alt={title} />
            </figure>
            <strong>
                {title}
            </strong>
        </ClickMenuComponents>
    );
};

export default ClickMenu;