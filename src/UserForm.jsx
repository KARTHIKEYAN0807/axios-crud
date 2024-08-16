// src/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAdd({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
