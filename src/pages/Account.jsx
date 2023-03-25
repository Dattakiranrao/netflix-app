import React from 'react'
import Savedshows from '../components/Savedshows'

export default function Account() {
    return (
        <>
            <div className="w-full text-white ">
                <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/44355e66-dbf8-4dd8-ba6b-8e9e32ec6abd/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
                    <div className='absolute top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                    </div>
                </div>
            </div>
            <Savedshows/>
        </>
    )
}
