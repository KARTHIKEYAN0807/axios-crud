// src/UserList.js
import React, { useState } from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const startEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleUpdate = () => {
    if (name && email) {
      onEdit(editingId, { id: editingId, name, email });
      setEditingId(null);
    }
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          {editingId === user.id ? (
            <>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button onClick={handleUpdate}>Update</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button onClick={() => startEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
