import React from 'react'
import { Line } from 'react-chartjs-2';
import char
function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsiv: true,
        interaction: {
            mode: "index",
            intersect:false, 
        }
    }
  return <Line data={chartData} options={options} />;
}

export default LineChart;