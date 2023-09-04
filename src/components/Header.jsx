import React from 'react';
import bgImage from '../bg.png';
import { imagePath } from '../helper';

function Header(props) {
    const {video} = props;

    return (
        <div className='vh-100 position-relative'>

            <img src={imagePath(video?.backdrop_path)} alt="" className='header-img'/>

            <div className="caption">
                <h1>{video?.name || video?.title || video?.original_title || video?.original_name}</h1>
                <p>{video?.overview}</p>
            </div>
        </div>
    );
}

export default Header;