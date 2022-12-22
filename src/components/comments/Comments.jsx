import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./comments.scss";

const Comments = () => {

  const {currentUser} = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "Abhishek Pal",
      userId: 1,
      img: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
      profilePicture: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
      desc: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"
    },
    {
      id: 2,
      name: "Abhishek Pal",
      userId: 2,
      img: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
      profilePicture: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
      desc: "Dont Hold Back My  Bro"
    }
  ]

  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePicture} alt="profile"/>
        <input type="text" placeholder='Enter Your Comment'/>
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className='comment'>
          <img src={comment.profilePicture} alt="" />
          <div className='info'>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
          {/* <input type="text" placeholder="Enter Your comment" />
          <button>Send</button> */}
        </div>
      ))
      }
    </div>
  )
}

export default Comments