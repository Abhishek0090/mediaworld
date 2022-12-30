import React from 'react'
import './rightbar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions for You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <span>Abhishek Pal</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/7258495/pexels-photo-7258495.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
              <span>Home Lander</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className='item'>
        <span>Latest Activities</span> 
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <p>
              <span>Abhishek Pal</span> liked your post
              </p>
            </div>
            <span>1 min ago</span>
            
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <p>
              <span>Abhishek Pal</span> liked your comment
              </p>
            </div>
            <span>1 min ago</span>
            
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <p>
              <span>Abhishek Pal</span> posted
              </p>
            </div>
            <span>1 min ago</span>
            
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <p>
              <span>Abhishek Pal</span> changed profile picture
              </p>
            </div>
            <span>1 min ago</span>
            
          </div>
        </div>
        <div className='item'>
        <span>Online Friends</span>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        <div className='user'>
            <div className='userInfo'>
              <img src='https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <div className='online'/>
              <span>Abhishek Pal</span>  
            </div>
            <span>1 min ago</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar