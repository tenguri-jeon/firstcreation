import { useEffect, useState } from "react";
import { MainSideBtnCon } from "./slideBtn";
import { useNavigate } from "react-router-dom";

const MainSideBtn = ({ title }) => {
    const initialBtn = [
        {
            id: 1,
            title: "KAKAO",
            img: "https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/ac7edf1177b3a61fa30d9a6615d318daea2a9f0f/icon/kakao_icon.svg",
            subTit: "카카오 채널",
            a: "https://pf.kakao.com/_LNjxfK",
            link: "",
        },
        {
            id: 2,
            title: "STORE",
            img: "https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/f0f18514a4453b060d705fce52b844cee0c89b05/icon/store_icon.svg",
            subTit: "매장 위치보기",
            a: "",
            link: "store/competitiveness",
        },
    ];

    const [btnData, setBtnData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredBtn = initialBtn.filter((item) => item.title === title);
        setBtnData(filteredBtn);
    }, [title]);

    return (
        <MainSideBtnCon>
            {btnData.map((item) => (
                <div key={item.id} className="btn">
                    {item.a ? (
                        <a href={item.a} target="_blank" rel="noopener noreferrer">
                            <span>{item.subTit}</span>
                            <div className="wrap">
                                <div className="kakao-wrap">
                                    <img src={item.img} alt={item.title} />
                                    <strong>{item.title}</strong>
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div onClick={()=>navigate('store/competitiveness')}>
                            <span>{item.subTit}</span>
                            <div className="wrap">
                                <div className="kakao-wrap">
                                    <img src={item.img} alt={item.title} />
                                    <strong>{item.title}</strong>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </MainSideBtnCon>
    );
};

export default MainSideBtn;
