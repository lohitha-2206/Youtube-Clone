import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId, theme}) => {
    const [apiData,setApiData]=React.useState({});
    const [channelData,setChannelData]=React.useState({});
    const [commentData,setCommentData]=React.useState([]);
    const [showComments, setShowComments] = React.useState(true);

    const fetchVideoData = async () =>{
        //Fetching Videos Data
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }

    const fetchOtherData = async () =>{
        //Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

        //Fetching Comments Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }

    React.useEffect(()=>{
        fetchVideoData();
    },[videoId])

    React.useEffect(()=>{
        fetchOtherData();
    },[apiData])

    return (
        <div className={`play-video ${theme}`}>
            {/*<video src={video1} controls autoPlay muted></video>*/}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?.snippet?.title || "Title Here"}</h3>
            <div className="play-video-info">
                <p>{value_converter(apiData?.statistics?.viewCount || "16k")} views &bull; {moment(apiData?.snippet?.publishedAt || "").fromNow()}</p>
                <div>
                    <span><img src={like} alt="" /> {value_converter(apiData?.statistics?.likeCount) || "155"}</span> 
                    <span><img src={dislike} alt="" /> </span> 
                    <span><img src={share} alt="" /> Share</span> 
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?.snippet?.thumbnails?.default?.url || ""} alt="" />
                <div>
                    <p>{apiData?.snippet?.channelTitle || ""}</p>
                    <span>{value_converter(channelData?.statistics?.subscriberCount) || "1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData?.snippet?.description.slice(0,250) || "Description Here"}</p>
                <hr />
                <h4 className="comments-heading">{value_converter(apiData?.statistics?.commentCount) || "102"} Comments
                    <button className="toggle-comments-btn" onClick={() => setShowComments(prev => !prev)}>
                        <svg className={`arrow-icon ${showComments ? '' : 'rotated'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                </h4>
                {showComments && commentData.map((item,index)=>{

                    return(
                       <div key={index} className="comment">
                             <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || user_profile} alt="" />
                             <div>
                        <h3>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName || "Unknown User"} <span>{moment(item?.snippet?.topLevelComment?.snippet?.updatedAt).fromNow()}</span></h3>
                        <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay || "Comment Here"}</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>{value_converter(item?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
                            <img src={dislike} alt="" /> 
                        </div>
                    </div>
                </div> 
                    )
                })}
                
            </div>
        </div>
    )
}

export default PlayVideo