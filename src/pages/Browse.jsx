import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMoviesSelector } from '../features/movie/movieSlice';
import axios from '../helper/axios';
import { requests } from '../helper/requests';
import Row from '../components/Row';
import { shuffle } from '../helper';

function Browse(props) {

    const { platform } = useParams();

    const nfOriginals = useSelector(platform == "tv" ? netflixOriginalSelector : popularMoviesSelector);
    const [genreList, setGenreList] = useState(null);

    const { data, status, error } = nfOriginals;
    const dispatch = useDispatch();

    useEffect(() => {
        if (platform === "tv") {
            dispatch(fetchNetflixOriginals());
        }
        else {
            dispatch(fetchPopularMovies());
        }

    }, [platform])

    const getGenresList = async () => {
        const response = await axios.get(requests.getGenres(platform));

        setGenreList(shuffle(response.data.genres));
    }

    useEffect(() => {
        getGenresList();
    }, [platform]);

    let totalRows = [...Array(5)];

    let randomNumber = Math.floor(Math.random() * data?.results.length);

    return (
        <>
            {
                data ?
                    <Header video={data?.results[randomNumber]} platform={platform} />
                    : ""
            }
            <div className='container-fluid'>
                {
                    genreList ?
                        totalRows.map((item, index)=>{
                            return (
                                <Row title={genreList[index].name} platform={platform} genres={genreList[index]} />
                            )
                        }):""
                }
            </div>

        </>
    );
}

export default Browse;