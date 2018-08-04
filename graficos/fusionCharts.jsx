import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';

import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(FusionCharts)

var chartConfigs = {
    type: "Column2D",
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    dataSource: {
        chart:{},
        data: [{value: 500}, {value: 600}, {value: 700}]
    }
};

var MyApp = React.createClass({
    render: function () {
        return (
            <ReactFC {...chartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp {...chartConfigs} />,
    document.getElementById('container')
);