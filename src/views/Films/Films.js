import React, { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {films.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
      <h1>Films</h1>
    </div>
  );
}
