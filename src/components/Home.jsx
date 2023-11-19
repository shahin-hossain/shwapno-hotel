import React from 'react';
import Rooms from './Rooms';

const Home = () => {
    return (
        <div className=' '>
            <div className='position-relative'>
                <div className='bg-dark position-absolute bg-opacity-50' style={{ width: '100%', height: '485px' }}></div>
                <img src="https://pulse.lk/wp-content/uploads/2017/12/hotel-cover.jpg" className='w-100' alt="" />
                <h1 className='position-absolute top-50 start-50 translate-middle text-white'>Visit for Best Booking !!!</h1>
            </div>
            <div>
                <Rooms></Rooms>

            </div>
        </div>
    );
};

export default Home;