import React from 'react'
import "./style.css"
function CoinInfo({ heading, desc }) {
  const shortDesc
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      <p className="coin-info-desc" dangerouslySetInnerHTML={{__html:desc}}/>
    </div>
  );
}

export default CoinInfo;