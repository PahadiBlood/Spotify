import React from 'react'
import './row.css'

function Row({playlist,index,callback}) {
    let song_duration_ms= playlist?.track.duration_ms;
    let song_duration_min=(song_duration_ms/60000)-0.30
    let song_duration_arr=song_duration_min.toFixed(2).split('.');
  return (
    <div className='row' onClick={callback}>
      <span className='index'>{index+1}</span>
      <div className='song-main'>
          <img src={playlist?.track.album.images[2].url} alt="" width=""/>
          <div className='names'>
              <span className='song'>{playlist?.track.name} </span>
              <span className='singer'>{playlist?.track.album.artists[0].name}</span>
          </div>
          </div>
      <span className='album'>{playlist?.track.album.name}</span> 
      <span className="date-added">17 days ago</span>
      <span className='duration'>{song_duration_arr[0]+":"+song_duration_arr[1]}</span>
    </div>
  )
}

export default Row