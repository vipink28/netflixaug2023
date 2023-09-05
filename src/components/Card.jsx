import React from 'react';
import { imagePath } from '../helper';

function Card(props) {
    const {video} = props;
    return (
        <div className='card text-white'>
            <img src={imagePath(video?.backdrop_path)} alt="" className='card-img-top'/>

            <div className="card-body">
                <h5 className='card-title'>
                {video?.name || video?.title || video?.original_title || video?.original_name}
                </h5>
            </div>
        </div>
    );
}

export default Card;