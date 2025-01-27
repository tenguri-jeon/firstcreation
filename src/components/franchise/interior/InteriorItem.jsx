import { useEffect, useRef, useState } from 'react';
import InteriorTitle from './InteriorTitle';
import { InteriorItemContainer } from './style';
import InteriorPicture from './InteriorPicture';
import InteriorPhoto from './InteriorPhoto';

const InteriorItem = ({ item }) => {
    return (
        <InteriorItemContainer>
            <div className="inner">
                <InteriorTitle title={item.title} />
                {item.items.map((i) => (
                    <div className="box" key={i.id}>
                        <div className="txt">
                            <p className="addr">
                                <b>{i.store}</b>
                                {i.addr}
                            </p>
                            {i.desc ? (
                                <p className="desc">
                                    {i.desc.map((t, idx) => (
                                        <span key={idx}>
                                            {t}
                                            <br className="pc" />
                                        </span>
                                    ))}
                                </p>
                            ) : null}
                        </div>
                        <div className="pics">
                            {i.img.map((pic, idx) => (
                                <InteriorPicture key={idx} pic={pic} i={i} />
                            ))}
                        </div>
                        {i.photoImg ? (
                            <div className="photo">
                                <p>PHOTO ZONE</p>
                                <div className="photos">
                                    {i.photoImg.map((pic, idx) => (
                                        <InteriorPhoto key={idx} pic={pic} i={i} />
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </InteriorItemContainer>
    );
};

export default InteriorItem;
