// import React,{ useEffect, useContext,useReducer,useState } from "react";
// import { getTokenFromUrl } from "./components/spotify";
// import Home from "./components/pages/home";
// import Login from "./components/pages/login";
// import SpotifyWebApi from 'spotify-web-api-js';
// import reducer,{initialValue} from './components/reducer'
// import { DataLayer, useDataLayerValue } from "./components/dataLayer";
// // import "./styles.css";
// // 30th MArch 20220
// export default function App() {
//   const [state_token, setToken] = useState(null);
//   const spotify = new SpotifyWebApi();
//   const [{user,playlist,discover_weekly},dispatch]=useDataLayerValue();
//   // const [state,dispatch]=useReducer(reducer,initialValue);
//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash='';
//     // console.log("printsomething",hash);
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token);
//       dispatch({
//           type: "SET_TOKEN",
//           token:_token,
//         })
    
//     spotify.setAccessToken(_token);

//     spotify.getMe().then((user)=>{
//      dispatch({
//       type: 'SET_USER',
//       user: user 
//       })
//     })
  
    
//     spotify.getUserPlaylists().then((playlist)=>{
//      dispatch({
//         type: "SET_PLAYLIST",
//         playlist
//       })
//     })

//     spotify.getPlaylist("1DH6PcO24pqXnKyz7YcvCw").then(playlist=>{
//      dispatch({
//         type: "SET_DISCOVER_WEEKLY",
//         discover_weekly: playlist
//       })
//     })
//   }
//     // console.log("context",state.playlist);

//   }, []);
//   console.log("token", user);

//   return (
    
      
//         <div className="App">
//           { state_token? 
//             <Routes>
//               <Route path='/' element={<Home playlist={discover_weekly}/>} /> 

//             </Routes>:
//             <Login />
//           } 
//         </div>
   
      
//   );
// }

// // App.contextType=DataLayer;