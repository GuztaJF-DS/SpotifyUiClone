import {createSlice} from '@reduxjs/toolkit';

export const SongSlice=createSlice({
    name:'Song',
    initialState:{
        value:{SongName:"",SongDuration:"",SongCover:""}
    },
    reducers:{
        PlaySong:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {PlaySong}=SongSlice.actions;

export default SongSlice.reducer 