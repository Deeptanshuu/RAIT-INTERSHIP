import React from "react";
import './Collection.css'

const Collecton = () => {
  return (
    <>
        <div className="head">
            <h1>Our Collections</h1>
        </div>
      <div className="basics" id='basics'>
        <div className="banner row">
          <div className="banner-text banner-basic col-6">
            <h1>BASICS</h1>
          </div>
          <div className="banner-img col-6">
            <img src="/shop/basic-banner.png" alt="basic-banner" />
          </div>
        </div>
        <div className="card-container row">
            <div className="card col-4">
                <div className="card-img"><img src="/shop/basic-1.png" alt="img for card" /></div>
                <div className="card-text"><p>VIEW ITEM</p><small>Tsuki Logo Embroidered Cap</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/basic-2.png" alt="img for card" /></div>
            <div className="card-text"><p>VIEW ITEM</p><small>夕焼け Sunset Glow Sweatshirt</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/basic-3.png" alt="img for card" /></div>
            <div className="card-text"><p>VIEW ITEM</p><small>Embroidered Logo T-shirt</small></div>
            </div>
        </div>

      </div>

      <div className="melts" id='melts'>
      <div className="banner row">
        <div className="banner-text banner-melts col-6">
          <h1>MELTS</h1>
        </div>
        <div className="banner-img col-6">
          <img src="/shop/melts-banner.png" alt="melts-banner" />
        </div>
      </div>
      <div className="card-container row">
            <div className="card col-4">
                <div className="card-img"><img src="/shop/melt-1.png" alt="img for card" /></div>
                <div className="card-text"><p>VIEW ITEM</p><small>Melted Sweatshirt</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/melt-2.png" alt="img for card" /></div>
            <div className="card-text"><p>VIEW ITEM</p><small>Melted Sweatpants</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/melt-3.png" alt="img for card" /></div>
            <div className="card-text"><p>VIEW ITEM</p><small>Melted Socks</small></div>
            </div>
        </div>
      </div>

      <div className="kints" id='kints'>
      <div className="banner row">
        <div className="banner-text banner-knits col-6">
          <h1>KINTS</h1>
        </div>
        <div className="banner-img col-6">
          <img src="/shop/knits-banner.png" alt="knits-banner" />
        </div>
      </div>
      <div className="card-container row">
            <div className="card col-4">
                <div className="card-img"><img src="/shop/knits-1.png" alt="img for card" /></div>
                <div className="card-text"><p>VIEW ITEM</p><small>Tsuki Knit Socks</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/knits-2.png" alt="img for card" /></div>
                <div className="card-text"><p>VIEW ITEM</p><small>Tsuki すき Knit Sweater</small></div>
            </div>
            <div className="card col-4">
            <div className="card-img"><img src="/shop/knits-3.png" alt="img for card" /></div>
                <div className="card-text"><p>VIEW ITEM</p><small>楽しい Tanoshii / 悲しみ Kanashimi Beanies</small></div>
            </div>
        </div>
      </div>




    </>
  );
};

export default Collecton;
