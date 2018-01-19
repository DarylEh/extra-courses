import React from 'react';

const VideoListItem = ({vid}) => {
    const imageUrl = vid.snippet.thumbnails.default.url;
    return (
    <li classNamelist='list-group-item'>
        <div className='video-list-media'>
            <div className='media-left'>
                <div className= 'media-object'>
                    <img src={imageUrl} className='media-object' />
                </div>
            </div>
                <div className="media-body">
                    <div className="media-heading"> {vid.snippet.title} </div>
                </div>

        </div>
    </li>
    );
};

export default VideoListItem;