import React from 'react';
import "./Home.css";
const Home = () => {
    return (
        <div className='home'>
            <input type="text" placeholder='Search a Term | Topic'/>
            <div className="main">
                <div className="info">
                    <h4>Claim a free Quote</h4>
                    <h1><span>Get started</span> on fulfilling your Dubai or UAE dream.</h1>
                    <h4>UAE & Offshore Company</h4>
                    <p>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
                    <table>
                        <thead>
                            <tr>
                                <td>Start a Company</td>
                                <td>Renew a Company</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <img src='Assets/ILLUSTRATION.png' alt="" srcSet="" height={550} width={900}/>
            </div>
        </div>
    );
}

export default Home;
