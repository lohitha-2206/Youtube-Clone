import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = ({ theme, setTheme }) => {
    const {videoId,categoryId}=useParams();
    return (
        <div className={`play-container ${theme}`}>
            <PlayVideo videoId={videoId} theme={theme} />
            <Recommended categoryId={categoryId} theme={theme} />
        </div>
    )
}

export default Video