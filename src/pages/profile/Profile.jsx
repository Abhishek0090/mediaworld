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
import { useContext, useState } from 'react';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import Posts from '../../components/posts/Posts';
import { useLocation } from 'react-router-dom';
import Update from '../../components/update/Update';

const Profile = () => {

  const [openUpdate, setOpenUpdate] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2])  //for getting userid from url


  const { isLoading, error, data } = useQuery(['user'], () =>

    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: risLoading, data: relationshipData } = useQuery(['relationship'], () =>

    makeRequest.get("/relationship?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );


  const queryClient = useQueryClient();


  const mutation = useMutation(
    (following) => {

      if (following) return makeRequest.delete("/relationship?userId=" + userId);
      return makeRequest.post("/relationship", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {

    mutation.mutate(relationshipData?.includes(currentUser.id));

  };



  // console.log(data)

  return (
    <div className='profile'>
      {isLoading ? "loading" : <><div className='images'>
        <img src={"/upload/" + data.coverPic} className='cover' alt="cover" />
        <img src={"/upload/" + data.profilePic} className="profilePic" alt="profile" />
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
              <span>{data.name}</span>
              <div className='info'>
                <div className='item'>
                  <PlaceIcon fontSize='small' />
                  <span>{data.city}</span>
                </div>
                <div className='item'>
                  <LanguageIcon fontSize='small' />
                  <span>{data.website}</span>
                </div>
              </div>
              {risLoading ? "loading" : userId === currentUser.id ? (<button>update</button>) : <button onClick={handleFollow}>{relationshipData?.includes(currentUser.id) ? "Following" : "Follow"}</button>}
            </div>
            <div className='right'>
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <Posts userId={userId} />
        </div>
      </>
      }
      {openUpdate && <Update setOpenUpdate={setOpenUpdate}  user={data} />}
    </div>
  )
}

export default Profile