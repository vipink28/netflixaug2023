import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalSelector } from '../features/tv/tvSlice';
import Card from './Card';

function Row(props) {
    const { title, action, selector, platform } = props;

    const content = useSelector(selector);
    const { data, status, error } = content;

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(action());
    }, [])


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