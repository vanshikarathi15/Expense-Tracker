import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart=(props)=>{

    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...dataPointValues); //we used spread operator with datapointValues bcoz max()
    //func only takes comma separated values and returns maximum,so this array needs to be exposed as single values
    return (<div className="chart">
        {props.dataPoints.map((dataPoint)=> (
        <ChartBar 
            id={dataPoint.label}
            value={ dataPoint.value} 
            maxValue={totalMaximum}
            label={dataPoint.label} />))
        }
        </div>
    );
};
export default Chart;
