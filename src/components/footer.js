import { PlayCircleFilled } from "@mui/icons-material";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useRef } from "react";
import { useDataLayerValue } from "./dataLayer";
import './footer.css';
import { useState } from "react";
// import dhokha from '../assets/dhokha.mp3';

export default function Footer() {
    const [{currentSong},dispatch]=useDataLayerValue();
    const [isPlaying,setPlaying]=useState(false);
    const audioPlayer=useRef();
    const changePlayPause=()=>{
      setPlaying(!isPlaying);
      // audioPlayer.current.play();
    }
    console.log("xxxxxx",currentSong);
    return (
      <div className="footer">

        <div className="left">
          <img className="song-pic" src={currentSong ? currentSong?.album?.images[2].url : 'https://i.scdn.co/image/ab67616d00004851598b54ac053ca26cb7ec7c38' }/>
          <h3 className='song-name'>{currentSong?.name }</h3>
        </div>
        <div className="center">
          <SkipPreviousIcon fontSize="large"/>
          {isPlaying ? <PauseCircleIcon fontSize='large' onClick={changePlayPause}/> : <PlayCircleFilled fontSize="large" onClick={changePlayPause}/> }
          <SkipNextIcon fontSize='large' />
          <audio preload>
            <source src='../assets/dhokha.mp3' />
          </audio>
        </div>
        <div className="right">

        </div>
      </div>
    )
  }
  