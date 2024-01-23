import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Home.css";

const Home = () => {

  const handleClick = (sectionId) => {
    return () => {
      const shopLink = "/shop"; // Replace with the actual path to your '/shop' page
      const targetUrl = shopLink + '#' + sectionId;
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);  // Adjust the delay time as needed (in milliseconds)
    };
  };

  return (
    <>
    <div className="dotted-bg">
      <div className="pic-wrapper row">
        <div className="pic-container basics col-4">
        <Link to="/shop" onClick={handleClick("basics")}><img src="/pic-1.png" alt="pic-1" id="pic-1" className="img" /></Link>
          <div className="button">
            <h3>-BASICS-</h3>
            <Link to="/shop">
              <button className="btn btn-outline-light" onClick={handleClick("basics")}>
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="pic-container melts col-4">
          <Link to='/shop' onClick={handleClick("melts")}><img src="/pic-3.png" alt="pic-2" id="pic-3" className="img" /></Link>
          <div className="button">
            <h3>-MELTS-</h3>
            <Link to="/shop">
              <button className="btn btn-outline-light" onClick={handleClick("melts")}>
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className="pic-container kints col-4">
          <Link to='/shop' onClick={handleClick("kints")}><img src="/pic-2.png" alt="pic-2" id="pic-2" className="img" /></Link>
          <div className="button">
            <h3>-KINTS-</h3>
            <Link to="/shop">
              <button className="btn btn-outline-light" onClick={handleClick("kints")}>
                See More
              </button>
            </Link>
          </div>
        </div>

      </div>

        <div className="about row">
          <div className="about-text col-6">
            <h1>-ABOUT-</h1>
            <small>
              Welcome to Tsuki, where <b>"Tsuki [つき]" meaning 'moon'</b> in
              Japanese, symbolizes the essence of our brand – a celestial,
              timeless beauty that illuminates the night sky. We believe that
              fashion and home products should not only be stylish but also
              ethically made. From the cotton fields to the final stitch, we
              prioritize ethical sourcing, fair labor, and environmental
              consciousness.{" "}
            </small>
          </div>
          <div className="about-image col-6">
            <LazyLoadImage effect="blur" src="/about-pic.png" alt="about-img" loading='lazy'/>
          </div>
        </div>

        <div className="craft row">
          <div className="craft-img col-6">
            <LazyLoadImage effect="blur" src="/carft.png" alt="craftsmanship" loading='lazy'/>
          </div>
          <div className="craft-text col-6">
            <h1>-CRAFTSMANSHIP-</h1>
            <small>
              At Tsuki, we believe that fashion and home products should not only
              be stylish but also ethically made.From the cotton fields to the
              final stitch, we prioritize ethical sourcing, fair labor, and
              environmental consciousness.Our unisex clothing and home goods are a
              testament to our commitment to sustainable and responsible
              manufacturing practices.
            </small>
          </div>
        </div>

        <div className="join row">
          <div className="join-text col-6">
            <h1>-TSUKI COMMUNITY-</h1>
            <small>
              We invite you to explore our collections, where fashion meets
              conscience, and where every purchase becomes a vote for a better,
              more sustainable future. Join the Tsuki community and embrace the
              journey of self-expression, ethical living, and the artistry of
              moonlit stories.
            </small>
          </div>
          <div className="join-img col-6">
            <LazyLoadImage effect="blur" src="/join.png" alt="join-img" loading='lazy'/>
          </div>
        </div>

        <div className="bottom">
          <div className="help-box">
            <div className="help-text">
              <p>
                As always, we’re here to help, so please get in touch if you have
                any questions or concerns about our products. Contact our customer
                service team at <b>hello@tsuki.market</b>
              </p>
            </div>
            <div className="help-img">
              <LazyLoadImage effect="blur" src="/bottom.png" alt="" loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
