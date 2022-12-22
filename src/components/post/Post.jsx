import React, { useContext, useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./post.scss"
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

const Post = ({ post }) => {

    //temporary function
    const [liked, setliked] = useState(null)

    const likeButton = () => {
        setliked(!liked);
    }

    const [comment,setComment] =  useState(null);

    return (
        <div className='post'>

            <div className='container'>

                <div className='user'>
                    <div className='userInfo'>
                        <img src={post.profilePicture} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={post.img} alt="postimg" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {liked ? <FavoriteOutlinedIcon onClick={likeButton} /> : <FavoriteBorderOutlinedIcon onClick={likeButton} />}
                        12 likes
                    </div>
                    <div className='item' onClick={()=> setComment(!comment)}>

                        <TextsmsOutlinedIcon />
                        12 comments
                    </div>
                    <div className='item'>
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {comment && <Comments/>}
            </div>

        </div>
    )
}

export default Post