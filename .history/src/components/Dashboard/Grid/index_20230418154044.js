
import React from 'react'
import './style.css'

function Grid({coin}) {
  return (
      <div className='grid-container'>
          <div className='info-flex'>
              <img src={coin.image} className='coin-logo'/>
              <div class>
                  
              </div>
          </div>
    </div>
  )
}

export default Grid