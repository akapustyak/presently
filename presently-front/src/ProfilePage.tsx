import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import WishCard from './components/WishCard';

interface User {
    username: string;
    followers: string;
    following: string;
}

interface Wish {
    id: number;
    name: string;
    description: string;
    link: string;
    owner: string;
}

interface ProfilePageProps {
    username: string | null | undefined;
}

const ProfilePage: React.FC<ProfilePageProps> = ({username}) => {
    const [user, setUser] = useState<User | null>(null);
    const [wishes, setWishes] = useState<Wish[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
                try {
                const userToFetch = username || (await fetch('http://127.0.0.1:8000/auth/users/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                }).then((res) => res.json()))[0].username;

                const response = await fetch(`http://127.0.0.1:8000/users/?search=${userToFetch}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    const userData = data[0];
                    setUser({
                        username: userData.username,
                        followers: userData.followers.length,
                        following: userData.followings.length,
                    });
                } else {
                    console.error(`Error ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchWishes = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/wishes/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const userWishes = data.filter((wish: Wish) => wish.owner === (user ? user.username : ''));
                    setWishes(userWishes);
                }
            } catch (error) {
                console.error("Error fetching wishes:", error);
            }
        };

        fetchUserData();
        fetchWishes();
    }, [user?.username, username]);

    return (
        <div className="d-flex justify-content-center flex-column align-items-center" >
            {user && (
                <div className='mb-2' style={{width: '100%'}}>
                    <ProfileCard username={user.username} followers={user.followers} following={user.following} />
                </div>
            )}
            {wishes.map((wish) => (
                <WishCard 
                    key={wish.id}
                    title={wish.name}
                    description={wish.description}
                    link={wish.link}
                />
            ))}
        </div>
    );
};

export default ProfilePage;
