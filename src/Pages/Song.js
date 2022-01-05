import { useParams } from "react-router-dom";
import JSONData from '../Data.json';
import SecondsToHours from '../MenuFunctions/SecondsToHours'
import { useDispatch } from "react-redux";
import CreateTrackList from "../MenuFunctions/CreateTrackList";

export default function Song(){
    let params=useParams()
    let Tracks=JSONData[params.id].TrackList;
    let AlbumInSeconds=0;

    let dispatch=useDispatch();

    for (var i=0;i<Tracks.length;i++){
        let DurationSplited=Tracks[i].Duration.split(':');
        let seconds=(parseInt(DurationSplited[0])*60)+parseInt(DurationSplited[1]);
        AlbumInSeconds+=seconds; 
    }

    let AlbumLength=SecondsToHours(AlbumInSeconds)

    return (
        <div>
            <div style={{display:'flex',marginBottom:'25px'}}>
                <img src={JSONData[params.id].Cover} alt={JSONData[params.id].Name} className="AlbumCoverBig"/>
                <div style={{display:'block',marginLeft:'15px'}}>
                    <h1>{JSONData[params.id].Name}</h1>
                    <h2>{JSONData[params.id].Artist}</h2>
                    <h3>{AlbumLength}</h3>
                </div>
            </div>
            
            <CreateTrackList JSONData={JSONData} AlbumId={params.id} dispatch={dispatch}/>
        </div>
    )
}