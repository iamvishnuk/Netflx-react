import React,{useEffect, useState} from 'react';
import './Post.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants';

function Post (props){

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data)
            setPost(response.data.results)
        }).catch(err => {
            alert(err)
        })
    }, [props.url])

    
    return(
        <div className='row'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {
                    post.map((movies,index) => 
                        <img key={index} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl + movies.backdrop_path}`} alt="" />
                    )
                }
                
            </div>
        </div>
    )
}

export default Post;