import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './header.css';
import { DataLayer, useDataLayerValue } from "./dataLayer";

export default function Header() {
  const [{playlists,discover_weekly,user},dispatch]=useDataLayerValue();
  // var x=Object.keys(playlists.items[0])
  //   for(var i=0;i<x.length;i++){
  //     {console.log('%cplaylists>>>>'+x[i],'color:red;')}
  //   }
  //   console.log(playlists.items[1].name)
  
  return(
    
     <div className="header">
       {/* header */}
      <div className='header-head'>
        <div className="header-icons">
          <ChevronLeftIcon className='header-icon' fontSize='large'/> 
          <ChevronRightIcon className='header-icon' fontSize='large' />
        </div>
        <div className='header-buttons'>
        <button className='header-update_btn'>UPGRADE</button>
        <button className='header-profile_btn'>{user?.display_name}</button>
        </div>
        </div>
      <div className="header-body">
        <img src={ discover_weekly?.images[0].url} /> 
        
        <div className="header-body_description">
          <h3 className='header-playlist'>PLAYLIST</h3>
          <h2 className='header-playlist_name'>{discover_weekly?.name}</h2>
        </div>
      </div>

     </div>
  )
}
