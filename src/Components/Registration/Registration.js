import React from 'react';
import './Registration.css';
import PlayButton from '../../Assets/Group 117.png'
import BenefitCard from './BenefitCard';
import benefits from './BenefitsArr';
const Registration = () => {
    return (
        <div className='registration'>
            <div className="head">
                <p>Watch the video about UAE or Offshore Company Registration</p>
                <img src={PlayButton} alt='' srcSet=''/>
            </div>
            <div className="mission">
                <h1><span>Dedicated</span><br /> to our mission we are</h1>
                <p>Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</p>
            </div>
            <div className="benefits">
                <BenefitCard benefits={benefits}/>
            </div>
        </div>
    );
}

export default Registration;
