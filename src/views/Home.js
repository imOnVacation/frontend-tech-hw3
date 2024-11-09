import React, { useEffect } from 'react';

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h1>This is the Home page</h1>
      <h2>Welcome :)</h2>
    </div>
  );
};

export default Home;
