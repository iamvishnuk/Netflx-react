import React,{useEffect, useState} from 'react';
import './Post.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants';
import Youtube from 'react-youtube'

function Post (props){

    const [post, setPost] = useState([])
    const [urlId, setUrlId ] = useState()

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data)
            setPost(response.data.results)
        }).catch(err => {
            alert(err)
        })
    }, [props.url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls:0,
            rel:0
        }
    };

    const handleMovie = (id) =>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }else{
                console.log("tariler not available")
            }
        })
    }
    
    return(
        <div className='row'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {
                    post.map((movies,index) => 
                        <img onClick={() => handleMovie(movies.id) } key={index} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl + movies.backdrop_path}`} alt="" />
                    )
                }
                
            </div>
            
            { urlId && <Youtube opts={opts} videoId= {urlId.key} />}

        </div>
    )
}

export default Post;