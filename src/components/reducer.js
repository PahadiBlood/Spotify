export const initialValue={
    user: null,
    token: null,
    new_playlist:[],
    playing:false,
    item:null,
    isPlaying: false,
    currentSong:{}
  };
  
  function reducer(state,action) {
    console.log("action",action);

    switch (action.type){
      case 'SET_USER':
        return {
          ...state,
          user: action.user
      }
      case "SET_PLAYLIST": 
        return {
          ...state,
          playlists: action.playlists
        }
      case "SET_TOKEN":
         
        return {
          ...state,
          token: action.token

        }
  
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly: action.discover_weekly
        }  
        case "SET_NEW_PLAYLIST":
          return{
            ...state,
            new_playlist: action.new_playlist
          }  
        case "SET_ISPLAYING":
          return{
            ...state,
            isPlaying: action.isPlaying
          }  
        case "SET_SONG":
          return{
            ...state,
            currentSong: action.currentSong
          }  
        default: 
    console.log('token',state.token)
        
        return state;
    }
  }

  export default reducer;