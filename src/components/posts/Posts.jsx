import React from 'react'
import Post from '../post/Post'
import "./posts.scss"

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "Abhishek Pal",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
            desc: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"
        },
        {
            id: 2,
            name: "Abhishek Pal",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"
        },
        {
            id: 3,
            name: "Abhishek Pal",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
            desc: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
        },
        {
            id: 4,
            name: "Abhishek Pal",
            userId: 4,
            profilePicture: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
            desc: "You've gotta dance like there's nobody watching  Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth"
        },
        {
            id: 5,
            name: "Abhishek Pal",
            userId: 5,
            profilePicture: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
            desc: "Be the change that you wish to see in the world"
        },

    ]
    return (

        <div className='posts'>
        {
            posts.map(post=>(
                <Post post={post} key={post.id}/>
            ))
        }
        </div>
    )
}

export default Posts