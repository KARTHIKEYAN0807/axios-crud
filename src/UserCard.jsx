// src/components/UserCard.js
import React from 'react';
import api from './api';

const UserCard = ({ user, onDelete }) => {
  const handleDelete = () => {
    api.delete(`/${user.id}`)
      .then(() => onDelete(user.id))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
