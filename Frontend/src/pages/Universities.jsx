import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Universities = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get('/api/universities').then(res => setUniversities(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Universities</h2>
      <ul className="space-y-2">
        {universities.map(u => (
          <li key={u._id} className="bg-white p-4 shadow rounded">{u.name} ({u.country})</li>
        ))}
      </ul>
    </div>
  );
};

export default Universities;
