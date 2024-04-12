import React from 'react'
import BAG from "/assets/Bag.png"
import Icon from "/assets/Logo.png"
import ARROW from "/assets/BrownArrow.svg"
import COIN from "/assets/coin.svg"
import RIGHTARROW from "/assets/RightArrow.svg"
import SETTINGS from "/assets/settings.svg"
import CROSS from "/assets/Cross.svg"
import BLUECROSS from "/assets/Blue-croos.svg"
export default function Chats() {
  return (
    <>
    <section className='chatSection'>
      <div className="msg1">
        <div className="msg">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </div>
        <div className="msg1-time">4:45 PM</div>
      </div>
 

      <div className="msg2 ">
        <div className="msg">
          I am looking for a hand bag, with long strap .
        </div>
        <div className="msg2-time">4:46 PM</div>
      </div>


      <div className="Tags">
        <p className="Tags-Name">Popular tags for handbag</p>
        <div className="Tags-sec">
          <div className="Tags-cat">
            <p className="Tag">Clutch</p>
            <p className="Tag">Fabric lining</p>
            <p className="Tag">Baggit </p>
            <p className="Tag Tag-extra">Multi</p>
         
          </div>
          <img
            loading="lazy"
            src={RIGHTARROW}
            className="img-arrow"
          />
        </div>
      </div>

      
    <div className="msg3">
    <div className="msg">
    <div className="Product">
          <img
            loading="lazy"
            src={BAG}
            className="img-item"
          />
          <div className="Product-content">
          <div className="Product-context">
              <div className="Product-name">
                Bags on <span className='Product-subName'>Timpu</span>
              </div>
              <img
                loading="lazy"
                src={COIN}
                className="img-icon"
              />
            </div>
            <div className="Product-no">
              <div className="Product-count">1123 products </div>
              <img
                loading="lazy"
                src={ARROW}
                className="img-arrows"
              />
            </div>
          </div>
        </div>
        <div className="msg3-msg">
          Or set filter and help us choose the best bag for you.
        </div>
      </div>
      <div className="msg3-time">4:48 PM</div>
    </div>




      <div className="filter-section">
        <div className="filter">
          <p className="filter-name">Select filters</p>
          <div className="filter-icons">
            <img
              loading="lazy"
              src={SETTINGS}
              className="img-filter"
            />
            <p className='filter-icon-name'>Filter</p>
          </div>
        </div>


<div className="filter-cards">
  <div className="selected-card">
    <p className='selected-name'>Strap-Long</p>
    <img src={BLUECROSS} loading='lazy' className='img-cross'/>
  </div>

  <div className="card">
    <p className='card-name'>Colour</p>
    <img src={CROSS} loading='lazy' className='img-cross'/>
  </div>

  <div className="card">
    <p className='card-name'>Size</p>
    <img src={CROSS} loading='lazy' className='img-cross'/>
  </div>

  <div className="card">
    <p className='card-name'>Brand</p>
    <img src={CROSS} loading='lazy' />
  </div>

  <div className="card">
    <p className='card-name'>Material</p>
    <img src={CROSS} loading='lazy' />
  </div>
</div>
      </div>
</section>
    </>
  )
}
