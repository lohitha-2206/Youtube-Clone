import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar, theme, setTheme }) => {
  const [category, setCategory] = React.useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} theme={theme} />
      <div className={`pages container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={category} theme={theme} />
      </div>
    </>
  );
};

export default Home;
