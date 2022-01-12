import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Product.css';

const Product = () => {
    return (
        <div id='product'>
            <div className="container text-start mt-4 ">
                <h1 className='fs-1 fw-bold'>Product</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                            <Card style={{ width: '18rem' }}>
                            
                                <Card.Body>
                                    <h3>Transport</h3>
                                    <Card.Title>Moving Grains smartly & efficiently</Card.Title>
                                    <Card.Text>
                                    A digital Agricultural logistics platform directly connecting grain shippers and carriers offering best prices.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFpbmVyJTIwdHJ1Y2t8ZW58MHx8MHx8&w=1000&q=80" />
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-6">
                    <div className="row">
                            <div className="col-6">
                            <Card style={{ width: '18rem' }}>
                            
                                <Card.Body>
                                    <h3>Marketplace</h3>
                                    <Card.Title>Modern way to buy and sell grains</Card.Title>
                                    <Card.Text>
                                    An online marketplace for buying and selling grain, directly connecting traders, food processors, exporters and wholesalers. 
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 img-fluid">
                            
                            <Card.Img className='img-fluid' variant="" src="https://images.pexels.com/photos/693857/pexels-photo-693857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" fluid />
                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
