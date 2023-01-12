import React from 'react';
import './Services.css';
import ServiceArrLeft from './ServiceArrLeft';
import ServiceArrRight from './ServiceArrRight';
const Services = () => {
    return (
        <div className='services'>
            <div className="left">
                <div className="el">
                <h>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</h>
                <p>Claim a Free Quote</p>
                </div>
                {ServiceArrLeft.map((curItem,key)=>{
                    key++;
                    return(
                        <div className='card'>
                            <img src={curItem.image} alt="" srcSet="" height={210}  width={297}/>
                            <div className='data'>
                            <h2>{curItem.heading}</h2>
                            <p>{curItem.para}</p>
                            <p className='learn'><span>Learn more</span><img src='Assets/Vector.png' alt=''/></p>
                            </div> 
                        </div>
                    )
                })}
            </div>
            <div className="right">
                {ServiceArrRight.map((curItem,key)=>{
                        key++;
                        return(
                            <div className='card'>
                                <img src={curItem.image} alt="" srcSet="" />
                                <div className='data'>
                                <h2>{curItem.heading}</h2>
                                <p>{curItem.para}</p>
                                <p className='learn'><span>Learn more</span><img src='Assets/Vector.png' alt=''/></p>
                                </div> 
                            </div>
                        )
                    })}
                <div className="el">
                    <h>We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.</h>
                    <p className='learn'><span>More about our services</span><img src='Assets/Vector.png' alt=''/></p>
                </div>
            </div>
        </div>
    );
}

export default Services;
