import {combineReducers} from 'redux';
//a reducer changes state it can take an action as an argument and change the state of it.
const songsReducer = () =>{
    return  [
                {title: "hold on we are going home",duration: "4:20"},
                {title: "psycho",duration: "2:41"},
                {title: "sue me",duration: "2:59"},
                {title: "bloom",duration: "2:41"},
                {title: "in my mesarati",duration: "3:07"}
            ]
}

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers(
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer

    }
);