import React from 'react';
import ReactDOM from 'react-dom';
import SimpleLineChart from './SimpleLinechart';
import SimpleBarChart from './SimpleBarChart';
import SimpleAreaChart from './SimpleAreaChart';
import StackedBarChart from './StackedBarChart';
import SimpleLineChartFrango from './SimpleLineChartFrango';
import SimpleLineChartFrangoArregaco from './SimpleLineChartFrangoArregaco';

ReactDOM.render(
  <div>
    <div>
      <SimpleLineChart/>
    </div>
    <div>
      <SimpleLineChartFrango/>
    </div>
    <div>
      <SimpleLineChartFrangoArregaco/>
    </div>
    <div>
      <SimpleBarChart/>
    </div>
    <div>
      <SimpleAreaChart/>
    </div>
    <div>
      <StackedBarChart/>
    </div>
  </div>, 
  document.getElementById('container')
);