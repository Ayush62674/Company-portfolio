import React from 'react';
import './Registration.css';
const BenefitCard = ({benefits}) => {
    return (
        <>
          {benefits.map((curItem,key)=>{
            key++;
            return(
            <div className='card' key={key}>
              <img src={curItem.image} alt="" srcSet="" height={48} width={48}/>
              <h2>{curItem.heading}</h2>
              <p>{curItem.para}</p>
              <a href='#get'>Get Started</a>
            </div>)
          })}  
        </>
    );
}

export default BenefitCard;
