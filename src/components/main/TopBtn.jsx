import { IoIosArrowUp } from "react-icons/io";
import { TopBtnCon } from "./slideBtn";

const TopBtn = () => {

    const handleClick = () => {
        if (!window.scrollY) return;

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <TopBtnCon onClick={handleClick}>
            <IoIosArrowUp size={20} color="white" />
            <strong>TOP</strong>
        </TopBtnCon>
    );
};

export default TopBtn;