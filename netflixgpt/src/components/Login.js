import React from 'react'
import BannerImg from './assets/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import Header from './Header'

const Login = () => {
    return (
        <>
            <Header />
            <div className='relative inline-block'>
                <img src={BannerImg} alt='baner-img' />
                <div className='absolute top-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-50'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 '>
                    <form>
                        <input className='m-2 p-2' type="text" placeholder='Email Address' />
                        <br />
                        <input className='m-2 p-2' type="text" placeholder='Email Address' />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
