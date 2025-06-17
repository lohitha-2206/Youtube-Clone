import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar, theme, setTheme}) => {
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
      };

    return (
        <nav className={`flex-div ${theme}`}>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
                <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                    <svg height="32" width="36" viewBox="0 0 36 32" >
                        <g>
                            <rect x="0" y="4" width="36" height="24" rx="6" fill="#FF0000"/>
                            <polygon points="14,10 26,16 14,22" fill="#fff"/>
                        </g>
                    </svg>
                    <span style={{ fontWeight: 'bold', fontSize: '1.6rem', color: theme === 'dark' ? '#fff' : '#111' }}>
                        ViewTube
                    </span>
                </Link>
            </div>

            <div className='nav-middle flex-div'>
                <div className="search-box flex-div">
                    <input type="text" placeholder='search' />
                    <img src={search_icon} alt=""/> 
                </div>
            </div>

            <div className='nav-right flex-div'>
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <button
                    className={`theme-toggle-btn ${theme}`}
                    onClick={toggleTheme}
                    aria-label="Toggle light/dark mode"
                >
                    {theme === 'light' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    )}
                </button>
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar
