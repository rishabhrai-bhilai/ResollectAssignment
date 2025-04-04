// src/components/MainContent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <main className="ml-64 pt-20 pb-20 px-6">
      <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default MainContent;