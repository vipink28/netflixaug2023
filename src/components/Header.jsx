import React from 'react';
import { imagePath } from '../helper';

function Header(props) {
    const {video} = props;
    return (
        <div className='h-100 position-relative text-white w-100'>
            <img src={imagePath(video?.backdrop_path)} alt="" className='header-img'/>
            <div className="caption">
                <h1 className='display-2 title mb-0'>{video?.name || video?.title || video?.original_title || video?.original_name}</h1>
                <p className='fs-4'>{video?.overview}</p>
            </div>

            <div className="header-vignette"></div>
            <div className="header-bottom-vignette"></div>
        </div>
    );
}

export default Header;