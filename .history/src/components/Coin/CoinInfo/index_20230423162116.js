import React from 'react'

function CoinInfo({heading,desc}) {
    return (
      <div className="gray-wrapper">
        <h2 className='coin-info-heading'>{heading}</h2>
        <p className=''>{desc}</p>
      </div>
    );
}

export default CoinInfo;