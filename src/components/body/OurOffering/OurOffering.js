import { faStickyNote, faWindowMaximize } from '@fortawesome/free-regular-svg-icons'
import { faDatabase, faSearch, faShareAlt, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OurOffering = () => {

    const truckIcon=<FontAwesomeIcon icon={faTruckMoving}></FontAwesomeIcon>
    const shareIcon=<FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
    const searchIcon=<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    const noteIcon=<FontAwesomeIcon icon={faStickyNote}></FontAwesomeIcon>
    const dataBaseIcon=<FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
    const windowsIcon=<FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>

    
    return (
        <div id='Offering'>
            <div className="container my-5 ">
            <div className="text-start my-5">
            <h1 className='fs-1 fw-bold'>Our Offering</h1>
            </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{truckIcon}</span>
                        <h3>Redfining Logistics</h3>
                        <p className='fw- fs-6 text-muted'>Connecting Carriers with quality shippers to move grain more efficiently.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{shareIcon}</span>
                        <h3>Nationwide Network</h3>
                        <p className='fw- fs-6 text-muted'>Access to reliable network of grain buyers, sellers and movers.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{searchIcon}</span>
                        <h3>Price Discovery</h3>
                        <p className='fw- fs-6 text-muted'>Price discovery to support negotiation in both logistics and trade.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{noteIcon}</span>
                        <h3>Review and Credit Ratings</h3>
                        <p className='fw- fs-6 text-muted'>Bringing reliablity through trust system to drive right set of behaviour across supply chain.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{dataBaseIcon}</span>
                        <h3>Forecasting and Insights</h3>
                        <p className='fw- fs-6 text-muted'>Automate operations, manage inventory, plan stocking better, re order, avoid wastage and in turn minimize capital asset.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 py-4">
                        <span className='text-primary fs-3'>{windowsIcon}</span>
                        <h3>Transaction</h3>
                        <p className='fw- fs-6 text-muted'>Secure Pay-out, live dashboard, control contracts, deliveries for every consignments and invoices.</p>
                    </div>


                   
                </div>
            </div>
        </div>
    )
}

export default OurOffering
