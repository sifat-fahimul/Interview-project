import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    const fbIcon=<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const instaIcon=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkeIcon=<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    const twitterIcon=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    return (
        <div className='bg-dark text-light'>
            
            <div className="row py-5">
                <div className="col-lg-4 col-md-4">
                    <h1 className='fs-1 py-4'>AgriGator</h1>
                </div>
                <div className="col-lg-4 col-md-4 ">
                    <span className='fs-3 mx-2 text-secondary'>{fbIcon}</span>
                    <span className='fs-3 mx-2 text-secondary'>{instaIcon}</span>
                    <span className='fs-3 mx-2 text-secondary'>{linkeIcon}</span>
                    <span className='fs-3 mx-2 text-secondary'>{twitterIcon}</span><br />
                    <small className='text-warning'>Terms and ConditionPrivacy Policy</small>
                </div>
                <div className="col-lg-4 col-md-4">
                    <p>Copyright © 2020 AgriGator | Anati Technologies</p>
                    <p>Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
