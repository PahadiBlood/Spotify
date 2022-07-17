// import React from 'react';
// import { useState } from "react";
// import { useEffect } from "react";
// import SpotifyWebPlayer from "react-spotify-web-playback";
// import { useDataLayerValue } from "./dataLayer"


// const Player = ({trackUri}) => {
//     const [play,setPlay]=useState(false);
//     useEffect(()=>{
//       setPlay()
//     },[trackUri])
//     const [{token},dispatch]=useDataLayerValue();
//     console.log("player");

//     if(!token) return null;
//     return (
//     <div>
//         <SpotifyWebPlayer token={token} callback={setPlay(!play)} play={play} uri={trackUri} />
//     </div>
//   )
// }

// export default Player