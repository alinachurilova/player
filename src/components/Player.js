import React, {useEffect, useRef, useState} from 'react';
import Controls from "./Controls";

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const skipSong = (forward=true) => {
        if (forward) {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    })
    return (
        <div className="player">
           <div className="player-content">
               <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
               />
               <div>
                   <audio src={props.songs[props.currentSong].src} ref={audioEl} controls className="player-details-audio"></audio>
                   <p className="player-details-song-title">{props.songs[props.currentSong].title}</p>
                   <p className="player-details-song-title">Исполнитель: {props.songs[props.currentSong].artist}</p>
               </div>
           </div>
            <img  href={"../../public/circle-for-player.png"} className={isPlaying && 'circle-move'}/>
        </div>
    );
};

export default Player;