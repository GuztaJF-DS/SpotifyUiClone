import React from 'react';
import JSONData from '../Data.json'
import {Link} from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';

import  SwiperCore,{FreeMode,Pagination} from 'swiper';

SwiperCore.use([FreeMode,Pagination]);

function Content(){
    

    return(
        <div style={{flexDirection:"row",marginBottom:"7px"}}>
            <div style={{fontSize:"25px"}}>
                Fileira Aleatória
            </div>
            <div className='carousel'>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={()=>{console.log('changed')}}
                freeMode={true}
                pagination={{
                    "clickable": true
                  }}
                breakpoints={{
                    0:{
                        spaceBetween:5,
                        slidesPerView:3
                    },
                    771:{
                        spaceBetween:1,
                        slidesPerView:4
                    },
                    1000:{
                        spaceBetween:10,
                        slidesPerView:5
                    }
                }}                  
            >
               {JSONData.map(function(data,i){
                   return(
                    <SwiperSlide className='MusicGroup' key={i}>
                        <Link draggable="false" style={{textDecoration:"none", color:'#ecf2f9'}} to={`/Album/${i}`}>
                            <div className="MusicSquare">
                                <img draggable="false" src={data.Cover} alt={data.Name} className="AlbumCover"/>
                                <div className='MusicName'>{data.Name}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                   )
                   
               })}
            </Swiper>
            </div>
     </div>
    )
}

export default Content;