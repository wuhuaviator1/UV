import { useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar/Navbar'
import FooterSection from '../components/FooterSection';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    bio: 'I am a student at NYU interested in technology and innovation.',
    interests: ['Technology', 'Innovation', 'Education'],
    joinDate: '2023-12-01'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  return (
    <div>
      <Navbar />
      <div className="profile-page">
        <div className="profile-container">
          <h1>Profile</h1>
          <div className="profile-content">
            {isEditing ? (
              <div className="edit-form">
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    value={editedProfile.username}
                    onChange={(e) => setEditedProfile({
                      ...editedProfile,
                      username: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({
                      ...editedProfile,
                      email: e.target.value
                    })}
                  />
                </div>
                <div className="form-group">
                  <label>Bio:</label>
                  <textarea
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile({
                      ...editedProfile,
                      bio: e.target.value
                    })}
                  />
                </div>
                <div className="button-group">
                  <button onClick={handleSave} className="save-button">
                    Save Changes
                  </button>
                  <button onClick={handleCancel} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-info">
                <div className="info-group">
                  <label>Username:</label>
                  <p>{profile.username}</p>
                </div>
                <div className="info-group">
                  <label>Email:</label>
                  <p>{profile.email}</p>
                </div>
                <div className="info-group">
                  <label>Bio:</label>
                  <p>{profile.bio}</p>
                </div>
                <div className="info-group">
                  <label>Interests:</label>
                  <div className="interests-list">
                    {profile.interests.map((interest, index) => (
                      <span key={index} className="interest-tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="info-group">
                  <label>Member Since:</label>
                  <p>{profile.joinDate}</p>
                </div>
                <button onClick={handleEdit} className="edit-button">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterSection />
      <style jsx>{`
        .profile-page {
          min-height: calc(100vh - 200px);
          background-color: #f5f5f5;
          padding: 2rem;
        }
        .profile-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .profile-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .info-group, .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #333;
        }
        p {
          margin: 0;
          color: #666;
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        textarea {
          min-height: 100px;
          resize: vertical;
        }
        .interests-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .interest-tag {
          background: #e1e1e1;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.9rem;
          color: #333;
        }
        button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .edit-button {
          background-color: #0070f3;
          color: white;
          width: 100%;
          margin-top: 1rem;
        }
        .save-button {
          background-color: #0070f3;
          color: white;
          margin-right: 1rem;
        }
        .cancel-button {
          background-color: #e1e1e1;
          color: #333;
        }
        .button-group {
          display: flex;
          justify-content: flex-start;
          margin-top: 1rem;
        }
        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
} 