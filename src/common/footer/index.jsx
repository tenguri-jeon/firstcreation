import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { LuFacebook } from 'react-icons/lu';
import { FiYoutube, FiArrowRightCircle } from 'react-icons/fi';
import { SiNaver } from 'react-icons/si';
import { RiTiktokLine } from 'react-icons/ri';
import { FooterWrap, LogoTabWrap, InfoWrap, ContactWrap } from './style';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <LogoTabWrap>
                    <Link to={'/main'}>
                        <img
                            src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/dessert39_logo.png?raw=true"
                            alt="dessert39_logo"
                        />
                    </Link>
                </LogoTabWrap>
                <InfoWrap>
                    <ul>
                        <li>
                            <span className="company">Company/CEO</span>
                            <p>SMC INTERNATIONAL CO., LTD. / Minchang Shin, Hanna Choi</p>
                        </li>
                        <li>
                            <span className="address">Address</span>
                            <p>155 Bangbae Jungang-ro, Seocho-gu, Seoul</p>
                        </li>
                        <li>
                            <span className="cs">Customer Service</span>
                            <p>
                                <a href="tel:1644-2927">1644 - 2927</a>
                            </p>
                        </li>
                        <li>
                            <span className="rn">Registration Number</span>
                            <p>719 - 86 - 00092</p>
                        </li>
                    </ul>
                </InfoWrap>
                <ContactWrap>
                    <Link to={'/franchise/alliance'}>
                        <button>
                            제휴·제안 문의하기 <FiArrowRightCircle />
                        </button>
                    </Link>
                    <div className="follow">
                        <h4>FOLLOW US</h4>
                        <ul className="followIcon">
                            <li>
                                <a target="_black" href="https://www.facebook.com/dessert39">
                                    <LuFacebook />
                                </a>
                            </li>
                            <li>
                                <a target="_black" href="https://www.instagram.com/dessert39_official/#">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a target="_black" href="https://www.youtube.com/channel/UC0ykSSGK7ik4_qIlyA-jpcg">
                                    <FiYoutube />
                                </a>
                            </li>
                            <li>
                                <a target="_black" href="https://blog.naver.com/dessertmakers">
                                    <SiNaver />
                                </a>
                            </li>
                            <li>
                                <a target="_black" href="https://www.tiktok.com/@dessert39_?">
                                    <RiTiktokLine />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>CONTACT US</h4>
                        <a href="mailto:dessert39@dessert39.com">
                            <span>
                                <img
                                    src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/490cd36408095b9d46c800e9f2c8eddb1eb9e648/icon/contact_icon.svg"
                                    alt="contact_icon"
                                />
                            </span>
                            dessert39@dessert39.com
                        </a>
                    </div>
                </ContactWrap>
            </div>
            <strong>TM & Copyright 2022 DESSERT 39. All Rights Reserved.</strong>
        </FooterWrap>
    );
};

export default Footer;
