import {useEffect, useState} from "react";
import Player from "./components/Player";
import {playList} from "./components/mocks/playlist";

function App() {
    const [songs] = useState(playList);
    const [currentSong, setCurrentSong] = useState(0);
    const [nextSong, setNextSong] = useState(0);

    useEffect(()=> {
        setNextSong(()=> {
            if(currentSong + 1 > songs.length) {
                return 0;
            } else {
                return currentSong +1;
            }
        })
    },[currentSong, songs.length])

  return (
    <div>
     <Player
     currentSong = {currentSong}
     setCurrentSong={setCurrentSong}
     nextSong={nextSong}
     songs={songs}
     />
    </div>
  );
}

export default App;
