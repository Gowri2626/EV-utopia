import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Foot from '../foot/Foot';
import Navbar from '../nav/Navbar';
import Star from '../star/Star';

const Aboutus = () => {
  const [count, setCount] = useState(1200);
  const clickevent = () => {
    setCount(count + 1);
  };

  const [count1, setCount1] = useState(15000);
  const clickevent1= () => {
    setCount1(count1 + 1);
  };

  
    const containerStyle = {
      backgroundColor: '#343a40',
      padding: '1.5rem',
    };
  
    const footerSocialContainerStyle = {
      color: 'white',
      display: 'inline-block',
      width: '100%',
    };
  
    const footerSocial1Style = {
      width: 'calc(33.33% - 2rem)',
      marginRight: '1rem',
    };
  
    const footerSocial2Style = {
      marginTop: '1rem',
    };
  
    const socialIconStyle = {
      color: '#f2f4f7',
      fontSize: '24px',
      marginRight: '0.5rem',
    };
  
return (
    <div>
      <Navbar />
      <div>
        <div className='intro'></div>
        <div className="EV Vehicle" style={{ overflowX: 'hidden' }}>
          <div id="about-us-section" style={{ background: 'grey', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div className="about-us-image" style={{ position: 'absolute', top: '0', right: '0', height: '100%', overflow: 'hidden' }}>
              <img src="https://car-images.bauersecure.com/wp-images/3747/tesla_cybertruck_10.jpg" width="800" height="500" alt="Car Image"/>
            </div>
            <div className="about-us-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-evenly', width: '40%', height: '80%', marginRight: '850px', marginLeft: '12px', zIndex: '2' }}>
              <h3 style={{ color: 'black', fontSize: '20pt', textAlign: 'center' }}><b><i>"Electric vehicles are not just the wave of the future, they are saving lives today"</i></b></h3><br></br>
              <p style={{ color: 'black', fontSize: '14pt', textAlign: 'center' }}><i>"Welcome to UTOPIA, a pioneering electric vehicle company committed to revolutionizing the way we commute sustainably .With a focus on innovation,efficiency,and environmental responsibility,we strive to lead the charge towards a greener future.At UTOPIA,we are dedicated to pushing boundaries,pushing towards a world where zero-emission transportation is the norm.Join us in driving towards a cleaner,brighter tomorrow.</i></p>
              <a href="#" title="About Us Button">
                <div className="icon-container" style={{marginRight:'100px'}}>
                  <button onClick={clickevent} style={{margin:'20px'}}>
                  <FontAwesomeIcon icon={faHeart} />{count}
                  </button>
                  <button onClick={clickevent1}>
                    <FontAwesomeIcon icon={faEye} />{count1}
                  </button>
                </div>
              </a>
            </div>
          </div>
          </div>
        <br></br>
  <center><h2><b>Recent articles and News</b></h2></center>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/0QWC_N6Hi5s?si=09_Quqg4LfpujZiL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">India Won or Lose</h5>
        <p class="card-text">Is India Winning or Losing the Electric War?:Business Case Study.Advances in EV battery technology have led to longer-lasting batteries and increased range.EV drivers may face range anxiety.</p>
      </div>
      <div class="card-footer">
        <h6 class="text-muted">"Empowering journeys, electrifying futures"</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/R5DbRyeZNRk?si=uP09OZDn4qy7eNhK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">Norway Enhancement</h5>
        <p class="card-text">How Norway Built An EV Utopia While The U.S. Is Struggling To Go Electric|CNBC DocumentaryThe upfront cost of purchasing an EV is often higher than that of a comparable gasoline-powered vehicle.</p>
      </div>
      <div class="card-footer">
       <h6 class="text-muted">"Silent streets, electric beats."</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/X_TlXpy-37o?si=T721R7GCgeDQwNHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">Used EVs vs new Tesla's</h5>
        <p class="card-text">Why Used EV Prices Are Falling?!As more manufacturers enter the EV market and produce a wider range of models, the supply of used EVs has increased, leading to more competitive pricing.</p>
      </div>
      <div class="card-footer">
        <h6 class="text-muted">"Zero emissions, infinite possibilities."</h6>
      </div>
    </div>
  </div>
</div>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://electricvehicles.in/wp-content/uploads/2018/06/Top-10-Electric-Cars-in-the-World-Electric-Cars-HD-Wallpapers-3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/8936922/pexels-photo-8936922.jpeg?cs=srgb&dl=pexels-erik-mclean-8936922.jpg&fm=jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.hdqwalls.com/wallpapers/electric-bike-4k-b9.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://kickstart.bikeexif.com/wp-content/uploads/2021/08/hd-livewire-custom-1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://electricvehicles.in/wp-content/uploads/2018/07/bike-images-1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://image.cnbcfm.com/api/v1/image/106657084-1597088023481-Lucid_Air_Exterior_7.jpg?v=1597088923" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Fan of UV Utopia</h5>
        <p class="card-text"><i>"I haven't buy this vehicle but I have watched the videos on YouTube and I'll so appreciate this car, It looks are too good and ride quality of the UV Utopia is already so awesome"</i></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
</div><br></br>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.hindustantimes.com/auto/img/2023/10/02/1600x900/TVS_iQube_Electric_scooter_1696232290434_1696232290611.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images8.alphacoders.com/134/1343627.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://static.dezeen.com/uploads/2019/11/cybertruck-tesla-elon-musk-steel-electric-vehicle-car-truck-_dezeen_2364_hero.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><center><Star/></center></small>
      </div>
    </div>
  </div>
</div><br></br>
<h4><center><i>'FAQ'S On EV'</i></center></h4>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What are the benefits of using electric vehicles in India?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Using Electric Vehicles in India offers benefits such as reduced air pollution, lower operating costs due to cheaper electricity compared to fuel, and government incentives like subsidies and tax breaks.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How eco-friendly are electric vehicles compared to traditional vehicles?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Electric vehicles produce zero tailpipe emissions, making them significantly more eco-friendly than traditional vehicles that rely on fossil fuels.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How long does it take to charge an electric vehicle?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Charging times vary based on the charger's power and the vehicle's battery capacity. Regular charging at home can take several hours, while fast chargers can charge a vehicle significantly faster.

      </div>
    </div>
  </div>
</div><br></br>    
      <Foot />
      <div style={containerStyle} className="bg-dark">
      <div className="container py-3">
        <div className="row col-12">
          <div className="text-white col-12 col-lg-8 col-md-12 d-inline-block order-2 order-sm-1 mt-2 mt-sm-0 footer-social-container" style={footerSocialContainerStyle}>
            <span className="d-inline-block d-lg-inline col-5 col-md-4 col-sm-12 footer-social-1" style={footerSocial1Style}><left>© Copyright 2024 Utopia Pvt Ltd</left></span>
            <span className="d-inline-block d-lg-inline mx-lg-5 col-sm-12 col-md-4 col-4 footer-social-1 mt-3" style={footerSocial1Style}><a href="/termsandconditions" style={{ color: 'white' }}>Terms &amp; Conditions</a></span>
            <span className="d-inline-block d-lg-inline col-sm-12 col-md-4 col-3 footer-social-1 mt-3" style={footerSocial1Style}><a href="/privacy-policy" style={{ color: 'white' }}>Privacy</a></span>
          </div>
          <div className="col-lg-4 col-sm-12 d-sm-inline-block mt-sm-4 mt-lg-0 social-icon mt-3 order-sm-2" style={footerSocial2Style}>
            <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
            <FontAwesomeIcon icon={faYoutube} style={socialIconStyle} />
            <FontAwesomeIcon icon={faLinkedin} style={{ ...socialIconStyle, color: 'white' }} />
            <FontAwesomeIcon icon={faFacebook} style={{ ...socialIconStyle, color: 'white' }} />
          </div>
        </div>
      </div>
    </div>

</div>
</div>
  );
}
export default Aboutus;