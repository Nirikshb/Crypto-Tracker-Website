import React from 'react'

function LineChart({ chartDats, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsiv:tru
    }
  return (
    <div>index</div>
  )
}

export default LineChart;