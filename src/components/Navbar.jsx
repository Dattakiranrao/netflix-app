import React from 'react'
import netflix from './N.svg'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Navbar() {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
            <Link to='/'><img src={netflix} alt='Netflix' className='w-[124px] h-[32px] cursor-pointer' /></Link>
            {user?.email ?
                <div className="text-white">
                    <Link to='/Account'><button className='pr-6'>Account</button></Link>
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer" onClick={handleLogout}>Logout</button>
                </div> :
                <div className="text-white">
                    <Link to='/login'><button className='pr-6'>Sign In</button></Link>
                    <Link to='/signup'><button className="bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button></Link>
                </div>
            }
        </div>
    )
}
