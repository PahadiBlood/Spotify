import React,{ useEffect, useContext,useReducer,useState } from "react";
import { getPlaylistFromUrl, getTokenFromUrl } from "./components/spotify";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import SpotifyWebApi from 'spotify-web-api-js';
import reducer,{initialValue} from './components/reducer'
import { DataLayer, useDataLayerValue } from "./components/dataLayer";
import { Route, Routes } from "react-router-dom";
import Random from "./components/pages/random";
// import "./styles.css";
// 30th MArch 2022  
export default function App() {
  const [state_token, setToken] = useState(null);
  const spotify = new SpotifyWebApi();
  const [{user,playlist,discover_weekly},dispatch]=useDataLayerValue();
  // const [state,dispatch]=useReducer(reducer,initialValue);
  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash='';
    // console.log("printsometash);
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      dispatch({
          type: "SET_TOKEN",
          token:_token,
        })
        
        spotify.setAccessToken(_token);
        
        spotify.getMe().then((user)=>{
          dispatch({
            type: 'SET_USER',
            user: user 
          })
        })
        
        
    spotify.getUserPlaylists().then((playlist)=>{
     dispatch({
        type: "SET_PLAYLIST",
        playlists:playlist
      })
    })
    
    spotify.getPlaylist("1aSgNMVxYMAUXNZEMGFKEx").then(playlist=>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playlist
      })
    })
    // let playlistName=getPlaylistFromUrl();
    // console.log("play",playlistName);
    
  }
  // console.log("context",state.playlist);
  
}, []);
// console.log("get token",state_token);
  console.log("token", user);

  return (
   <div className="App">
   { state_token? 
    <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='https://api.spotify.com/v1/playlists' element={<Home playlist={discover_weekly}/>} /> 
    
    </Routes>:
    <Login />
  } 
    </div>
  );
}

// App.contextType=DataLayer;