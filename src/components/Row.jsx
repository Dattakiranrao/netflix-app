import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie';


export default function Row(props) {
    const { title, fetchUrl, rid } = props

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((response) => { setMovies(response.data.results) })
    }, [fetchUrl])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rid);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rid);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick={slideLeft} />
                <div id={'slider' + rid} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                    {movies.map((movie, id) => (
                        <Movie key={id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick={slideRight} />
            </div>
        </>
    )
}
