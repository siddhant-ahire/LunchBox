import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.css";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import { Link } from "react-router-dom";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider() {
  return (
    <>
    <section className="container">
      <h1 style={{ textAlign: "center" }}>Menu Items</h1>
      <div className="">
        <Carousel className="rec-dot rec-pagination" breakPoints={breakPoints}>
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
        <Link className="btn button-style" to="/Menu">Show More Menu Items...</Link>
    </div>
    </section>
    <section style={{marginTop:'40px'}} className="container">
      <h1 style={{ textAlign: "center" ,marginBottom:'20px'}}>Prizing Plans</h1>
    <div className="cardprices">
          <PricingTable highlightColor='#28a745'>
    <Carousel breakPoints={breakPoints}>
          <PricingSlot buttonText='BOOK NOW' title='Trial' priceText='499/week'>
            <PricingDetail> <b>2</b> chapati</PricingDetail>
            <PricingDetail> <b>1</b> sabji</PricingDetail>
            <PricingDetail> <b>Dal Rice</b> </PricingDetail>
            <PricingDetail strikethrough> <b>Papad & Achar</b></PricingDetail>
            <PricingDetail > <b>Home Delivery</b></PricingDetail>
          </PricingSlot>
          <PricingSlot  buttonText='BOOK NOW' title='Trial' priceText='599/week'>
            <PricingDetail> <b>3</b> chapati</PricingDetail>
            <PricingDetail> <b>1</b> sabji</PricingDetail>
            <PricingDetail> <b>Dal Rice</b> </PricingDetail>
            <PricingDetail> <b>Papad & Achar</b></PricingDetail>
            <PricingDetail > <b>Home Delivery</b></PricingDetail>
          </PricingSlot>
          <PricingSlot   buttonText='Book Now' title='BASIC' priceText='2999/month'>
          <PricingDetail> <b>2</b> chapati</PricingDetail>
            <PricingDetail> <b>1</b> sabji</PricingDetail>
            <PricingDetail> <b>Dal Rice</b> </PricingDetail>
            <PricingDetail> <b>Papad & Achar</b></PricingDetail>
            <PricingDetail strikethrough> <b>1 Day/week special</b></PricingDetail>
            <PricingDetail> <b>Home Delivery</b></PricingDetail>
          </PricingSlot>
          <PricingSlot highlighted  buttonText='BOOK NOW' title='BASIC' priceText='3499/month'>
          <PricingDetail> <b>3</b> chapati</PricingDetail>
            <PricingDetail> <b>1</b> sabji</PricingDetail>
            <PricingDetail> <b>Dal Rice</b> </PricingDetail>
            <PricingDetail> <b>Papad & Achar</b></PricingDetail>
            <PricingDetail> <b>1 Day/week special</b></PricingDetail>
            <PricingDetail> <b>Home Delivery</b></PricingDetail>
          </PricingSlot>
          <PricingSlot  buttonText='BOOK NOW' title='BASIC' priceText='3999/month'>
          <PricingDetail> <b>4</b> chapati</PricingDetail>
            <PricingDetail> <b>2</b> sabji</PricingDetail>
            <PricingDetail> <b>Dal Rice</b> </PricingDetail>
            <PricingDetail> <b>Papad & Achar</b></PricingDetail>
            <PricingDetail> <b>2 Day/week special</b></PricingDetail>
            <PricingDetail> <b>Home Delivery</b></PricingDetail>
          </PricingSlot>
    </Carousel>
          </PricingTable>
    </div>
    <div className="mt-md-5 mt-4 mb-lg-0 mb-4" style={{textAlign:'center'}}>
        <Link className="btn button-style" to="/Prices">Show More Prizing Plans...</Link>
    </div>
    </section>
    </>
  );
}