import React,{useState,useEffect} from 'react';
import Data from '../Data.json'
import {Link} from 'react-router-dom'

function Content(){
    const [carousel,setCarousel]=useState(0);
    const [TriggerCarousel,setTriggerCarousel]=useState("");

    useEffect(()=>{
        try{
            if(TriggerCarousel==="-"){
                if(carousel!==0){
                    setCarousel(carousel-1);
                }
            }
            if(TriggerCarousel==="+"){
                if((carousel+5)!==(parseInt(Data.length))){
                    setCarousel(carousel+1);
                }
            }
            setTriggerCarousel("")
            console.log(carousel)
        }catch(err){
            console.log(err);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[TriggerCarousel])
    
    function MultipleJsx(){
        let rows = []
        for (let i = carousel; i < carousel+5; i++) {
        rows.push(
                <nav className='MusicGroup' key={i}>
                    <Link style={{textDecoration:"none", color:'#ecf2f9'}} to={`/Album/${i}`}>
                        <div className="MusicSquare">
                            <img src={Data[i].Cover} alt={Data[i].Name} className="AlbumCover"/>
                            <div>{Data[i].Name}</div>
                        </div>
                    </Link>
                </nav>
                )
        }
        return rows
    }

    return(
        <div style={{flexDirection:"row",marginBottom:"7px"}}>
            <div style={{fontSize:"25px"}}>
                Fileira Aleatória
            </div>

        <div className="ContentMusicRow">
            <button className='CarouselButton' onClick={()=>{setTriggerCarousel("-")}}>{'<'}</button>
                <MultipleJsx/>
            <button className='CarouselButton' onClick={()=>{setTriggerCarousel("+")}}>{'>'}</button>
        </div>
     </div>
    )
}

export default Content;