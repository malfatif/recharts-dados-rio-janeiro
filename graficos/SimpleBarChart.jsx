import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { BarChart, Bar, Cell,  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

const titulo = 'Índice geral e os grupos de produtos e serviços (%)';

const dataBar = [
      {name: 'Alimentação', "Variação acumulada no ano": -2.03, "Variação acumulada em 12 meses": -2.89, "Variação mensal": -0.11},
      {name: 'Habitação', "Variação acumulada no ano": 5.05, "Variação acumulada em 12 meses": 3.93, "Variação mensal": -0.55},
      {name: 'Art residência', "Variação acumulada no ano": -1.45, "Variação acumulada em 12 meses": -3.33, "Variação mensal": -0.16},
      {name: 'Vestuário', "Variação acumulada no ano": 0.10, "Variação acumulada em 12 meses": 1.65, "Variação mensal": -0.21},
      {name: 'Transportes', "Variação acumulada no ano": 0.23, "Variação acumulada em 12 meses": 0.85, "Variação mensal": -2.15},
      {name: 'Saúdes', "Variação acumulada no ano": 3.42, "Variação acumulada em 12 meses": 5.27, "Variação mensal": 0.28},
      {name: 'Desp Pessoais', "Variação acumulada no ano": 1.55, "Variação acumulada em 12 meses": 2.88, "Variação mensal": 0.44},
      {name: 'Educação', "Variação acumulada no ano": 7.55, "Variação acumulada em 12 meses": 7.59, "Variação mensal": 0.19},
      {name: 'Comunicação', "Variação acumulada no ano": -0.48, "Variação acumulada em 12 meses": -0.41, "Variação mensal": 0.46}
];

const SimpleBarChart = React.createClass({
	render () {
        return (
            <div>
                <h1 style={{color:"#805500"}}>
                    {titulo}
                </h1>
                <BarChart width={1000} height={400} data={dataBar}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <ReferenceLine y={0} stroke='#000'/>
                <Bar dataKey="Variação acumulada em 12 meses" fill="#87CEEB" />
                <Bar dataKey="Variação acumulada no ano" fill="#4682B4" />
                <Bar dataKey="Variação mensal" fill="#1E90FF" />
                </BarChart>
            </div>
        );
  }
})

export default SimpleBarChart;