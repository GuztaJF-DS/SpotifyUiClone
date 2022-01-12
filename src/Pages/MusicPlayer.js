import { ReactComponent as PauseSvg } from '../Assets/pause.svg'
import { ReactComponent as Forward } from '../Assets/Forward.svg';
import { useSelector,useDispatch } from 'react-redux';
import { PreviousSong,NextSong } from '../Redux/SongSlice';
import SongRange from '../MenuComponents/SongRange';

export default function MusicPlayer(){
    const Song=useSelector((state)=>state.Song.value)
    const dispatch=useDispatch();

    function HandleChangeText(e){
        if(e){
            e.classList.remove("Animate")
            let Shadow=document.querySelector(".Shadow")
            Shadow.classList.remove("NewSize")
            let TextWidth=parseInt(getComputedStyle(e, null).width)
            let PlayerSong=document.querySelector('.PlayerSong');
            let PSWidth=parseInt(getComputedStyle(PlayerSong,null).width)

                if(TextWidth>=PSWidth){
                    let Offset=(PSWidth-TextWidth)-8;
                    e.style.setProperty("--offsetSize",Offset+'px')
                    Shadow.style.setProperty("--shadowBoxSize",(PSWidth)+1+'px')
                    e.classList.add("Animate")
                    Shadow.classList.add("NewSize")
                }
                else{
                    e.style.setProperty("--offsetSize","0px")
                }
            
        }        
    }
    

    window.onresize=function(){
        let PlayerSongName=document.querySelector('.PlayerSongName');
        HandleChangeText(PlayerSongName)
    }

    return(
    <>
        <div className="Header">
            <div className='UpPart'>
            <div id='HeaderSplited' style={{display:"flex",alignItems:"start",paddingTop:"5px"}}>
                <img src={Song.SongCover} alt="Banner" className='MiniCover'/>
                <div className='PlayerSong'>
                    <div className='Shadow'>.</div>
                        <div className='PlayerSongName'
                            style={{width:'fit-content'}}
                            ref={(e)=>HandleChangeText(e)}
                        >{Song.TrackList[Song.SongId].Name}</div>
                    <div id="ArtistName">{Song.Artist}</div>
                </div>
                
            </div>

            <div id='HeaderSplited' style={{display:"flex",justifyContent:'center'}}>
                <button id="Backward" onClick={()=>{
                    dispatch(PreviousSong());
                }} className="PlayerButton"><Forward fill="white" stroke='none'/></button> 

                <button className="PlayerButton"><PauseSvg fill="white" stroke='none'/></button>
                
                <button className="PlayerButton" onClick={()=>{
                    dispatch(NextSong())
                }}><Forward fill="white" stroke='none'/></button>
            </div>

            <div id='HeaderSplited'>
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
