import React from 'react'
import Footer from '../components/Footer/Footer'

const Order = () => {
    return (
        <>
            <section className="w3l-promocode">
                <div className=" pt-md-0 pt-4">{/*promo-block add this class here to get back ground img*/}
                    <div className="container">
                        <div className="row aap-4-section">
                            <div className="col-lg-6 app4-right-image">
                                <img src="assets/images/img3.png" className="img-responsive" alt="App Device" />
                            </div>
                            <div className="contact-sec py-5">
                                <div className="container py-md-4 py-3">
                                    <div className="contact-w3pvt-form">
                                        <h3 className="title-big mb-5">Order Now</h3>
                                        <form method="post" className="w3layouts-contact-fm" action="order.php">
                                            <div className="row main-cont-sec">
                                                <div className="col-md-6 left-cont-contact">
                                                    <div className="form-group">
                                                        <label htmlFor="wName">Full Name</label>
                                                        <input className="form-control" type="text" name="name" id="wName" placeholder required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="cont">Contact</label>
                                                        <input className="form-control" type="number" name="contact" id="cont" placeholder required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 right-cont-contact mt-md-0 mt-1">
                                                    <div className="form-group">
                                                        <label htmlFor="orderl">Order details</label>
                                                        <textarea className="form-control" name="order" id="orderl" placeholder="Food titles and special modifications(if required)" required defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group-2 mt-4">
                                                <button type="submit" name="order_submit" className="btn button-style d-flex ml-auto">Send Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Order
