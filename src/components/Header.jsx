import React, { useEffect } from 'react';
import { imagePath, truncateText } from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideos, headerVideosSelector } from '../features/common/commonSlice';
import Ratings from './Ratings';

function Header(props) {
    const {video} = props;
    const dispatch = useDispatch();
    const videoDetails = useSelector(headerVideosSelector);
    const {data, status, error} = videoDetails;

    useEffect(()=>{
        if(video){
            dispatch(fetchHeaderVideos({platform:"tv", id: video.id}));
        }
    }, [video]);

    return (
        <div className='h-100 position-relative text-white w-100'>
            <img src={imagePath(data?.backdrop_path)} alt="" className='header-img'/>
            <div className="caption">
                <h1 className='display-2 title mb-0'>{truncateText(data?.name || data?.title || data?.original_title || data?.original_name, 30)} </h1>
                <h3 className='text-warning display-5'>{data?.tagline}</h3>
                <p className='fs-4'>{truncateText(data?.overview, 150) }</p>
                <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count}/>
            </div>

            <div className="header-vignette"></div>
            <div className="header-bottom-vignette"></div>
        </div>
    );
}

export default Header;