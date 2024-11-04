import React from 'react';
import ProfileCard from './components/ProfileCard';
import WishCard from './components/WishCard';

const ProfilePage: React.FC = () => {
    return (
        <div className="d-flex justify-content-center flex-column" style={{ height: '100vh' }}>
            <div className='mb-2'>
                <ProfileCard username="username" followers="999K" following="999K" />
            </div>
            <WishCard title="Wish 1" description = "Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus sit potenti iaculis scelerisque nisl aliq..." />
        </div>
    );
};

export default ProfilePage;