import { LocalDining , HomeOutlined} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider/Slider'


const Home = () => {
    return (
        <>
           <section id="home" className="py-5">{/*add w3l-banner with py-5 to get bannerS*/}
        <div className="container pt-5 pb-md-4">
          <div className="row align-items-center">
            <div className="col-md-6 pt-md-0 pt-4">
              <h3 className="mb-sm-4 mb-3 title">Fresh Khao <br />To be Healthy</h3>
              <p>Swaad aisa raha na jaye, dam aisa budget me samaye.</p>
              <p>स्वाद ऐसा रहा न जाये, दाम ऐसा बजट में समाये|</p>
              <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                <Link className="btn button-style" to="/Menu">View Our Menu</Link>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4 d-flex justify-content-center">
              <img className="img-fluid imgban" style={{ width: '70%', height: 'auto' }} src="assets/images/bannerimg.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}

      <Slider />

      {/* //banner section */}
      {/* about section */}
      <div className="w3l-content-photo-5">
        <div className="content pb-5 pt-md-5 pt-4">
          <div className="container py-lg-4 py-md-3">
            <div className="row">
              <div className="col-lg-6 content-photo">
                <a href="#image"><img src="assets/images/about.png" className="img-responsive antiimgban" style={{ width: '90%', height: 'auto' }} alt="content-photo" /></a>
              </div>
              <div className="col-lg-6 content-left mb-md-0 mb-3">
                <h3>Welcome To  <span>Home Made Tiffin</span></h3>
                <p>Getting Home-made food that gives a homely taste is no more a dream.</p>
                <p>We provide home made food with great taste at an affordable price. According to our customer reviews we provide no deduction in our quality and taste. The best part is we provide <span style={{ fontWeight: 'bold', fontSize: '16px', textDecoration: 'underline' }}>FREE DELIVERY</span></p>
                <Link className="btn button-style" to="/About">Know More... </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //about section */}
      {/* team with grids section */}
      <section className="w3l-content-11-main">
        <div className="content-design-11 pt-md-4 pt-1 pb-5">
          <div className="container pb-md-4 pb-3">
            {/*<div class="row align-items-center">
              <div class="col-lg-5">
                  <h3 class="title-main-2 text-center p-lg-4">Hello. Our structure has been present for
                      over 20 years. We make the
                      best !</h3>
                      </div>
              <div class="col-lg-7 mt-lg-0 mt-sm-5 mt-4">
              <div class="row">
                      <div class="col-sm-6">
                          <div class="position-relative">
                          <img src="assets/images/team1.jpg" class="img-responsive" alt="content-photo">
                              <div class="text-position">
                              <h4><a href="about.html">Jimic Nasium</a></h4>
                                  <p>Best Chef</p>
                              </div>
                          </div>
                          </div>
                          <div class="col-sm-6 mt-sm-0 mt-4">
                          <div class="position-relative">
                              <img src="assets/images/team2.jpg" class="img-responsive" alt="content-photo">
                              <div class="text-position">
                              <h4><a href="about.html">Henry Itondo</a></h4>
                              <p>Food Expert</p>
                              </div>
                          </div>
                          </div>
                          </div>
              </div>
          </div>*/}
            <div className="content-sec-11 mt-5 pt-lg-4">
              <div className="row">
                <div className="col-md-6 columns">
                  <div className="icon-eff">
                    <LocalDining />
                  </div>
                  <div className="right-side">
                    <p>We have Hygenic cooking environment and separate kitchen for Veg and Non-veg foods.</p>
                    {/*<a href="#services" class="read-button">Read More</a>*/}
                  </div>
                </div>
                <div className="col-md-6 columns mt-md-0 mt-4">
                  <div className="icon-eff">
                  <LocalDining />
                  </div>
                  <div className="right-side">
                    <p>Healthy and Fresh items that would meet your satisfaction.</p>
                  </div>
                </div>
              </div>
              <div className="row mt-md-5 mt-4">
                <div className="col-md-6 columns">
                  <div className="icon-eff">
                    <HomeOutlined />
                  </div>
                  <div className="right-side">
                    <p>Modest price with free delivery.</p>
                  </div>
                </div>
                <div className="col-md-6 columns  mt-md-0 mt-4">
                  <div className="icon-eff">
                  <HomeOutlined />
                  </div>
                  <div className="right-side">
                    <p>We say no to maida We use only atta for your good health. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //team with grids section */}
      {/* call section */}
      <section className="w3l-call-to-action-6 container">
        <div className="call-vv-action py-5">
          <div className="container py-md-4 py-3">
            <div className="grid">
              <div className="float-lt">
                <h3 className="title-big">SUBSCRIBE NOW!</h3>
                <p>Subscribe Now to get healthy and fresh food</p>
              </div>
              <div className="float-rt text-right">
                <ul className="buttons">
                  {/* <li className="phone"><span className="fa fa-volume-control-phone mr-1" aria-hidden="true" />
                    <Link className="call-style-w3" to="/Menu">033-40001465</Link>
                  </li>
                  <li className="green">Or</li> */}
                  <li><Link to="/Menu" className="btn button-style fa fa-whatsapp">&nbsp;&nbsp;7059385646/ 9903341701</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //call section */}
      {/* footer */}
          <Footer/>
 
        </>
    )
}

export default Home
