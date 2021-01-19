//action creator: a function that returns an action(an obj with type and an optional payload)
export const selectSong = (song) =>{
    return{
        type: 'SELECT_SONG',
        payload: song

    }
}