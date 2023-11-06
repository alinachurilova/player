import React from 'react';

const Controls = (props) => {

    return (
        <div className="controls-btn">
           <button className="play-prev-btn" onClick={()=>props.skipSong(false)} />
            <button className={props.isPlaying ? "play-button" : "pause-button"} onClick={()=>props.setIsPlaying(!props.isPlaying)} />
            <button className="play-next-btn" onClick={()=>props.skipSong(false)} />
        </div>
    );
};

export default Controls;