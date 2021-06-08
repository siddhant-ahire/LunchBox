import React from 'react'
import Footer from '../components/Footer/Footer'

const ContactUs = () => {
    return (
        <div>
            <div className="inner-banner">
                <section className="w3l-breadcrumb">
                    <div className="container">
                        <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">Contact Us</h4>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Contact Us</li>
                            <br /> Loding...
                        </ul>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default ContactUs
