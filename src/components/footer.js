import { PlayCircleFilled } from "@mui/icons-material";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';

import { useRef } from "react";
import { useDataLayerValue } from "./dataLayer";
import './footer.css';
import { useState,useEffect } from "react";
import dhokha from '../assets/dhokha.mp3';

export default function Footer() {
    const [{currentSong},dispatch]=useDataLayerValue();
    const [isPlaying,setPlaying]=useState(false);
    const [song,setSong]=useState(dhokha);
    const audioRef=useRef();
    // const [value,setValue]=useState(30);
    // const audioPlayer=useRef();
    const changePlayPause=()=>{
      document.getElementById("audio-player").play();
      setPlaying(!isPlaying);
      // audioPlayer.current.play();
    }
    const updateSong=(source)=>{
      setSong(source);
      if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
    useEffect(()=> {
      updateSong(currentSong.preview_url);
    },[currentSong]);
    console.log("xxxxxx",song);
    console.log("yyyy",currentSong?.album?.artists[0].name );
    
    return (
      <div className="footer">

        <div className="left">
          <img className="song-pic" src={currentSong?.album?. images[2].url || 'https://i.scdn.co/image/ab67616d00004851598b54ac053ca26cb7ec7c38'} />
          <div className="song-container">
            <h3 className='song-name'>{currentSong?.name || "Challa" }</h3>
            <h4 className="song-other-info">{ currentSong?.album?.artists[0].name || "Vaishali"}</h4>
          </div>
        </div>
        <div className="center">
        <audio controls id='audio-player' className='audio-player' ref={audioRef} >
            <source src={song} />
            Your browser does not support the audio element.
        </audio>
        </div>
        <div className="right">
          
            <QueueMusicIcon fontSize='medium'/>
            <SurroundSoundIcon/>
          
          
          
        </div>
      </div>
    )
  }
  