import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';

function Homescreen(props) {
    const nfOriginals = useSelector(netflixOriginalSelector);
    const { data, status, error } = nfOriginals;       
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
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
                <Row />
            </div>
        </>
    );
}

export default Homescreen;