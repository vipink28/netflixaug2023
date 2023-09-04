import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';

function Homescreen(props) {
    const nfOriginals = useSelector(netflixOriginalSelector);    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            <Header video={nfOriginals.data?.results[0]}/>
        </>
    );
}

export default Homescreen;