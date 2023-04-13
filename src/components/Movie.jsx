import { React, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


export default function Movie({ movie }) {

    const { user } = UserAuth()
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

    const moveiId = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(moveiId, {
                savedShows: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path
                })
            })
        }
        else{
            alert('Please Log in to save a Movie')
        }
    }

    let img_url = 'https://image.tmdb.org/t/p/w500/'

    return (
        <>
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img className='w-full h-auto block' src={`${img_url}${movie.backdrop_path?movie.backdrop_path:'https://image.tmdb.org/t/p/w500//wybmSmviUXxlBmX44gtpow5Y9TB.jpg'}`} alt={movie.title} />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                    <p className="white-space-normal text-xs md:text-sm font-boldb flex justify-center items-center h-full text-center">{movie.title}</p>
                    <p onClick={saveShow}>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                    </p>
                </div>
            </div>
        </>
    )
}
