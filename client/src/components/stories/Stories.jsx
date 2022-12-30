import React, { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    //Temporary Data
    const stories = [
        {
            id:1,
            name : "Abhishek Pal",
            img:"https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            name : "Abhishek Pal",
            img:"https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            name : "Abhishek Pal",
            img:"https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:4,
            name : "Abhishek Pal",
            img:"https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePicture} alt="img"/> 
                <span>{currentUser.name}</span>
                <button>+</button>
             </div>   
        {stories.map(story=>(
              <div className='story' key={story.id}>
                <img src={story.img} alt="img"/> 
                <span>{story.name}</span>
             </div>   
        ))}
    </div>
  )
}

export default Stories