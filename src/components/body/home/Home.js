import React from 'react';
import './Home.css';

// import Particles from "react-tsparticles";
import Particles from 'react-particles-js';
const Home = () => {  
    return (
        <div id='home'>
   
            <div className="banner">
            
                <div className="hedet-text mt-5">
                    <h1>BRIDGING INFORMATION GAP IN GRAIN SUPPLY CHAIN</h1>
                    <h4>Agri Focused Digital solution connecting traders, processors, wholesalers and carriers to make supply chain more efficient and transparent.</h4>
                </div>
               <div className="btn-style">
               <button className='btn btn-outline-light px-5 py-3'>DOWNLOAD APP</button>
               </div>
            </div>
        </div>
    )
}

export default Home
