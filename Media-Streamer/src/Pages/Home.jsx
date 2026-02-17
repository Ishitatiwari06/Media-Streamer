import { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard.jsx";
import ShimmerCard from "../components/ShimmerCard.jsx";
function Home(){
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_API_KEY}`);

                const data=await response.json();
                console.log("Data",data);
                
                const formattedVideos = data.items.map((video) => ({
                    id: video.id,
                    title: video.snippet.title,
                    thumbnail: video.snippet.thumbnails.high.url,
                }));
                setVideos(formattedVideos);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        }
        fetchVideos();
    }, []);
    return(
    <div>
       <h1>Trending Videos</h1>
       <div>
        {
            loading ? (
                Array(12).fill(0).map((_, index) => (
                    <ShimmerCard key={index} />
                ))
            ) : (
                videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))
            )
        }
       </div>
    </div>
        )
}
export default Home;