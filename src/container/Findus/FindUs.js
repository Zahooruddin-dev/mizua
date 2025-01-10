import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-5">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans text-light">No 57 Jamshoro mall, Havelli, Romania</p>
        <p className="p__cormorant my-4" style={{ color: 'goldenrod' }}>Opennng hours</p>
        <p className="p__opensans text-light">Mon - Fri 10:00 am - 12:00 am</p>
        <p className="p__opensans text-light">Sat - Sun 10:00 am - 12:00 am</p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" loading="lazy" />
    </div>
  </div>
);

export default FindUs;
