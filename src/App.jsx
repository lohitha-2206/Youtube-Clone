import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  React.useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <Navbar setSidebar={setSidebar} theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} theme={theme} setTheme={setTheme} />} /> 
        <Route path='/video/:categoryId/:videoId' element={<Video theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  );
}

export default App