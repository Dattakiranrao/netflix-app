import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Signup() {

    const [email, setEmail] = useState("");
    const [passowrd, setPassowrd] = useState("");
    const navigate = useNavigate()

    const { user, signUp } = UserAuth()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await signUp(email, passowrd)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/44355e66-dbf8-4dd8-ba6b-8e9e32ec6abd/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
                <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/95 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Enter Your Credentials' className='p-3 my-2 bg-gray-700 rounded' />
                                <input onChange={(e) => {setPassowrd(e.target.value)}} type="password" placeholder='Enter Your Credentials' className='p-3 my-2 bg-gray-700 rounded' />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                                <div className='flex items-center justify-between text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember Me</p>
                                    <p className='cursor-pointer'><a href="https://www.netflix.com/in/LoginHelp">Need Help?</a></p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>Already Subscribed to Netflix?</span>&nbsp; <Link to="/login">Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
