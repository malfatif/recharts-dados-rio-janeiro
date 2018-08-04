import React from 'react';
import ReactDOM from 'react-dom';
import Recharts from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { curveCardinal } from 'd3-shape';


const titulo = 'Desocupação de pessoas ativas em %';

const data = [
    {Mes: 'mar/15', "Pessoas economicamente ativas": 13.207, "Pessoas desocupadas": 4.84, "Pessoas ": 7.374},
    {Mes: 'abr/15', "Pessoas economicamente ativas": 13.234, "Pessoas desocupadas": 5.18, "Pessoas ": 7.927},
    {Mes: 'mai/15', "Pessoas economicamente ativas": 13.249, "Pessoas desocupadas": 5.02, "Pessoas ": 7.690},
    {Mes: 'jun/15', "Pessoas economicamente ativas": 13.329, "Pessoas desocupadas": 5.19, "Pessoas ": 8.033},
    {Mes: 'jul/15', "Pessoas economicamente ativas": 13.342, "Pessoas desocupadas": 5.73, "Pessoas ": 8.875},
    {Mes: 'ago/15', "Pessoas economicamente ativas": 13.383, "Pessoas desocupadas": 5.06, "Pessoas ": 7.875},
    {Mes: 'set/15', "Pessoas economicamente ativas": 13.491, "Pessoas desocupadas": 6.28, "Pessoas ": 9.903},
    {Mes: 'out/15', "Pessoas economicamente ativas": 13.493, "Pessoas desocupadas": 5.99, "Pessoas ": 9.455},
    {Mes: 'nov/15', "Pessoas economicamente ativas": 13.473, "Pessoas desocupadas": 5.91, "Pessoas ": 9.297},
    {Mes: 'dez/15', "Pessoas economicamente ativas": 13.390, "Pessoas desocupadas": 5.05, "Pessoas ": 7.875},
    {Mes: 'jan/16', "Pessoas economicamente ativas": 13.278, "Pessoas desocupadas": 5.12, "Pessoas ": 7.875},
    {Mes: 'fev/16', "Pessoas economicamente ativas": 13.129, "Pessoas desocupadas": 5.18, "Pessoas ": 7.822},
];

const cardinal = curveCardinal.tension(0.2);

const SimpleAreaChart = React.createClass({
	render () {
        return (
            <div>
                <h1 style={{color:"#805500"}}>
                    {titulo}
                </h1>
                <AreaChart width={1000} height={400} data={data}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="Mes"/>
                    <YAxis domain={[3, 8]} />
            
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>         
                    <Area type='monotone' dataKey='Pessoas desocupadas' stroke='#DC143C' fill='#DC143C' fillOpacity={0.3}/>           
                </AreaChart>
            </div>
        );
  }
})

export default SimpleAreaChart;