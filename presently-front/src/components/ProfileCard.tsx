import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

interface ProfileProps {
  username: string;
  followers: string;
  following: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ username, followers, following }) => {
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/users/me/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentUsername(data.username); 
        } else {
          console.error('Failed to fetch current user data');
        }
      } catch (error) {
        console.error('Error fetching current user data:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/homepage', {replace:true});
  };
  
const handleFollow = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/users/?search=${username}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });

    if (response.data && response.data.length > 0) {
      const userId = response.data[0].id; 
      
      const followResponse = await axios.post(`http://127.0.0.1:8000/users/${userId}/follow/`, {username: ""}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });

    console.log('Follow response:', followResponse.data);


      if (followResponse.status === 200) {
        console.log('Підписка успішна');
      } else {
        console.error('Не вдалося підписатися');
      }
    } else {
      console.error('Користувач не знайдений');
    }
  } catch (error) {
    console.error('Помилка при підписці:', error);
  }
};


  return (
    <div className="d-flex align-items-center justify-content-around p-4 my-5"
      style={{
        backgroundColor: '#dcb39c',
        width: '100%',
        fontSize: '2em',
     }}>
      <FaUserCircle color="white" size={250}/>
      <div className='d-flex flex-column justify-content-center'>
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
        {currentUsername === username && (
          <div className='d-flex align-items-center mt-2 justify-content-around'>
            <Link to={'/CreatingPage'}
              style={{
                width: '45%',
              }}
            >
            <button
              className="btn btn-secondary"
              style={{
                backgroundColor: '#a67a60',
                borderColor: '#a67a60',
                fontSize: '0.75em',
                width: '100%',
              }}>
              <div className='pb-1'>Додати</div>
            </button>
            </Link>
            <button
              className="btn btn-secondary"
              onClick={handleLogout}
              style={{
                backgroundColor: '#a67a60',
                borderColor: '#a67a60',
                fontSize: '0.75em',
                width: '45%',
              }}>
              <div className='pb-1'>Вийти</div>
            </button>
          </div>
        )}
        {currentUsername != username && (
          <div className='d-flex justify-content-center'><button onClick={handleFollow} className="btn btn-secondary" style={{ backgroundColor: '#a67a60', borderColor: '#a67a60', width: '70%', fontSize: '0.75em'}}><div className='pb-1'>Слідкувати</div></button></div>
        )}
        </div>
    </div>
  );
};

export default ProfileCard;
