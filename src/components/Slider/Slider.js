import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider() {
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Menu Items</h1>
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
          <Item>
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
          </Item>
          <Item>
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
          </Item>
          <Item>
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
          </Item>
          <Item>
          <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenbiryani.jpg" className="img-responsive" alt="" />
                {/* <a href="#order" className="btn button-style button-style-2" style={{backgroundColor: 'red', fontSize: '12px'}}>Non veg</a> */}
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
          </Item>
          <Item>
          <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/muttoncurry.jpg" className="img-responsive" alt="" />
                {/* <a href="#order" className="btn button-style button-style-2" style={{backgroundColor: 'red', fontSize: '12px'}}>Non veg</a> */}
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
          </Item>
          <Item>
          <div className="row menu-item">
              <div className="col-3 p-0 position-relative">
                <img src="assets/images/items/chickenbiryani.jpg" className="img-responsive" alt="" />
                {/* <a href="#order" className="btn button-style button-style-2" style={{backgroundColor: 'red', fontSize: '12px'}}>Non veg</a> */}
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
          </Item>
          <Item>
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
          </Item>
          <Item>
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
          </Item>
        </Carousel>
      </div>
    <div className="mt-md-5 mt-4 mb-lg-0 mb-4" style={{textAlign:'center'}}>
        <a className="btn button-style" href="#">Show More Items</a>
    </div>
    </section>
  );
}