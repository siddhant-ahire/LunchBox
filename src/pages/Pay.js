import React from 'react'
import Footer from '../components/Footer/Footer'
import Price from '../components/Price/Price'

const Pay = () => {
    return (
        <>
            <div>
                <div className="inner-banner">
                    <section className="w3l-breadcrumb">
                        <div className="container">
                            <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">Payments</h4>
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="index.html">Home</a></li>
                                <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Pay</li>
                            </ul>
                        </div>
                    </section>
                </div>
                {/* //inner banner */}
                {/* menu */}
                <section className="w3l-content-11-main">
                    <div className="content-design-11 pt-md-4 pt-1 pb-5">
                        <div className="container pb-md-4 pb-3">
                            <div className="content-sec-11 mt-5 pt-lg-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 columns">
                                        <img src="assets/images/imp/qr.jpeg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //promocode section */}
                {/* footer */}
                <Footer/>
            </div>

        </>
    )
}

export default Pay
