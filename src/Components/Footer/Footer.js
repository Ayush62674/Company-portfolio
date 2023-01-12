import React from 'react';
import Blog from './Blog';
import reviews from './Reviews';
import './Footer.css';
const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className="blog">
                <h1>Read about our blogs for more information on our processes</h1>
                {Blog.map((curItem,key)=>{
                    key++;
                    return(
                        <div className='card' key={key}>
                            <img src={curItem.image} alt="" srcSet="" width={60} height={60}/>
                            <div>
                                <p>{curItem.para}</p>
                                <p><span>5 minutes</span></p>
                            </div>
                        </div>
                    )
                })}
                <h1>Satisfied We are When Our Customers Are Happy</h1>
                {reviews.map((curItem,key)=>{
                    key++;
                    return(
                        <div className='card2 card' key={key}>
                            <div>
                            <img src={curItem.image} alt="" srcSet="" width={30} height={30} />
                            <hr/></div>
                            <div className='para'>
                            <p><b>" </b>{curItem.para}<b> "</b></p>
                            <p><span>{curItem.name}</span></p>
                            </div>
                        </div> 
                    )
                })}
            </div>
            <div className='footer-main'>
                <h1>Get to know the whole us and more of our services</h1>
                <ul>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Assurance</li>
                    <li>FAQ</li>
                    <li>Working at Varal-Singhania</li>
                </ul>
                <ul>
                    <li>Policies</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul>
                    <li>About</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li>Address</li>
                    <li>608 One Lake Plaza, Cluster T,</li>
                    <li>Al Sarayat Street, Jumeirah Lake Towers</li> 
                    <li>Dubai</li>
                    <li>United Arab Emirates</li>
                    <br/>
                    <li>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]</li>
                    <li>M: +971 55 794 2016</li>
                    <li>O: +971 4 447 2061</li>
                </ul>
                <br/>
                <h2>Subscribe Now</h2>
                <p>Subscribe now to receive our Newsletters about amazing opportunities in Dubai</p>
                <div className="subscribe">
                <input type="text" placeholder='Enter email Address'/>
                <img src='Assets/Group 34.png' alt="" srcSet="" height={70} width={60}/>
                </div>
                <div className="icn">
                    <img src="Assets/Vector-5.png" alt="" srcSet="" />
                    <img src="Assets/Vector-6.png" alt="" srcSet="" />
                    <img src="Assets/Vector-7.png" alt="" srcSet="" />
                    <img src="Assets/Vector-8.png" alt="" srcSet="" />
                </div>
            </div>
        </div>
        <p className='copyright'>Varaluae 2021 © All Right Reserved</p>
        </>
    );
}

export default Footer;
