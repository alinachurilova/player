import React from 'react';

const Details = (props) => {
    return (
        <div>
            <audio src={props.src} ref={props.ref} controls className="player-details-audio"></audio>
            <p className="player-details-song-title">Title song</p>
        </div>
    );
};

export default Details;