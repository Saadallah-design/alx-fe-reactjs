// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  const { 
    avatar_url, 
    name, 
    login, // GitHub username, always present
    html_url,
    bio,
    followers,
    following
  } = user;

  // Ensure the component only renders if a 'user' object is passed
  if (!user) {
    return null;
  }

  return (
    <div className="user-profile-card">
      <div className="profile-header">
        {/* Avatar */}
        <img 
          src={avatar_url} 
          alt={`${login}'s avatar`} 
          className="user-avatar" 
        />
        <div className="profile-info">
          {/* Name (can be null, so use login as fallback) */}
          <h3>{name || login}</h3>
          {/* GitHub Username / Login */}
          <p className="user-login">@{login}</p>
        </div>
      </div>

      {/* Bio (optional) */}
      {bio && <p className="user-bio">{bio}</p>}

      <div className="profile-stats">
        <p><strong>Followers:</strong> {followers}</p>
        <p><strong>Following:</strong> {following}</p>
      </div>

      {/* Profile Link */}
      <a 
        href={html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="profile-link"
      >
        View GitHub Profile 🔗
      </a>
    </div>
  );
};

export default UserProfile;