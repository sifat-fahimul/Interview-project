import React from 'react'

const Testomonial = () => {
    return (
        <div id='About'>
            <div className="container my-5 pt-5">
               <div className="row">
               <div className="col-lg-5 col-md-5">
                    <img className='img-fluid' src="https://agrigator.co/assets/images/about/about-3.jpg" alt="" />
                </div>
                <div className="col-lg-7 col-md-7 ps-4 text-start">
                    <h2 className='ps-5 fw-bold'>Fixing the fundamental problems of Agri commerce</h2>
                    <p className='ps-5 text-muted'>AgriGator aims to be a full stack solution in the agri supply chain. We are working on developing a marketplace that will help buyers and sellers trade in a wider network with the assurance of quality sourcing. The algorithm will help them find the best match as per their requirement offering them the best prices in the market. They will have access to on spot logistics for transport, banks for finance and lot more to help them with a smooth transaction. We won’t stop here. The real-time data from the entire supply chain will help them improve operations. We will keep making every effort to help every stakeholder of the supply chain in growing and expanding their business.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 ps-5 my-3">
                            <h3 className='fw-bold'>Simple</h3>
                            <p className='text-muted'>Hassle free commodity trade and access to services for end-to-end transaction</p>
                        </div>
                        <div className="col-lg-4 col-md-4 ps-5 my-3">
                            <h3 className='fw-bold'>Transparent</h3>
                            <p className='text-muted'>Unlike brokers no hidden cut on margins and commissions.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 ps-5 my-3">
                            <h3 className='fw-bold'>Digital</h3>
                            <p className='text-muted'>Reliable and secure full stack technology platform.</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Testomonial
