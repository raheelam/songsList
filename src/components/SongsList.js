import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions/"

const SongsList = ({songs, selectSong}) => {
    const songList = songs.map(song=> 
    <div className="item" key={song.title}>
    <div className="right floated content">
      <button
        className="ui button primary"
        onClick = {()=>{selectSong(song)}}
      >
        Select
      </button>
    </div>
    <div className="content">{song.title}</div>
  </div>);
    return(
        <div className="ui divided list">
        {songList}

        </div>
    );
}
const mapPropsToState = (state) =>{
    //component receives these as props
    return {
        songs: state.songs
          }

}
export default connect(mapPropsToState,{selectSong})(SongsList);