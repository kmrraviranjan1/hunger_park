import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="chase the new taste" />
      <h1 className='app__header-h1'>The key to fine dinning</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores, odio consequuntur soluta, nulla laudantium veniam suscipit sunt nam, pariatur eaque harum temporibus ratione impedit quas quasi voluptatem nostrum necessitatibus quod!</p>
      <button type='button' className='custom__button' >Explore Menus</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="hero_image" />
    </div>
  </div>
);

export default Header;
