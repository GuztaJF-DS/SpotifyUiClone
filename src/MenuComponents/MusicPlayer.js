import { ReactComponent as PauseSvg } from '../Assets/pause.svg'
import { ReactComponent as Forward } from '../Assets/Forward.svg';
import { useSelector,useDispatch } from 'react-redux';
import { PreviousSong,NextSong } from '../Redux/SongSlice';

export default function MusicPlayer(){
    const Song=useSelector((state)=>state.Song.value)

    
    const dispatch=useDispatch();

    return(
    <>
        <div className="Header">
            <img src={Song.SongCover} alt="Banner" className='MiniCover'/>
            <div className='PlayerSongName'>
                {Song.TrackList[Song.SongId].Name}
            </div>

                <button id="Backward" onClick={()=>{
                    dispatch(PreviousSong());
                }} className="PlayerButton"><Forward fill="white" stroke='none'/></button>    
                <button className="PlayerButton"><PauseSvg fill="white" stroke='none'/></button>
                <button className="PlayerButton" onClick={()=>{
                    dispatch(NextSong())
                }}><Forward fill="white" stroke='none'/></button>
            
            <div className='PlayerSongDuration'>
                {Song.SongDuration}
            </div>
        </div>
    </>
    )
}
