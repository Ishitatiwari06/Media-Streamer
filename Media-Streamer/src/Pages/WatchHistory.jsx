import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function WatchHistory() {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('watchHistory') || []);
        setHistory(stored);
    }, []);
    console.log("history",history);

    function clearHistory() {
        localStorage.removeItem('watchHistory');
        setHistory([]);
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Watch History</h2>
                {history.length > 0 && (
                    <button
                        className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        onClick={clearHistory}
                    >
                        Clear History
                    </button>
                )}
            </div>
            {history.length === 0 ? (
                <div className="text-gray-500">No watch history found.</div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {history.map((video, idx) => (
                        <div
                            key={video.id || idx}
                            className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                            onClick={() => navigate(`/watch/${video.id}`)}
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-3">
                                <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{video.channelTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WatchHistory;
    