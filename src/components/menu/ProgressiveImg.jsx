import { useState , useEffect } from "react";
import { ImgComponents } from "./styled";


const ProgressiveImg = ({placeholderSrc , src , ...props}) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const customClass =  placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";


    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);
    
    return (
        <ImgComponents
            {...{src : placeholderSrc , ...props}}
            alt={props.alt || ""}
            className={`image ${customClass}`
            }
        >
        </ImgComponents>
    );
};

export default ProgressiveImg;