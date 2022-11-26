import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact us</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet.</p>
        <p className='p__opensans'>Lorem ipsum dolor sit amet.</p>
        <p className='p__opensans'>+91 1111222234</p>
        <p className='p__opensans'>+91 1111222234</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht_logo" />
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={images.spoon} alt="spoon_image" className='spoon__img' style={{marginTop:'15px'}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className='app__footer-headtext'>Working hours</h1>
        <p className='p__opensans'>Monday-firday</p>
        <p className='p__opensans'>8am - 11pm</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>7am - 12pm</p>
      </div>
    </div>
    <div className="app__footer-copywright">
      <p className='p__opensans'>All rigths reserved</p>
    </div>
  </div>
);

export default Footer;
