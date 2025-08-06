import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user, logout }) => {
  const navigate = useNavigate();

  if (!user) return <p className="text-center mt-20">Please login first.</p>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user.fullname}</h1>
        <button onClick={logout} className="btn">Logout</button>
      </div>
      <div>
        {user.role === 'Student' ? (
          <div className="space-y-4">
            <p>🎓 You are logged in as a <strong>Student</strong></p>
            <button onClick={() => navigate('/scholarships')} className="btn">View Scholarships</button>
          </div>
        ) : (
          <div className="space-y-4">
            <p>🏫 You are logged in as a <strong>Recruiter</strong></p>
            <button onClick={() => navigate('/universities')} className="btn">Manage Universities</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
