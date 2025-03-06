import React from 'react'
import './Welcome.css'
import Navbar from '../nav/Navbar'
const Welcome = () => {
  return (
    <div><Navbar/>
    <div>
    <div class="page-wrapper">
    <div class="content-wrapper">
        <input type="radio" name="toggle" id="toggle1"/>
        <input type="radio" name="toggle" id="toggle2"/>
      <input type="radio" name="toggle" id="toggle3"/>
      <section id="section-1">
        <div class="image-container">
          <img src="https://toppng.com/uploads/preview/harley-davidson-livewire-harley-davidson-motorcycle-bike-electric-bike-side-view-11569977420uepztmtk6q.jpg" alt=""/>
        </div>
        <div class="info-container">
        <h1><b>WELCOME TO</b></h1>
          <label for="toggle2">UV Utopia</label>
        </div>
      </section>
      <section id="section-2">
        <div class="image-container">
          <img src="https://i0.wp.com/asnoa.com/wp-content/uploads/2023/05/AdobeStock_589191133.jpeg?fit=2048%2C2048&ssl=1" alt=""/>
        </div>
        <div class="info-container">
          <h3><i><b>"The transition to electric vehicles is not just about technology; it's also about mindset and embracing change."</b></i></h3>
        </div>
      </section>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Welcome