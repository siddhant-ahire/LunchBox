import React from 'react'
import Footer from '../components/Footer/Footer';
import Price from '../components/Price/Price';


const Prices = () => {
  return (
    <>
      <div className="cardprices">
        <div className="inner-banner">
          <section className="w3l-breadcrumb">
            <div className="container">
              <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">Prices</h4>
              <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Prices</li>
              </ul>
            </div>
          </section>
        </div>
        {/* //inner banner */}
        {/* menu */}
          <Price/>
        {/* //promocode section */}
        {/* footer */}
        <Footer/>
      </div>

    </>
  )
}

export default Prices
