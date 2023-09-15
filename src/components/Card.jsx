import React from 'react';
import { imagePath } from '../helper';
import { useDispatch } from 'react-redux';
import { fetchVideoDetails } from '../features/common/commonSlice';

function Card(props) {
    const {video, platform} = props;
    const dispatch = useDispatch();
    const showDetails = ()=>{
        dispatch(fetchVideoDetails({platform: platform, id: video.id }));
    }
    return (
        <div className='card text-white' data-bs-toggle="modal" data-bs-target="#video-modal" onClick={showDetails}>
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