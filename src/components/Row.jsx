import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import Card from './Card';
import { useState } from 'react';
import axios from '../helper/axios';
import { requests } from '../helper/requests';

function Row(props) {
    const { title, action, selector, platform, genres } = props;

    const content = useSelector(!genres ? selector:(state)=>state);
    const { data, status, error } = content;
    const [videoByGenre, setVideoByGenre]=useState(null);

    const fetchVideoByGenre = async()=>{
        const response = await axios.get(requests.getVideoByGenre(platform, genres.id));
        setVideoByGenre(response.data.results);
    }

    const dispatch = useDispatch();
    useEffect(()=>{
        if(!genres){
            dispatch(action());
        }        
    }, [])

    useEffect(()=>{
        if(genres){
            fetchVideoByGenre();
        }
    }, [genres])

    return (
        <div className='py-3'>
            <h4 className='mb-3'>{title}</h4>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    genres ? 
                    videoByGenre?.map((item)=>{
                        return <SwiperSlide key={item.id}>
                           <Card video={item} platform={platform}/>
                        </SwiperSlide>   
                    }):
                    data?.results.map((item)=>{
                     return <SwiperSlide key={item.id}>
                        <Card video={item} platform={platform}/>
                     </SwiperSlide>   
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;