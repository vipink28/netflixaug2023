import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../helper/axios';
import { requests } from '../helper/requests';
import Card from '../components/Card';
function BrowseByGenre(props) {

    const [videoList, setVideoList]=useState(null);
    const { platform, genreid } =  useParams();

    const fetchVideosByGenre = async()=>{
        const response = await axios.get(requests.getVideoByGenre(platform, genreid));
        setVideoList(response.data.results);
    }

    useEffect(()=>{
        if(platform && genreid){
            fetchVideosByGenre();
        }        
    }, [platform, genreid])




    return (
        <div className='container-fluid pt-5'>
            <div className='d-flex py-3'>
                <select name='type'>
                    <option value="movie">Movie</option>
                    <option value="tv">Tv</option>
                </select>
                <select name='genres'>
                    <option value="18">Action</option>                    
                </select>
            </div>

            <div className="row g-3">
                {
                    videoList?.map((item)=>{
                        return(
                        <div className='col-lg-3' key={item.id}>
                            <Card video={item} platform={platform}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BrowseByGenre;