import SubLayout from '../../common/sub/SubLayout';
import Address from '../../components/brand/Address';
import { Inner, LocationWrap, MapWrap } from './style';

const Location = () => {
    return (
        <>
            <SubLayout kTitle={'오시는 길 안내'} eTitle={'DIRECTIONS'} />
            <Inner>
                <LocationWrap>
                    <div className="topBox">
                        <h2 className="title">
                            <span>본사</span>
                        </h2>
                        <div className="contactList">
                            <div className="contactWrap">
                                <div className="icon">
                                    <img
                                        src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/18100e7d83dc4d3b927ae46d887ee4d138125962/icon/adress_w.svg"
                                        alt="address"
                                    />
                                </div>
                                <div className="txtBox">
                                    <h3>Address</h3>
                                    <p>서울특별시 서초구 방배중앙로 155</p>
                                </div>
                            </div>

                            <div className="contactWrap">
                                <a href="tel:+8216442927">
                                    <div className="icon">
                                        <img
                                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/18100e7d83dc4d3b927ae46d887ee4d138125962/icon/tel_w.svg"
                                            alt="tel"
                                        />
                                    </div>
                                    <div className="txtBox">
                                        <h3>Tel</h3>
                                        <p>1644 - 2927</p>
                                    </div>
                                </a>
                            </div>

                            <div className="contactWrap">
                                <div className="icon">
                                    <img
                                        src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/18100e7d83dc4d3b927ae46d887ee4d138125962/icon/fax_w.svg"
                                        alt="fax"
                                    />
                                </div>
                                <div className="txtBox">
                                    <h3>Fax</h3>
                                    <p>02 - 501 - 3902</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MapWrap>
                        <Address />
                    </MapWrap>
                </LocationWrap>
            </Inner>
        </>
    );
};

export default Location;
