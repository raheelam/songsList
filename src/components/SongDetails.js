import React from "react";
import {connect} from "react-redux";

const SongDetails = ({selectedSong}) => {
    if(!selectedSong){
        return <div>select a song</div>
    }
    return(
        <div>
        <h3>Details for:</h3>
        <p>
          Title: {selectedSong.title}
          <br />
          Duration: {selectedSong.duration}
        </p>
      </div>
    );

}
const mapPropsToState = (state) =>{
    return{
        selectedSong: state.selectedSong
    }

}
export default connect(mapPropsToState)(SongDetails);