import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PlaySong } from "../Redux/SongSlice";
import Data from '../Data.json';
import SecondsToHours from '../MenuFunctions/SecondsToHours'

export default function Song(){
    let params=useParams()
    let Tracks=Data[params.id].TrackList;
    let AlbumInSeconds=0;

    const dispatch=useDispatch();

    for (var i=0;i<Tracks.length;i++){
        let DurationSplited=Tracks[i].Duration.split(':');
        let seconds=(parseInt(DurationSplited[0])*60)+parseInt(DurationSplited[1]);
        AlbumInSeconds+=seconds; 
    }


    let AlbumLength=SecondsToHours(AlbumInSeconds)

    return (
        <div>
            <div style={{display:'flex',marginBottom:'25px'}}>
                <img src={Data[params.id].Cover} alt={Data[params.id].Name} className="AlbumCoverBig"/>
                <div style={{display:'block',marginLeft:'15px'}}>
                    <h1>{Data[params.id].Name}</h1>
                    <h2>{Data[params.id].Artist}</h2>
                    <h3>{AlbumLength}</h3>
                </div>
            </div>
            
            {Tracks.map(function(data,index){
                return(
                    <button key={index} onClick={
                        ()=>{
                            dispatch(
                                PlaySong(
                                    {"SongName":data.Name,"SongDuration":data.Duration,"SongCover":Data[params.id].Cover}
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
            })}
        </div>
    )
}