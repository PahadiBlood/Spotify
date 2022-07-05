import { useDataLayerValue } from "./dataLayer"
import './main.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Row from "./row";
import SpotifyWebApi from "spotify-web-api-js";
export default function Main() {
  const [{discover_weekly,isPlaying},dispatch]=useDataLayerValue();
  // console.log(discover_weekly?.tracks.items);
  const spotify=new SpotifyWebApi();
  const handleSong=(e)=>{
    console.log("song1",e)
    spotify.getMyCurrentPlayingTrack(e).then((data)=>{
      console.log("song",e);
      // dispatch({
      //   type: 'SET_ISPLAYING',
      //   isPlaying: true
      // })
    })
    // dispatch({
    //   type: 'SET_SONG',
    //   song: true
    // })
  }
  return (
    <div className="main">
    <div className="main-icons">
      <PlayCircleFilledIcon className='green-icon large'/>
      <MoreHorizIcon className='more-icon' fontSize='large'/>
    </div>
    <div className="top-row">
      <span>#</span>
      <span>title</span>
      <span>album</span>
      <span>date added</span>
      <span className="clock"><AccessTimeIcon/></span>
    </div>
    <hr className='hr-top-row'/>
    <div>

    {discover_weekly?.tracks.items.map((m,index)=>
      <Row playlist={m} index={index} key={m.track.id} callback={handleSong}/>
         
       )}  
      
      </div>
    </div>
    )
  }
  