import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import r from '../Requests'

export default function Home() {
    return (
        <>
        <Main/>
        <Row rid='1' title = "UpComing" fetchUrl = {r.requestUpcoming} />
        <Row rid='2' title = "Popular" fetchUrl = {r.requestPopular} />
        <Row rid='3' title = "Trending" fetchUrl = {r.requestTrending} />
        <Row rid='4' title = "Top Rated" fetchUrl = {r.requestTopRated} />
        <Row rid='5' title = "Horror" fetchUrl = {r.requestHorror} />
        </>
    )
}
