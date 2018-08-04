import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { BarChart, Bar, Cell,  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

const titulo = 'Comparação de abates de animais em fazendas';

const data = [
    {
      "Período": "3º/2013",
      "Bois": 21889,
      "Vacas": 13378,
      "Novilhos": 11873,
      "Novilhas": 3957,
      "Suínos": 4546
    },
    {
      "Período": "4º/2013",
      "Bois": 22388,
      "Vacas": 13030,
      "Novilhos": 10255,
      "Novilhas": 3777,
      "Suínos": 4835
    },
    {
      "Período": "1º/2014",
      "Bois": 17443,
      "Vacas": 12699,
      "Novilhos": 9540,
      "Novilhas": 4386,
      "Suínos": 3549
    },
    {
      "Período": "2º/2014",
      "Bois": 19382,
      "Vacas": 13154,
      "Novilhos": 8985,
      "Novilhas": 3937,
      "Suínos": 3469
    },
    {
      "Período": "3º/2014",
      "Bois": 19232,
      "Vacas": 14961,
      "Novilhos": 11926,
      "Novilhas": 4867,
      "Suínos": 3205
    },
    {
      "Período": "4º/2014",
      "Bois": 19099,
      "Vacas": 15516,
      "Novilhos": 8222,
      "Novilhas": 4648,
      "Suínos": 3149
    },
    {
      "Período": "1º/2015",
      "Bois": 27192,
      "Vacas": 14686,
      "Novilhos": 6340,
      "Novilhas": 2829,
      "Suínos": 5317
    },
    {
      "Período": "2º/2015",
      "Bois": 25022,
      "Vacas": 22016,
      "Novilhos": 0,
      "Novilhas": 0,
      "Suínos": 3962
    },
    {
      "Período": "3º/2015",
      "Bois": 26582,
      "Vacas": 18483,
      "Novilhos": 5779,
      "Novilhas": 2260,
      "Suínos": 3536
    },
    {
      "Período": "4º/2015",
      "Bois": 23684,
      "Vacas": 16744,
      "Novilhos": 3341,
      "Novilhas": 1560,
      "Suínos": 3627
    },
    {
      "Período": "1º/2016",
      "Bois": 18992,
      "Vacas": 13993,
      "Novilhos": 4861,
      "Novilhas": 2762,
      "Suínos": 4200
    },
    {
      "Período": "2º/2016",
      "Bois": 18532,
      "Vacas": 12698,
      "Novilhos": 0,
      "Novilhas": 0,
      "Suínos": 7095
    },
    {
      "Período": "3º/2016",
      "Bois": 17418,
      "Vacas": 12192,
      "Novilhos": 0,
      "Novilhas": 0,
      "Suínos": 6135
    },
    {
      "Período": "4º/2016",
      "Bois": 21145,
      "Vacas": 13302,
      "Novilhos": 0,
      "Novilhas": 0,
      "Suínos": 14812
    },
    {
      "Período": "1º/2017",
      "Bois": 21416,
      "Vacas": 13425,
      "Novilhos": 4233,
      "Novilhas": 1307,
      "Suínos": 14389
    },
    {
      "Período": "2º/2017",
      "Bois": 22692,
      "Vacas": 15577,
      "Novilhos": 4603,
      "Novilhas": 1914,
      "Suínos": 18657
    }
  ];
   

const SimpleLineChart = React.createClass({
	render () {
        return (
            <div>
                <h1 style={{color:"#805500"}}>
                    {titulo}
                </h1>
                <LineChart width={1000} height={400} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="Período"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Bois" stroke="#0000db" />
                <Line type="monotone" dataKey="Vacas" stroke="#ff3300" />
                <Line type="monotone" dataKey="Novilhos" stroke="#00802b" />
                <Line type="monotone" dataKey="Novilhas" stroke="#00e64d" />
                <Line type="monotone" dataKey="Suínos" stroke="#ff9900" />
                </LineChart>
            </div>
        );
  }
})

export default SimpleLineChart;