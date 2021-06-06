import React from 'react'

const Menu = () => {
    return (
        <>
         <div>
  {/* inner banner */}
  <div className="inner-banner">
    <section className="w3l-breadcrumb">
      <div className="container">
        <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">Menu</h4>
        <ul className="breadcrumbs-custom-path">
          <li><a href="index.html">Home</a></li>
          <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Menu</li>
        </ul>
      </div>
    </section>
  </div>
  {/* //inner banner */}
  {/* menu */}
  <div className="menu-w3ls py-5" id="menu">
    <div className="container py-md-4 py-3">
      <h3 className="title-big mb-2" style={{color: 'green'}}>Vegies</h3>
      <div className="row menu-body">
        {/* Section starts: Breakfast */}
        <div className="col-lg-6 menu-section">
          {/* Item starts */}
          <div className="row menu-item">
            <div className="col-3 p-0 position-relative">
              <img src="assets/images/menu2.jpg" className="img-responsive" alt="" />
            </div>
            <div className="col-9 pl-4">
              <div className="row no-gutters">
                <div className="col-9 menu-item-name">
                  <h6>Breakfast/Office lunch</h6>
                </div>
                <div className="col-3 menu-item-price text-right">
                  <h6>₹49/-</h6>
                </div>
              </div>
              <div className="menu-item-description">
                <p>Poori sabji/Roti Sabji/sattoo paratha/ aloo paratha (egg on request @ ₹10 per piece).</p>
              </div>
            </div>
          </div>
          {/* Item ends */}
          {/* Item starts */}
          <div className="row menu-item">
            <div className="col-3 p-0 position-relative">
              <img src="assets/images/items/rice.jpeg" className="img-responsive" alt="" />
            </div>
            <div className="col-9 pl-4">
              <div className="row no-gutters">
                <div className="col-9 menu-item-name">
                  <h6>Lunch/dinner</h6>
                </div>
                <div className="col-3 menu-item-price text-right">
                  <h6>₹59/-</h6>
                </div>
              </div>
              <div className="menu-item-description">
                <p>Chapati,rice,dal, gravy sabji, bhujia, salad and achar. Customizable on demand.</p>
              </div>
            </div>
          </div>
          {/* Item ends */}
          {/* Item starts */}
          {/* Item ends */}
        </div>
        {/* Section ends: Breakfast */}
        {/* Section starts: Breakfast */}
        <div className="col-lg-6 menu-section pl-lg-5">
          {/* Item starts */}
          <div className="row menu-item">
            <div className="col-3 p-0 position-relative">
              <img src="assets/images/items/vegmaggie.png" className="img-responsive" alt="" />
            </div>
            <div className="col-9 pl-4">
              <div className="row no-gutters">
                <div className="col-9 menu-item-name">
                  <h6>Veg-maggie</h6>
                </div>
                <div className="col-3 menu-item-price text-right">
                  <h6>₹39/-</h6>
                </div>
              </div>
              <div className="menu-item-description">
                <p>Get home cooked maggie with delicious and healthy vegetables.</p>
              </div>
            </div>
          </div>
          {/* Item ends */}
        </div>
        {/* Section ends: Breakfast */}
      </div>
      <div className="another-sec">
        <h3 className="title-big mb-2" style={{color: 'red'}}>Non-Veg</h3>
        <div className="row menu-body">
          {/* Section starts: Lunch */}
          <div className="col-lg-6 menu-section pr-lg-5">
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/eggcurry.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Egg-Thali</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹69/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Roti, Rice, Dal, Bhujiya, egg-curry, salad and achar.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/fish.jpeg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Fish-Thali</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹79/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Roti, Rice, Dal, Bhujiya, fish-curry, salad and achar.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenthali.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken-Thali</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹89/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Roti, Rice, Dal, Bhujiya, gravy-chicken, salad and achar.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Lunch */}
          {/* Section starts: Lunch */}
          <div className="col-lg-6 menu-section pl-lg-5">
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/vegmaggie.png" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Egg-maggie</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹49</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Get home cooked maggie with egg creating a delecious taste.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenmaggie.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken maggie</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>69/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Home cooked chicken-maggie with fresh meat.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Lunch */}
        </div>
      </div>
      <div className="another-sec">
        <h3 className="title-big mb-2">Weekend Special (Fri-Sat-Sun)</h3>
        <div className="row menu-body">
          {/* Section starts: Dinner */}
          <div className="col-lg-6 menu-section pr-lg-5">
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenbiryani.jpg" className="img-responsive" alt="" />
                <a href="#order" className="btn button-style button-style-2" style={{backgroundColor: 'red', fontSize: '12px'}}>Non veg</a>
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken Biryani</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹99/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Get delicious chicken biryani at weekends.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
          {/* Section starts: Dinner */}
          <div className="col-lg-6 menu-section pl-lg-5">
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/muttoncurry.jpg" className="img-responsive" alt="" />
                <a href="#order" className="btn button-style button-style-2" style={{backgroundColor: 'red', fontSize: '12px'}}>Non veg</a>
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Mutton Thali</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹179/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Get delicious mutton-gravy, rice, chapati, salad, and bhujia.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
        </div>
      </div>
      <div className="another-sec">
        <h3 className="title-big mb-2">Special</h3>
        <div className="row menu-body">
          {/* Section starts: Dinner */}
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>@ ₹ 49/-</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/poorisabzi.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Poorie-sabji (5pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹49/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Home cooked poorie and sabji with fresh and quality incredients.</p>
                </div>
              </div>
            </div>
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/alooparatha.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Aloo-paratha (2pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹49/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Home cooked aloo paratha and sabji with fresh and quality incredients.</p>
                </div>
              </div>
            </div>
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/alooparatha.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Roti-sabji (4pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹49/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Home cooked Roti and sabji with fresh and quality incredients.</p>
                </div>
              </div>
            </div>
            <div className="row menu-item">
              <div className="col-12 pl-4">
                <div className="menu-item-description">
                  <p>*Salads and achar will be complementary.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
          {/* Section starts: Dinner */}
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>@ ₹ 69/-</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenthali.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken Kadhai (2pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹69/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Delicious Chicken kadai at an affordable price.</p>
                </div>
              </div>
            </div>
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenthali.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken Butter masala (2pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹69/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Delicious Chicken butter masala at an affordable price.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
          {/* Section starts: Dinner */}
          <div className="col-lg-4 menu-section pr-lg-5">
            <h4>@ ₹ 99/-</h4>
            {/* Item starts */}
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenthali.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken Kadhai (4pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹99/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Delicious Chicken kadai at an affordable price.</p>
                </div>
              </div>
            </div>
            <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenthali.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-9 pl-4">
                <div className="row no-gutters">
                  <div className="col-9 menu-item-name">
                    <h6>Chicken Butter masala (4pcs)</h6>
                  </div>
                  <div className="col-3 menu-item-price text-right">
                    <h6>₹99/-</h6>
                  </div>
                </div>
                <div className="menu-item-description">
                  <p>Delicious Chicken butter masala at an affordable price.</p>
                </div>
              </div>
            </div>
            {/* Item ends */}
          </div>
          {/* Section ends: Dinner */}
        </div>
      </div>
      {/* monthly plan*/}
    </div>
  </div>
  {/* //menu */}
  {/* footer */}
  <section className="w3l-footer-16">
    <div className="w3l-footer-16-main">
      <div className="container">
        <div className="row footer-p">
          <div className="col-lg-4 pr-lg-5">
            <a className="logo" href="index.html"><i aria-hidden="true" />Gharelu khana</a>
            <p className="mt-4">Home made food with a great taste only at gkhana.com as known as Gharelu Khana.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
   
        </>
    )
}

export default Menu
