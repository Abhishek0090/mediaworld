import React, { useContext, useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./post.scss"
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import moment from "moment";
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';


const Post = ({ post }) => {


    const { isLoading, error, data } = useQuery(['likes', post.id], () =>

        makeRequest.get("/likes?postId=" + post.id).then((res) => {
            return res.data;
        })
    );

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (liked) => {

            if (liked) return makeRequest.delete("/likes?postId=" + post.id);
            return makeRequest.post("/likes", { postId: post.id });
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["likes"]);
            },
        }
    );

    const handleLike = () => {

        mutation.mutate(data?.includes(currentUser.id));

    };



    const deletemutation = useMutation(
        (postId) => {

            return makeRequest.delete("/posts/ " + postId);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );

    const handleDelete = () => {
        deletemutation.mutate(post.id);
    }



    // console.log(data)
    // console.log(currentUser.profilePic)

    const [comment, setCommentOpen] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='post'>

            <div className='container'>

                <div className='user'>
                    <div className='userInfo'>
                        <img src={post.profilePic} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon onClick={(e) => (setMenuOpen(true))} />
                    {menuOpen && post.userId === currentUser.id && <button onClick={handleDelete}>Delete Post</button>}
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={"/upload/" + post.img} alt="postimg" />
                </div>
                <div className='info'>
                    <div className='item'>
                        {isLoading ? "loading" : data?.includes(currentUser.id) ? <FavoriteOutlinedIcon onClick={handleLike} style={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} />}
                        {data?.length <= 1 ? (data?.length) + " like" : (data?.length) + " likes"}

                    </div>
                    <div className='item' onClick={() => setCommentOpen(!comment)}>

                        <TextsmsOutlinedIcon />
                        12 comments
                    </div>
                    <div className='item'>
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {comment && <Comments postId={post.id} />}
            </div>

        </div>
    )
}

export default Post