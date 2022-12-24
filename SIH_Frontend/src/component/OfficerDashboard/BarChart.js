import React from 'react'
import {Bar} from 'react-chartjs-2' 
// import {Chart as ChartJS} from 'chart.js/auto';

let xValues = ["Jan", "Feb", "Mar", "Apr", "Jun","Jul", "Aug", "Sep", "Oct", "Nov"];
let yValues = [55, 49, 44, 24, 15,55, 49, 44, 24, 15,12,10];
let barColors = ["hsl(12,88%,59%)","hsl(12,88%,59%)","hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)"  ];

function BarChart() {
  return
     <Bar data={
          {
          labels :["Jan", "Feb", "Mar", "Apr", "Jun","Jul", "Aug", "Sep", "Oct", "Nov"],
          datasets :  [{
               labels : "pop",
               data : [55, 49, 44, 24, 15,55, 49, 44, 24, 15,12,10],
          }],
          backgroundColor : ["hsl(12,88%,59%)","hsl(12,88%,59%)","hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)"  ]
     }
     }/>;
}

export default BarChart