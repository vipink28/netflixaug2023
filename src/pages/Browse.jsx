import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, popularMoviesSelector } from '../features/movie/movieSlice';
import axios from '../helper/axios';
import { requests } from '../helper/requests';

function Browse(props) {
    
    const {platform} = useParams();

    const nfOriginals = useSelector(platform == "tv" ? netflixOriginalSelector : popularMoviesSelector);
    const [genreList, setGenreList] = useState(null);

    const { data, status, error } = nfOriginals;           
    const dispatch = useDispatch();

    useEffect(()=>{
        if(platform === "tv"){
            dispatch(fetchNetflixOriginals());
        }
        else{
            dispatch(fetchPopularMovies());
        }
        
    }, [platform])

    const getGenresList = async() =>{
       const response = await axios.get(requests.getGenres(platform));
       setGenreList(response.data.genres);
    } 

    useEffect(()=>{
        getGenresList();
    },[platform]);


    let randomNumber = Math.floor(Math.random() * data?.results.length);

    return (
        <>
        {
                data ?
                <Header video={data?.results[randomNumber]} platform={platform}/>
                :""
        }
        </>
    );
}

export default Browse;