import styled from "styled-components";

export const MainSideBtnCon = styled.li`
    div.btn{
        cursor: pointer;
        display: flex;
        position: relative;
        justify-content: right;
        overflow: hidden;
        z-index: 50;
        background: #C0C0C0;
        border-radius: 70px;
        width: 70px;
        height: 70px;
        transition: 0.3s;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        position: relative;
        margin-top: 14px;
        a{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            width: 100%;
            span{
                /* transform: translate(20% , -50%); */
                position: absolute;
                white-space: nowrap;
                left: 0px;
                top: 0%;
                color: white;
                line-height: 70px;
                padding-left: 15px;
                opacity: 0;
                transition: 0.2s;
            }
            .wrap{
                padding: 12px;
                .kakao-wrap{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    img{
                        width: 24px;
                        height: 21px;
                        margin-right: 11px;
                    }
                    strong{
                        font-weight: bold;
                        color: white;
                        font-size: 14px;
                    }
                }
            }
        }
        span{
            /* transform: translate(20% , -50%); */
            position: absolute;
            white-space: nowrap;
            left: 0px;
            top: 0%;
            color: white;
            line-height: 70px;
            padding-left: 15px;
            opacity: 0;
            transition: 0.2s;
        }
        .wrap{
            padding: 12px;
            .kakao-wrap{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                img{
                    width: 24px;
                    height: 21px;
                    margin-right: 11px;
                }
                strong{
                    font-weight: bold;
                    color: white;
                    font-size: 14px;
                }
            }
        }
        &:hover{
            width: 170px;
            span{
                opacity: 1;
            }
        }
    }
`
export const TopBtnCon = styled.li`
 width: 170px;
    cursor: pointer;
    display: flex;
    position: relative;
    justify-content: right;
    background: #C0C0C0;
    border-radius: 70px;
    width: 70px;
    height: 70px;
    transition: 0.3s;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    strong{
        font-weight: bold;
        color: white;
        font-size: 14px;
    }

`