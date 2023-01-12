import React from 'react';

const DetailCard = ({details}) => {
    return (
        <>
            {details.map((curItem,key)=>{
                key++;
                return(
                <div className="card" key={key}>
                <h3>{curItem.heading}</h3>
                <p className='para'><span>$2,997</span> One Time Payment</p>
                <h6>{curItem.para}</h6>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Attestation Charges</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Registered Agent</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Registered Office</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Varal Administrative</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Preparing Statutory File</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Liasing with Registration Authorities</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Due Diligence Appraisal</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Keeping The Register</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Seal Charges</span></p>
                <p><img src={key===2?'Assets/tic.png':curItem.image} alt="" srcSet="" height={15} width={15}/><span> Certificate of Good Standing</span></p>
                <button type='submit'>Continue</button>
                </div>
                )
            })} 
        </>
    );
}

export default DetailCard;
