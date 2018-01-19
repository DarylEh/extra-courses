import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map ((vid) => {
        return <VideoListItem key={vid.etag} vid={vid} />
    });

    return (
        <ul className="list group" >
            {videoItems}
        </ul>
    );
};

export default VideoList;