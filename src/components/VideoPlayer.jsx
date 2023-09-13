import React from 'react';

function VideoPlayer(props) {
    const {trailerKey} = props;
    return (
        <div class="ratio ratio-16x9 youtube-player">
            <iframe src={`https://www.youtube.com/embed/${trailerKey}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;