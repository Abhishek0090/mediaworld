import React from 'react'
import "./leftbar.scss";
import user from '../../assets/user.png'
import Friends from '../../assets/friends.png'
import Groups from '../../assets/people.png'
import Market from '../../assets/market.png'
import Watch from '../../assets/video-player.png'
import Memories from '../../assets/pictures.png'
import Events from '../../assets/planner.png'
import Gaming from '../../assets/game-console.png'
import Gallery from '../../assets/gallery.png'
import Videos from '../../assets/video-marketing.png'
import Messages from '../../assets/comments.png'
import Tutorials from '../../assets/streaming.png'
import Courses from '../../assets/online-education.png'
import Fund from '../../assets/funding.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const LeftBar = () => {

  const {currentUser}  =useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className="user">
            <img src= {currentUser.profilePic} alt='' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src={Friends} alt=''/>
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={Groups} alt=''/>
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={Market} alt=''/>
            <span>MarketPlace</span>
          </div>
          <div className='item'>
            <img src={Watch} alt=''/>
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={Memories} alt=''/>
            <span>Memories</span>
          </div>
          <hr/>
          <div className='menu'>
          <span>Your Shortcuts</span>
        
          <div className='item'>
            <img src={Events} alt=''/>
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={Gaming} alt=''/>
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={Gallery} alt=''/>
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={Videos} alt=''/>
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src={Messages} alt=''/>
            <span>Messages</span>
          </div>
     </div>
     <hr/>
      <div className='menu'>
        <span>Others</span>
          <div className='item'>
            <img src={Tutorials} alt=''/>
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src={Courses} alt=''/>
            <span>Courses</span>
          </div>
          <div className='item'>
            <img src={Fund} alt=''/>
            <span>Fund</span>
          </div>
      </div>
         

        </div>
      </div>
    </div> 
  )
}

export default LeftBar