import { useEffect, useState, useContext } from "react";
import {AuthContext } from "../AuthContext";
import "./Home.css";

function Home(){

    const {user} = useContext(AuthContext);

    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    
    const fetchPosts = async () => {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        setPosts(data.reverse());
    };

    const handlePost = async () =>{
        if(!content) return;

        const newPost = {
            userId : user.id,
            name : user.firstName,
            content: content,
            createdAt: new Date().toISOString(),
        };

        await fetch("http://localhost:3000/posts",{
            method: "POST",
            header:{
                "Content-Type": "application.json",
            },
            body: JSON.stringify(newPost),
        });

        setContent("");
        fetchPosts();
    };

    return(
        <div className="home">

            <h2 className="home-cursive">Welcome, {user.firstName}</h2>

            <div className="create-post">
                
                <input className="post-input"
                    placeholder="Tung Tung Sahor sahor?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className="post-button" onClick={handlePost}>Post</button>
            </div>

            <div className="feed">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                    <h4 className="">{post.name}</h4>
                    <p>{post.content}</p>
            </div>
            ))}
            </div>
        </div>
    );

}

export default Home;