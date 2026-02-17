import { useNavigate } from "react-router-dom";
function VideoCard({ video }) {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/watch/${video.id}`)} className="video-card">
            <div className="video-info">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <h3 className="video-title">{video.title}</h3>
            </div>
        </div>
    );
}
export default VideoCard;