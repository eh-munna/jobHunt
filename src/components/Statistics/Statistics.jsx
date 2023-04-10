import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Basic HTML',
    marks: 60,
    pv: 2400,
    amt: 2400,
  },

  {
    name: 'Responsive',
    marks: 60,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Framework',
    marks: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Basic JS',
    marks: 50,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'DOM',
    marks: 60,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'API',
    marks: 60,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Debugging',
    marks: 60,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'React',
    marks: 60,
    pv: 4300,
    amt: 2100,
  },
];

const Statistics = () => {
  return (
    <div className="container mx-auto py-4 md:py-0 px-6 md:px-12">
      <div className="my-7 md:my-12 2/3 h-1/2">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
