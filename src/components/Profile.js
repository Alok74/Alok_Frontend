// src/components/Profile.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = ({ profile, onDelete }) => {
  const navigate = useNavigate();


  const handleDelete = async () => {
    try {
     await axios.delete(`https://alok-backend.onrender.com/api/profiles/${profile._id}`);
      onDelete(profile._id);
      
      
    } catch (error) {
      console.error('Error deleting profile:', error);
      
    }
  };

  

  const handleViewProfile = () => {
    // Navigate to the ViewProfile component
    navigate(`/profile/${profile._id}`);
  };

  const handleDMStudent = () => {
    // Handle the direct message functionality here
  };

  // This component is for displaying each skill as a button-like tag
  const SkillTag = ({ skill }) => (
    <button type="button" className="btn btn-outline-info btn-sm mr-1 mb-1">
      {skill}
    </button>
  );

  return (
    <div className="card my-3" style={{ backgroundColor: '#e3f6f5',
    display: 'flex',
    width: '700px', // Set your desired width here
    height: '220px', // Set your desired height here
    overflow: 'hidden',marginLeft:'auto',marginRight:'auto'}}> {/* Light blue background */}
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img 
            src={profile.avatar || 'https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png'} 
            className="card-img" 
            alt={`${profile.name}`} 
            style={{ width: '100px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}  // Made the image round
          />
        </div>
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body">
            <h5 className="card-title">{profile.name}</h5>
            <p className="card-subtitle mb-2 text-muted">{profile.title}</p>
            <p className="card-text">{profile.bio}</p>
            <div className="mb-2" style={{ display: 'flex', gap: '8px',color:'green'}}>
              {profile.techStack.map((skill, index) => (
                <SkillTag key={index} skill={skill} style={{ backgroundColor: 'green', padding: '4px 8px', borderRadius: '4px' }}/>
              ))}
            </div>
          </div>
          <div className="card-footer mt-auto">
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={handleViewProfile} className="btn btn-outline-secondary btn-sm mx-2 ">View Profile</button>
              <button onClick={handleDMStudent} className="btn btn-outline-primary btn-sm mx-2">DM Student</button>
              <button onClick={handleDelete} className="btn btn-outline-danger btn-sm mx-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
