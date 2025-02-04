import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Share/Navbar';
import Footer from './Share/Footer/Footer';

const Main = () => {
    return (
        <div>
          <div className='max-w-7xl bg-gray-200 mx-auto'>
          <Navbar/>
          </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;