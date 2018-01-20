import React from 'react';


const VideoDetail = ({vid}) => {
    if(!vid){
        return <div>Loading....</div>
    }

    
    const videoId = vid.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className = "video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-items" src={url}></iframe>
            </div>
            <div className="details">
                <div>{vid.snippet.title}</div>
                <div>{vid.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;