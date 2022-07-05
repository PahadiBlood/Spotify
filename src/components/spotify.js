// client id= a96f27765a794b79bb489c923220b5bc
// client secret= e3610809a00349289459aa716720d896



const client_id = "a96f27765a794b79bb489c923220b5bc";
const redirect_uri = "http://localhost:3000/";
const auth_url = "https://accounts.spotify.com/authorize";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const login_url = `${auth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export  const getTokenFromUrl=()=>{
  
 const value=  window.location.hash
 .substring(1)
 .split("&")
 .reduce((initial,item)=>{
   let parts=item.split("="); 
   initial[parts[0]]=decodeURIComponent(parts[1]); 
   return initial;
  },{})
  // console.log('value',value);
  return value;
}

export const getPlaylistFromUrl = () => {
  const value= window.location.pathname.split("playlists/")[1];
  return value;
  
}

// getTokenFromUrl();