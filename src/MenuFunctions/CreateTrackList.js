import React from "react";
import { PlaySong } from "../Redux/SongSlice";

export default function CreateTrackList(props){

    let Tracks=props.JSONData[props.AlbumId].TrackList;
    let Cover=props.JSONData[props.AlbumId].Cover
    let Artist=props.JSONData[props.AlbumId].Artist
    let dispatch=props.dispatch
    let TracksJsx=[];

    Tracks.map(function(data,index){
        TracksJsx.push(
                <button key={index} onClick={
                    ()=>{
                        dispatch(
                            PlaySong(
                                {"TrackList":Tracks,"SongId":index,"SongCover":Cover,"Artist":Artist}
                            )
                        )
                    }
                }
                className="SongButton"
                >
                    <div className="SongName">
                    {data.Name}
                    </div>
                    <div className="SongDuration">
                    {data.Duration}
                    </div>
                </button>
            )
        })
        
        return TracksJsx
}