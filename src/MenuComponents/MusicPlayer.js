import {ReactComponent as PauseSvg} from '../Assets/pause.svg'
import { ReactComponent as Forward } from '../Assets/Forward.svg';
import { useSelector } from 'react-redux';

export default function MusicPlayer(){
    const Song=useSelector((state)=>state.Song.value)

    return(
    <>
        <div className="Header">
            <img src={Song.SongCover} alt="Banner" className='MiniCover'/>
            <div className='PlayerSongName'>
                {Song.SongName}
            </div>

                <button id="Backward" className="PlayerButton"><Forward fill="white" stroke='none'/></button>    
                <button className="PlayerButton"><PauseSvg fill="white" stroke='none'/></button>
                <button className="PlayerButton"><Forward fill="white" stroke='none'/></button>
            
            <div className='PlayerSongDuration'>
                {Song.SongDuration}
            </div>
        </div>
    </>
    )
}
