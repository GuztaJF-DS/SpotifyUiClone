import {createSlice} from '@reduxjs/toolkit';

export const SongSlice=createSlice({
    name:'Song',
    initialState:{
        value:{TrackList:'[{"Name":"","Duration":""}]',SongId:0,SongCover:"",Artist:""}
    },
    reducers:{
        PlaySong:(state,action)=>{
            state.value=action.payload
        },
        PreviousSong:(state)=>{
            if(state.value.SongId!==0){
                state.value.SongId-=1
            }
        },
        NextSong:(state)=>{
            if(state.value.SongId<((state.value.TrackList).length)-1){
                state.value.SongId+=1
            }
        }
    }
})

export const {PlaySong,PreviousSong,NextSong}=SongSlice.actions;

export default SongSlice.reducer 