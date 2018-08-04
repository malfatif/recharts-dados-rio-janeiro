import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { BarChart, Bar, Cell,  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

const titulo = 'Comparação de abates de animais em fazendas com frango';

const data = [
  {
    "Período": "3º/13",
    "Gado": 51097,
    "Suínos": 4546,
    "Frango": 9862719
  },
  {
    "Período": "4º/13",
    "Gado": 49450,
    "Suínos": 4835,
    "Frango": 10248767
  },
  {
    "Período": "1º/14",
    "Gado": 44068,
    "Suínos": 3549,
    "Frango": 10148451
  },
  {
    "Período": "2º/14",
    "Gado": 45458,
    "Suínos": 3469,
    "Frango": 10200572
  },
  {
    "Período": "3º/14",
    "Gado": 50986,
    "Suínos": 3205,
    "Frango": 10656598
  },
  {
    "Período": "4º/14",
    "Gado": 47485,
    "Suínos": 3149,
    "Frango": 12370373
  },
  {
    "Período": "1º/15",
    "Gado": 51047,
    "Suínos": 5317,
    "Frango": 10465204
  },
  {
    "Período": "2º/15",
    "Gado": 47038,
    "Suínos": 3962,
    "Frango": 10492809
  },
  {
    "Período": "3º/15",
    "Gado": 53104,
    "Suínos": 3536,
    "Frango": 11039527
  },
  {
    "Período": "4º/15",
    "Gado": 45329,
    "Suínos": 3627,
    "Frango": 11415778
  },
  {
    "Período": "1º/16",
    "Gado": 40608,
    "Suínos": 4200,
    "Frango": 10162747
  },
  {
    "Período": "2º/16",
    "Gado": 31230,
    "Suínos": 7095,
    "Frango": 10775175
  },
  {
    "Período": "3º/16",
    "Gado": 29610,
    "Suínos": 6135,
    "Frango": 8961681
  },
  {
    "Período": "4º/16",
    "Gado": 34447,
    "Suínos": 14812,
    "Frango": 9325977
  },
  {
    "Período": "1º/17",
    "Gado": 40381,
    "Suínos": 14389,
    "Frango": 9148794
  },
  {
    "Período": "2º/2017",
    "Gado": 44786,
    "Suínos": 18657,
    "Frango": 9726940
  }
];

const SimpleLineChartFrangoArregaco = React.createClass({
    render () {
    return (
        <div>
          <h1 style={{color:"#805500"}}>
              {titulo}
          </h1>
            <LineChart width={1000} height={400} data={data}
                margin={{top:5, right: 30, left: 5, bottom: 5}}>
          <XAxis dataKey="Período"/>
          <YAxis domain={[0,12500000]}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="Frango" stroke="#ff3300"/>
          <Line type="monotone" dataKey="Gado" stroke="#0000db"/>
          <Line type="monotone" dataKey="Suínos" stroke="#ff9900" activeDot={{r: 8}}/>
          </LineChart>
        </div>
    );
  }
})

export default SimpleLineChartFrangoArregaco;