import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const titulo =  'Comparação de população Brasil x Rio de Janeiro em %';

const data = [
    {
      "Período": 2001,
      "Brasil": 100,
      "Rio de Janeiro": 11.84
    },
    {
      "Período": 2002,
      "Brasil": 100,
      "Rio de Janeiro": 11.86
    },
    {
      "Período": 2003,
      "Brasil": 100,
      "Rio de Janeiro": 11.88
    },
    {
      "Período": 2004,
      "Brasil": 100,
      "Rio de Janeiro": 11.94
    },
    {
      "Período": 2005,
      "Brasil": 100,
      "Rio de Janeiro": 11.97
    },
    {
      "Período": 2006,
      "Brasil": 100,
      "Rio de Janeiro": 12.00
    },
    {
      "Período": 2008,
      "Brasil": 100,
      "Rio de Janeiro": 11.94
    },
    {
      "Período": 2009,
      "Brasil": 100,
      "Rio de Janeiro": 11.95
    },
    {
      "Período": 2011,
      "Brasil": 100,
      "Rio de Janeiro": 11.93
    },
    {
      "Período": 2012,
      "Brasil": 100,
      "Rio de Janeiro": 11.94
    },
    {
      "Período": 2013,
      "Brasil": 100,
      "Rio de Janeiro": 12.28
    },
    {
      "Período": 2014,
      "Brasil": 100,
      "Rio de Janeiro": 12.31
    },
    {
      "Período": 2015,
      "Brasil": 100,
      "Rio de Janeiro": 12.35
    },
    {
      "Período": 2016,
      "Brasil": 100,
      "Rio de Janeiro": 12.38
    },
    {
      "Período": 2017,
      "Brasil": 100,
      "Rio de Janeiro": 12.42
    }
  ];


const StackedBarChart = React.createClass({
  render () {
    return (
        <div>
            <h1 style={{color:"#805500"}}>
                {titulo}
            </h1>
            <BarChart width={1000} height={400} data={data}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="Perídodo"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="Rio de Janeiro" stackId="a" fill="#e6e600" />
            <Bar dataKey="Brasil" stackId="a" fill="#29a329" />
            </BarChart>
         </div>
  );
}
})

export default StackedBarChart;