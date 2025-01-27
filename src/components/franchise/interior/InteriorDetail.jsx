import interiorDesc from '../../../assets/api/interior_desc';
import InteriorDetailPic from './InteriorDetailPic';
import InteriorTitle from './InteriorTitle';
import { InteriorDetailContainer } from './style';

const InteriorDetail = () => {
    const detailData = interiorDesc.find((item) => item.category === 'detail').list[0];
    return (
        <InteriorDetailContainer>
            <div className="inner">
                <InteriorTitle title={detailData.title} bold={true} />
                {detailData.items.map((i) => (
                    <div key={i.id} className="box">
                        <div className="txt">
                            <p className="tit">{i.title}</p>
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
                        <div className={`pics ${i.img.length === 3 ? 'trd' : ''}`}>
                            {i.img.map((pic, idx) => (
                                <InteriorDetailPic key={idx} pic={pic} i={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </InteriorDetailContainer>
    );
};

export default InteriorDetail;
