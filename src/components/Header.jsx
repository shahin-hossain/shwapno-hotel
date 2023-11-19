import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    // console.log(user)
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/')
    }

    return (
        <div className='text-center d-flex align-items-center justify-content-between px-5'>
            <h2 className='text-dark'>Shawpno Hotel</h2>
            <div className='py-4'>
                <Link className='text-decoration-none px-2 fw-bold fs-5 text-dark' to='/'>Home</Link>
                <Link className='text-decoration-none px-2 fw-bold fs-5 text-dark' to='/book'>Book</Link>
                {user && <span className='mx-2'>{user.displayName}</span>}
                {
                    user ? <button onClick={handleLogout} className='btn btn-outline-primary'>Logout</button>
                        : <>
                            <Link className='text-decoration-none px-2 fw-bold fs-5 text-dark' to='/login'>Login</Link>
                            <Link className='text-decoration-none px-2 fw-bold fs-5 text-dark' to='/signup'>Sign up</Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Header;