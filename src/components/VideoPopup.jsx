import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';

function VideoPopup(props) {
    const {error, data, status} = useSelector(videoDetailsSelector);
    return (
        <div className="modal" tabindex="-1" id='video-modal'>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>{data?.overview}</p>
      </div>      
    </div>
  </div>
</div>
    );
}

export default VideoPopup;