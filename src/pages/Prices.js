import React from 'react'

const Prices = () => {
    return (
        <>
            <div className="another-sec">
        <h3 className="title-big mb-2">Monthly plan</h3>
        <div className="row menu-body">
          {/* Section starts: Dinner */}
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>Mini</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-12 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>@ ₹2999/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Breakfast and dinner.</p>
                  <p>4 Days special and 3 days veg.</p>
                  <p>get additional discount of ₹499/- on only veg package</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>Eco</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-12 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>@ ₹3499/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Lunch and dinner.</p>
                  <p>4 Days special and 3 days veg.</p>
                  <p>get additional discount of ₹499/- on only veg package</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>Premium</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-12 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>@ ₹3999/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Breakfast, Lunch and dinner.</p>
                  <p>4 Days special and 3 days veg.</p>
                  <p>get additional discount of ₹499/- on only veg package</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
          {/* Section starts: Dinner */}
          {/* Section ends: Dinner */}
        </div>
      </div>
        </>
    )
}

export default Prices
