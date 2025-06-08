import { useState, useEffect } from 'react';
const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/v1/users');
      const json = await response.json();

      if (response.ok) {
        setUser(json);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="home">
      <h2>{JSON.stringify(user)}</h2>
    </div>
  );
};

export default Home;
