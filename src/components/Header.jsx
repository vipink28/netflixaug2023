import React, { useEffect, useState } from 'react';
import { imagePath, printYear, truncateText } from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideos, headerVideosSelector } from '../features/common/commonSlice';
import Ratings from './Ratings';
import Genre from './Genre';
import VideoPlayer from './VideoPlayer';

function Header(props) {
    const {video} = props;
    const dispatch = useDispatch();
    const videoDetails = useSelector(headerVideosSelector);
    const {data, status, error} = videoDetails;
    const [isTrailer, setIsTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState();




    useEffect(()=>{
        if(video){
            dispatch(fetchHeaderVideos({platform:"tv", id: video.id}));
        }
    }, [video]);

    useEffect(()=>{
        if(data){
            const youtubeTrailer = data?.videos?.results.filter((item)=>item.type === "Trailer");
            setTrailerKey(youtubeTrailer[0].key);
        }
    }, [data])

    const showTrailer=()=>{
        setIsTrailer(true);
    }

    return (
        <div className='h-100 position-relative text-white w-100'>
           { 
           !isTrailer ?
            <>
            <img src={imagePath(data?.backdrop_path)} alt="" className='header-img'/>
            <div className="caption">
                <h1 className='display-2 title mb-0'>{truncateText(data?.name || data?.title || data?.original_title || data?.original_name, 30)} <span className='fs-3'>({printYear(data?.first_air_date || data?.release_date)})</span></h1>
                <h3 className='text-warning display-5'>{data?.tagline}</h3>
                <p className='fs-4'>{truncateText(data?.overview, 150) }</p>
                <div className='d-flex'>
                    {
                        data?.genres.map((item)=>{
                            return <Genre key={item.id} genre={item}/>
                        })
                    }
                </div>
                <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count}/>

                <button className='btn btn-danger mt-2' onClick={showTrailer}>Play Trailer</button>
            </div>
            </>
            :
            <VideoPlayer trailerKey={trailerKey}/>
        }
            <div className="header-vignette"></div>
            <div className="header-bottom-vignette"></div>
        </div>
    );
}

export default Header;