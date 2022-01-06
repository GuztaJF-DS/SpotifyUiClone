import { ReactComponent as PauseSvg } from '../Assets/pause.svg'
import { ReactComponent as Forward } from '../Assets/Forward.svg';
import { useSelector,useDispatch } from 'react-redux';
import { PreviousSong,NextSong } from '../Redux/SongSlice';
import SongRange from '../MenuComponents/SongRange';

export default function MusicPlayer(){
    const Song=useSelector((state)=>state.Song.value)
    
    const dispatch=useDispatch();

    return(
    <>
        <div className="Header">
            <div className='UpPart'>
            <div id='HeaderSplited' style={{display:"flex",alignItems:"start"}}>
                <img src={Song.SongCover} alt="Banner" className='MiniCover'/>
                <div className='PlayerSongName'>
                    <div id='SongName'>{Song.TrackList[Song.SongId].Name}</div>
                    <div id="ArtistName">{Song.Artist}</div>
                </div>
                
            </div>

            <div id='HeaderSplited' style={{display:"flex",justifyContent:'center',height:'85%'}}>
                <button id="Backward" onClick={()=>{
                    dispatch(PreviousSong());
                }} className="PlayerButton"><Forward fill="white" stroke='none'/></button> 

                <button className="PlayerButton"><PauseSvg fill="white" stroke='none'/></button>
                
                <button className="PlayerButton" onClick={()=>{
                    dispatch(NextSong())
                }}><Forward fill="white" stroke='none'/></button>
            </div>

            <div id='HeaderSplited' >
            <div className='PlayerSongDuration'>
                {Song.TrackList[Song.SongId].Duration} / {Song.TrackList[Song.SongId].Duration}
            </div>
            </div>
            </div>
            <div className='DownPart'>
                <SongRange/>
            </div>
     </div>    
    </>
    )
}
