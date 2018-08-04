import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { BarChart, Bar, Cell,  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

const titulo = 'Abate de frangos';

const data = [
    {
      "Período": "3º/13",
      "Frango": 9862719
    },
    {
      "Período": "4º/13",
      "Frango": 10248767
    },
    {
      "Período": "1º/14",
      "Frango": 10148451
    },
    {
      "Período": "2º/14",
      "Frango": 10200572
    },
    {
      "Período": "3º/14",
      "Frango": 10656598
    },
    {
      "Período": "4º/14",
      "Frango": 12370373
    },
    {
      "Período": "1º/15",
      "Frango": 10465204
    },
    {
      "Período": "2º/15",
      "Frango": 10492809
    },
    {
      "Período": "3º/15",
      "Frango": 11039527
    },
    {
      "Período": "4º/15",
      "Frango": 11415778
    },
    {
      "Período": "1º/16",
      "Frango": 10162747
    },
    {
      "Período": "2º/16",
      "Frango": 10775175
    },
    {
      "Período": "3º/16",
      "Frango": 8961681
    },
    {
      "Período": "4º/16",
      "Frango": 9325977
    },
    {
      "Período": "1º/17",
      "Frango": 9148794
    },
    {
      "Período": "2º/17",
      "Frango": 9726940
    }
  ];
  const SimpleLineChartFrango = React.createClass({
      render () {
        return (
            <div>
                <h1 style={{color:"#805500"}}>
                    {titulo}
                </h1>
                <LineChart width={1000} height={400} data={data}
                    margin={{top:5, right: 30, left: 5, bottom: 5}}>
                <XAxis dataKey="Período"/>
                <YAxis domain={[8500000,12500000]}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Frango" stroke="#696969" activeDot={{r: 8}}/>
                </LineChart>
            </div>
      );
    }
  });

  export default SimpleLineChartFrango;