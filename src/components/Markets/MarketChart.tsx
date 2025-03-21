import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
interface MarketChartProps {
  timeframe: string;
}
const MarketChart = ({
  timeframe
}: MarketChartProps) => {
  // Mock data - in a real app, this would be fetched based on the timeframe
  const data = [{
    time: '9AM',
    TSLA: 28000,
    RIVN: 18000,
    LCID: 12000
  }, {
    time: '10AM',
    TSLA: 28300,
    RIVN: 18200,
    LCID: 11800
  }, {
    time: '11AM',
    TSLA: 28600,
    RIVN: 18400,
    LCID: 12200
  }, {
    time: '12PM',
    TSLA: 28400,
    RIVN: 18100,
    LCID: 12100
  }, {
    time: '1PM',
    TSLA: 28900,
    RIVN: 18600,
    LCID: 12400
  }, {
    time: '2PM',
    TSLA: 29200,
    RIVN: 18800,
    LCID: 12600
  }, {
    time: '3PM',
    TSLA: 29000,
    RIVN: 18500,
    LCID: 12300
  }, {
    time: '4PM',
    TSLA: 29400,
    RIVN: 18900,
    LCID: 12700
  }];
  return <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{
        top: 5,
        right: 5,
        left: 0,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" opacity={0.2} />
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{
          fill: '#4b5563',
          fontSize: 12
        }} />
          <YAxis axisLine={false} tickLine={false} tick={{
          fill: '#4b5563',
          fontSize: 12
        }} width={60} />
          <Tooltip contentStyle={{
          backgroundColor: '#111827',
          borderColor: '#3b82f6',
          borderRadius: '0.375rem',
          fontSize: '0.875rem'
        }} itemStyle={{
          color: '#93c5fd'
        }} labelStyle={{
          color: '#e5e7eb',
          fontWeight: 'bold'
        }} />
          <Line type="monotone" dataKey="TSLA" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{
          r: 4
        }} />
          <Line type="monotone" dataKey="RIVN" stroke="#10b981" strokeWidth={2} dot={false} activeDot={{
          r: 4
        }} />
          <Line type="monotone" dataKey="LCID" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={{
          r: 4
        }} />
        </LineChart>
      </ResponsiveContainer>
    </div>;
};
export default MarketChart;