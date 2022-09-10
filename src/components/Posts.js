import { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { CreatePostForm } from "./CreatePostForm";
import Post from "./Post";

const Posts = ({ posts, setPosts, token }) => {

    const [searchValue, setSearchValue] = useState('');

    const getPosts = async () => {
        const returnPosts = await fetchPosts(token);
        setPosts(returnPosts);
        console.log(returnPosts)
    }

    useEffect(() => {
        getPosts();
    }, [])

    const checkPostContent = (post) => {
        const fieldsToCheck = (post.title + post.description).toLowerCase();
        return fieldsToCheck.includes(searchValue.toLowerCase())
    }

    const filteredPosts = posts.filter((post) => {
        return checkPostContent(post);
    })

    return (
        <div className="m-3">
            <h1>Posts</h1>
            <CreatePostForm token ={token} setPosts={setPosts}/>
            <input type="text" 
            className="form-control" 
            placeholder="Search posts" 
            value = {searchValue}
            onChange={(event => setSearchValue(event.target.value))}
            />
            {
                filteredPosts.map(post => 
                    <Post key={post.id} post={post} setPosts={setPosts} token = {token} />
                )
            }
        </div>
    )
}

export default Posts;