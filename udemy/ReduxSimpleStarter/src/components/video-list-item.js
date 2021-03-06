import React from 'react';

const VideoListItem = ({vid, onVideoSelect}) => {
    const imageUrl = vid.snippet.thumbnails.default.url;
    return (
    <li onClick = {() => onVideoSelect(vid)} classNamelist='list-group-item'>
        <div className='video-list media'>
            <div className='media-left'>
                <img className='media-object' src={imageUrl} />
            </div>
                <div className="media-body">
                    <div className="media-heading"> {vid.snippet.title} </div>
                </div>

        </div>
    </li>
    );
};

export default VideoListItem;