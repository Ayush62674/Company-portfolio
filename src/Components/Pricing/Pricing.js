import React from 'react';
import './Pricing.css';
import Details from './DetailsArr';
import DetailCard from './DetailCard';
const Pricing = () => {
    return (
        <div className="pricing">
            <h2>Most<span> popular affordable pricing </span>per jurisdictions are brought to you to kick off your adventure.</h2>  
            <div className="details">
                <DetailCard details={Details}/>
            </div>
        </div>
    );
}

export default Pricing;
