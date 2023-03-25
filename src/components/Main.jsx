import axios from 'axios';
import { React, useState, useEffect } from 'react'
import requ from '../Requests'

export default function Main() {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies?.length)]

    useEffect(() => {
        axios.get(requ.requestPopular).then((response) => { setMovies(response.data.results) })
    }, [])

    const reduceString = (string, num) => {
        if (string?.length > num) {
            return string.slice(0, num) + "..."
        }
        else {
            return string
        }
    }

    let img_url = 'https://image.tmdb.org/t/p/original/'

    return (
        <>
            <div className="w-full text-white h-[600px]">
                <div className="w-full h-full">
                    {/* adding Gradient  */}
                    <div className='absolute w-full h-[600px] bg-gradient-to-r from-black' />
                    <img className='w-full h-full object-cover' src={`${img_url}${movie?.backdrop_path}`} alt={movie?.title} />
                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold' >{movie?.title}</h1>
                        <div className='my-4'>
                            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                            <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch</button>
                        </div>
                        <p className='text-gray-400 text-sm' >Released : {movie?.release_date}</p>
                        <p className='w-full md:max-w-[70%] ls:max-w-[50%] xl:max-w-[35%] text-gray-200' >{reduceString(movie?.overview, 150)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
