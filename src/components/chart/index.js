import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import moment from 'moment';

const formatDate = (tickItem) => moment(tickItem, 'DD-MM-YYYY').format('DD. MMM');
const formatNumber = (tickItem) => Number(tickItem) > 9999 ? `${Math.floor(Number(tickItem)/1000)}k` : tickItem;

/**
 * One X-Axis (Date) and Two Y-axis (Number) chart
 * @param header
 * @param data
 * @param xAxisField
 * @param leftYAxisField
 * @param rightYAxisField
 * @returns {*}
 * @constructor
 */
const Chart = ({header, data, config: {xAxisField, leftYAxisField, rightYAxisField}}) => (
  <>
    {header}
    <ResponsiveContainer width='100%' aspect={4.0 / 1.0}>

      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey={xAxisField} tickFormatter={formatDate}/>
        <YAxis yAxisId="left" tickFormatter={formatNumber} label={{value: leftYAxisField, angle: -90, position: 'left'}}/>
        <YAxis yAxisId="right" tickFormatter={formatNumber} orientation="right" label={{value: rightYAxisField, angle: 90, position: 'right'}}/>
        <Tooltip/>
        <Legend/>
        <Line yAxisId="left" type="monotone" dataKey={leftYAxisField} stroke="#8884d8" activeDot={{r: 8}}/>
        <Line yAxisId="right" type="monotone" dataKey={rightYAxisField} stroke="#82ca9d"/>
      </LineChart>
    </ResponsiveContainer>
  </>
);

export default Chart
