import React from 'react';
import '../componets/banner.css'  // Make sure the path is correct

const Banner = () => {
  return (
    <div className="banner">
      <h1>
        {Array.from({ length: 10 }).map((_, idx) => (
          <React.Fragment key={idx}>
            ✢ <span className="italic-text">Meet</span> the <span className="italic-text">Team</span> 
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
}

export default Banner;
