import React, { useState } from 'react';
import './style.css';

function CoinInfo({ heading, desc }) {
  const shortDesc = desc?.slice(0, 350) + '...';
  const longDesc = desc;
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  const renderDescription = () => {
    return (
      <div className="coin-info-description">
        <p dangerouslySetInnerHTML={{ __html: showFullDesc ? longDesc : shortDesc }} />
        {desc?.length > 350 && (
          <button onClick={toggleDescription} className="read-more-button">
            {showFullDesc ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc?.length > 200 ? renderDescription() : <p dangerouslySetInnerHTML={{ __html: desc }} />}
    </div>
  );
}

export default CoinInfo;
