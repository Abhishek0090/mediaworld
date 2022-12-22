import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./post.scss"
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className='post'>

            <div className='container'>

                <div className='user'>
                    <div className='userInfo'>
                        <img src={post.img} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
                <div className='content'>

                </div>
                <div className='info'>

                </div>
            </div>

        </div>
    )
}

export default Post