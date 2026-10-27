import { CartesianGrid, createHorizontalChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData,  RechartsDevtools } from '@recharts/devtools';
import { useEffect } from 'react';


const data = generateMockData(6, 231);

const Typed = createHorizontalChart()({ XAxis, YAxis, Tooltip, Line })

export default function Example() {
  useEffect(() => {
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
    document.body.style.margin = "0";
  }, [])
  
  
  return (

    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '900px', maxHeight: '70vh', aspectRatio: 1.618,  }}
      responsive
      data={data}
      margin={{
        top: 15,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis yAxisId="left" width="auto" />
      <Typed.YAxis yAxisId="right" orientation="right" width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Line yAxisId="left" type="monotone" dataKey="x" activeDot={{ r: 8 }} />
      <Typed.Line yAxisId="right" type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
    </div>
  );
}