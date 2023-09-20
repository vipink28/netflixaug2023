import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchPopularShows, netflixOriginalSelector, popularShowSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMoviesSelector } from '../features/movie/movieSlice';
import { platforms } from '../helper/requests';

function Homescreen(props) {
    const nfOriginals = useSelector(netflixOriginalSelector);
    const { data, status, error } = nfOriginals;       
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
        dispatch(fetchPopularShows());
    }, [])

    let randomNumber = Math.floor(Math.random() * data?.results.length);

    return (
        <>
            {
                data ?
                <Header video={data?.results[randomNumber]} platform={platforms.tv}/>
                :""
            }
            <div className='container-fluid'>
            <Row title="Top Rated Movies" selector={topRatedMoviesSelector} action={fetchTopRatedMovies} platform="movie"/>

                <Row title="Popular Shows" selector={popularShowSelector} action={fetchPopularShows} platform="tv"/>

                <Row title="Netflix Originals" selector={netflixOriginalSelector} action={fetchNetflixOriginals} platform="tv"/>

                <Row title="Popular Movies" selector={popularMoviesSelector} action={fetchPopularMovies} platform="movie"/>
            </div>
        </>
    );
}

export default Homescreen;