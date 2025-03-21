import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const CurrencyGraph = () => {
  // Mock data for the graph
  const data = [{
    time: '9AM',
    value: 28000
  }, {
    time: '10AM',
    value: 28300
  }, {
    time: '11AM',
    value: 28600
  }, {
    time: '12PM',
    value: 28400
  }, {
    time: '1PM',
    value: 28900
  }, {
    time: '2PM',
    value: 29200
  }, {
    time: '3PM',
    value: 29000
  }, {
    time: '4PM',
    value: 29400
  }];
  return <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{
        top: 5,
        right: 5,
        left: 0,
        bottom: 5
      }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{
          fill: '#4b5563',
          fontSize: 10
        }} />
          <YAxis domain={['dataMin - 500', 'dataMax + 500']} axisLine={false} tickLine={false} tick={{
          fill: '#4b5563',
          fontSize: 10
        }} width={40} />
          <Tooltip contentStyle={{
          backgroundColor: '#111827',
          borderColor: '#3b82f6',
          borderRadius: '0.375rem',
          fontSize: '0.75rem'
        }} itemStyle={{
          color: '#93c5fd'
        }} labelStyle={{
          color: '#e5e7eb',
          fontWeight: 'bold'
        }} formatter={value => [`$${value}`, 'BTC']} labelFormatter={label => `Time: ${label}`} />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{
          r: 4,
          fill: '#3b82f6',
          stroke: '#111827',
          strokeWidth: 2
        }} fillOpacity={1} fill="url(#colorValue)" />
        </LineChart>
      </ResponsiveContainer>
    </div>;
};
export default CurrencyGraph;