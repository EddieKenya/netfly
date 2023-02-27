import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../component/Navbar";
import Post from "./Post";


const HomePage = () => {
    const [posts, setPost] = useState(null);
    useEffect(()=>{
        fetch('https://web-production-f5d6.up.railway.app/api/list/')
          .then(res =>{
             return res.json()
          })
          .then(data=>{
            setPost(data)
          });
      },[])
    return ( 
        <div className="documents">
            <Navbar/>
            {posts && <Post  posts={posts}/>}
        </div>
     );
}
 
export default HomePage;