import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Watch from "./Pages/Watch.jsx";
import Upload from "./Pages/Upload.jsx";
import Profile from "./Pages/Profile.jsx";
import Search from "./Pages/Search.jsx";
import WatchHistory from "./Pages/WatchHistory.jsx";

function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch/:id" element={<Watch/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/watch-history" element={<WatchHistory/>}/>
      </Routes>
    </Layout>
  )
}
export default App;
