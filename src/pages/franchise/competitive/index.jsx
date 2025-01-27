import SubLayout from '../../../common/sub/SubLayout';
import {
    Competitive01,
    Competitive02,
    Competitive03,
    Competitive04,
    Competitive05,
    Competitive06,
    Competitive07,
    Competitive08,
    Competitive09,
    Competitive10,
    Competitive11,
    Competitive12,
    Competitive13,
    Competitive14,
    Competitive15,
    Competitive16,
    Competitive17,
    Competitive18,
    Competitive19,
    Competitive20,
} from '../../../components/franchise';
import { CompetitiveContainer } from './style';

const Competitive = () => {
    return (
        <CompetitiveContainer>
            <SubLayout kTitle={'창업경쟁력'} eTitle={'COMPETITIVE'} />
            <div id="content">
                <Competitive01 />
                <Competitive02 />
                <Competitive03 />
                <Competitive04 />
                <Competitive05 />
                <Competitive06 />
                <Competitive07 />
                <Competitive08 />
                <Competitive09 />
                <Competitive10 />
                <Competitive11 />
                <Competitive12 />
                <Competitive13 />
                <Competitive14 />
                <Competitive15 />
                <Competitive16 />
                <Competitive17 />
                <Competitive18 />
                <Competitive19 />
                <Competitive20 />
            </div>
        </CompetitiveContainer>
    );
};

export default Competitive;
