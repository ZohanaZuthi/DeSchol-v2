import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axios.get('/api/scholarships/filter?country=usa&type=Merit-based')
      .then(res => setScholarships(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Filtered Scholarships</h2>
      <ul className="space-y-2">
        {scholarships.map(s => (
          <li key={s._id} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p>{s.description}</p>
            <a href={s.link} className="text-blue-500 underline" target="_blank" rel="noreferrer">Apply</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scholarships;
