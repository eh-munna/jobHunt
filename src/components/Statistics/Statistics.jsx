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
import vector1 from '../../images/Vector-1.png';
const assignmentData = [
  {
    id: 1,
    assignmentNo: 1,
    name: 'Basic',
    marks: 60,
    pv: 2400,
    amt: 2400,
  },

  {
    id: 2,
    assignmentNo: 2,
    name: 'Responsive',
    marks: 60,
    pv: 1398,
    amt: 2210,
  },
  {
    id: 3,
    assignmentNo: 3,
    name: 'Framework',
    marks: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    id: 4,
    assignmentNo: 4,
    name: 'JS',
    marks: 50,
    pv: 3908,
    amt: 2000,
  },
  {
    id: 5,
    assignmentNo: 5,
    name: 'DOM',
    marks: 60,
    pv: 4800,
    amt: 2181,
  },
  {
    id: 6,
    assignmentNo: 6,
    name: 'API',
    marks: 60,
    pv: 3800,
    amt: 2500,
  },
  {
    id: 7,
    assignmentNo: 7,
    name: 'Debug',
    marks: 60,
    pv: 4300,
    amt: 2100,
  },
  {
    id: 8,
    assignmentNo: 8,
    name: 'React',
    marks: 60,
    pv: 4300,
    amt: 2100,
  },
];

const Statistics = () => {
  return (
    <div>
      <div className="bg-[#f8f9ff] py-20 relative">
        <h2 className="text-center text-[#1A1919] text-3xl font-semibold">
          Statistics
        </h2>
      </div>
      <img className="absolute right-0 top-0" src={vector1} alt="" />
      <div className="container mx-auto py-4 md:py-0 px-6 md:px-12">
        <div className="my-7 md:my-12 2/3 h-1/2">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              width={500}
              height={400}
              data={assignmentData}
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
    </div>
  );
};

export default Statistics;
