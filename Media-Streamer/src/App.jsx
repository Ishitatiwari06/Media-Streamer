import Watch from "./Pages/Watch.jsx";
import Home from "./Pages/Home.jsx";
import Upload from "./Pages/Upload.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Profile from "./Pages/Profile.jsx";
import Search from "./Pages/Search.jsx";
function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch/:id" element={<Watch/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Layout>
  )
}
export default App;