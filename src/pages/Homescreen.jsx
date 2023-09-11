import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchPopularShows, netflixOriginalSelector, popularShowSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchPopularMovies, popularMoviesSelector } from '../features/movie/movieSlice';

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
                <Header video={data?.results[randomNumber]}/>
                :""
            }
            <div className='container-fluid'>
                <Row title="Popular Shows" selector={popularShowSelector} action={fetchPopularShows}/>

                <Row title="Netflix Originals" selector={netflixOriginalSelector} action={fetchNetflixOriginals}/>

                <Row title="Popular Movies" selector={popularMoviesSelector} action={fetchPopularMovies}/>
            </div>
        </>
    );
}

export default Homescreen;