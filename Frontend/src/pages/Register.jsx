import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ fullname: '', email: '', password: '', phoneNumber: '', role: 'Student' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/register', form);
      alert('Registered successfully');
      navigate('/login');
    } catch (err) {
      console.error('Registration Error:', err.response);
       alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {['fullname', 'email', 'password', 'phoneNumber'].map((field) => (
          <input key={field} name={field} placeholder={field} value={form[field]} onChange={handleChange} className="input" required />
        ))}
        <select name="role" value={form.role} onChange={handleChange} className="input">
          <option value="Student">Student</option>
          <option value="Recruiter">Recruiter</option>
        </select>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
