import React from 'react';
import Banner from './Banner';
import PopularSport from './PopularSpot/PopularSport';

import Country from './Country/Country';
import Offer from './OfferPart/Offer';


const Home = () => {

 
    return (
        <div>
        <Banner/>
        <PopularSport/>
        <div className='mt-14'>
            <Country/>
            <Offer/>
          
        </div>
    
        </div>
    );
};

export default Home;