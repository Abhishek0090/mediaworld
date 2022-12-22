import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Posts from '../../components/posts/Posts';

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='profile'>
      <div className='images'>
        <img src=" https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600 " className='cover' alt="cover" />
        <img src={currentUser.profilePicture} className="profilePic" alt="profile" />
      </div>
      <div className='profileContainer'>
        <div className='userInfo'>
          <div className='left'>
            <a href="http://facebook.com" >
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com" >
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://instagram.com" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com" >
              <PinterestIcon fontSize="large" />
            </a>
            <a href="http://twitter.com" >
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className='center'>
            <span>Abhishek Pal</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon fontSize='small' />
                <span>India</span>
              </div>
              <div className='item'>
                <LanguageIcon fontSize='small' />
                <span>abhi.codex</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts/>

    </div>
  )
}

export default Profile