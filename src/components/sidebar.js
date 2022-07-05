import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import QueueIcon from '@mui/icons-material/Queue';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { useContext, useEffect, useReducer } from "react";
import reducer,{ initialValue } from "./reducer";
import { DataLayer, useDataLayerValue } from "./dataLayer";
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';

// import { getPlaylistFromUrl } from "./spotify";



export default function Sidebar() {
  const [{playlists,discover_weekly},dispatch]=useDataLayerValue();
  const spotify = new SpotifyWebApi();
  // const [dispatch]=useDataLayerValue();
  const setPlaylist=(value)=>{
    // console.log(value)
    spotify.getPlaylist(value).then(playl=>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playl
      })
    })
  }
  return (
    <div className="sidebar">
      sidebar
      <div className="sidebar-logo">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
      </div>
      <div className="sidebar-options">
        <ul>
          <li className="sidebar-options_list">
            <HomeIcon className='sidebar-options_listIcon'/>
            Home
          </li>
          <li className="sidebar-options_list">
            <SearchIcon className='sidebar-options_listIcon'/> Search
          </li>
          <li className="sidebar-options_list">
            <QueueMusicIcon className='sidebar-options_listIcon'/>
            Your Library
          </li>
        </ul>
      
        <ul>
          <li className="sidebar-options_list">
            <QueueIcon className='sidebar-options_listIcon'/>
            Create Playlist
          </li>
          <li className="sidebar-options_list">
            <FavoriteIcon className='sidebar-options_listIcon'/> Liked Songs
          </li>
          <li className="sidebar-options_list">
            <PodcastsIcon className='sidebar-options_listIcon'/>
             Your Episodes
          </li>
        </ul>
        <strong className="playlist-title">PLAYLISTS</strong>
        <hr className="playlist-border"/>
        <ul>
           
           {playlists?.items?.map(p=> 
            <li className="sidebar-options_list" key={p.id} onClick={()=>setPlaylist(p.id)}> 
              <span>{p?.name}</span>
            </li>
            )}
           
        </ul>
      </div>
    </div>
  );
}
