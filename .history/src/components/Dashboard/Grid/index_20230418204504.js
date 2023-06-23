
import React from 'react'
import './style.css'
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Grid({coin}) {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="prise-flex">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingDownIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="prise-flex chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-red">
            <TrendingDownIcon />
          </div>
        </div>
        <div><
      )}
    </div>
  );
}

export default Grid