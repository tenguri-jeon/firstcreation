import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

/*
recharts 라이브러리는 자체적인 함수내 css를 적용시킴으로 따로 style.js 파일이 필요 없음
*/

const Recharts = ({ data }) => {
    const formatAxis = (tickItem) => {
        return new Intl.NumberFormat('en-US').format(tickItem);
    };

    // 세로 1,000 단위
    const maxValue = Math.max(...data.map((item) => item.pv));
    const yAxisMax = Math.ceil(maxValue / 1000) * 1000;

    const CustomBarLabel = (props) => {
        const { x, y, width, height, value } = props;
        return (
            <text x={x + width / 2} y={y + height / 2} fill="#007d6a" fontWeight="bold" textAnchor="middle" dy={-6}>
                {formatAxis(value)}
            </text>
        );
    };

    // 커스텀 툴팁 컴포넌트
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length && payload[0].dataKey === 'pv') {
            return (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '5px 10px',
                        border: 'none',
                    }}
                >
                    <p>{`${label} : ${new Intl.NumberFormat('en-US').format(payload[0].value)}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <BarChart width={1440} height={720} data={data} margin={{ left: 15, right: 15, top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickMargin={10} />
            <YAxis
                tickFormatter={formatAxis}
                domain={[0, yAxisMax]}
                ticks={Array.from({ length: yAxisMax / 1000 + 1 }, (_, i) => i * 1000)}
                tickMargin={15}
            />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} cursor={false} trigger="hover" />
            <Bar dataKey="pv" fill="#cdf6f0" stroke="#05d2b2" strokeWidth={5} isAnimationActive={false}>
                <LabelList content={CustomBarLabel} position="top" />
            </Bar>
        </BarChart>
    );
};

export default Recharts;
