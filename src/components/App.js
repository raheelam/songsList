import React from "react";
import SongsList from "./SongsList";
import SongDetails from "./SongDetails";

const App = () =>{
    return(
        <div style={{paddingTop: "40px"}} className="ui container grid">
            <div className="ui row">
                <div className="column eight wide grey">
                    <SongsList />
                </div>
                <div className="column eight wide grey">
                    <SongDetails />
                </div>
            </div>
        </div>
    );
}

export default App;