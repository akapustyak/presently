import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

interface ProfileProps {
  username: string;
  followers: string;
  following: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ username, followers, following }) => {
  return (
    <div className="d-flex align-items-center justify-content-around p-4 my-5"
      style={{
        backgroundColor: '#dcb39c',
        width: '100%',
        fontSize: '2em',
     }}>
      <FaUserCircle color="white" size={250}/>
      <div className='d-flex flex-column'>
        <div className='mb-2'>
          <b>
            @{username}
          </b>
        </div>
        <div className="d-flex justify-content-between w-100 px-5 my-2">
          <div className='me-4'>
            <p className="mb-0">{followers}</p>
            <small>Слідкувачі</small>
          </div>
          <div>
            <p className="mb-0">{following}</p>
            <small>Слідкування</small>
          </div>
        </div>
        <Link to={'/CreatingPage'} className='mt-2'>
          <button className="btn btn-secondary" style={{ backgroundColor: '#a67a60', borderColor: '#a67a60', width: '70%', fontSize: '0.75em'}}><div className='pb-1'>Додати</div></button>
          </Link>
        </div>
    </div>
  );
};

export default ProfileCard;
