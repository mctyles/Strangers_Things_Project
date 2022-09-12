import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { CreatePostForm } from "./CreatePostForm";
import Post from "./Post";

const Posts = ({ posts, setPosts, token }) => {

    const [searchValue, setSearchValue] = useState('');
    const [createPostActive, setCreatePostActive] = useState(false)

    const getPosts = async () => {
        try {
        const returnPosts = await fetchPosts(token);
        setPosts(returnPosts);
        } catch(err) {
            console.error(err);
        }
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
        <div className="m-5">
            <h1>Posts</h1>
            {
            token &&
            <button className="btn btn-outline-primary mb-3"
                onClick={() => {setCreatePostActive(!createPostActive)}}>
                {!createPostActive ? 'Create New Post' : 'Hide New Post Form'}
                </button>
            }
            {createPostActive &&
            <CreatePostForm token={token} setPosts={setPosts}/>
            }
            <input type="text" 
            className="form-control" 
            placeholder="Search posts" 
            value = {searchValue}
            onChange={(event => setSearchValue(event.target.value))}
            />
            {
                filteredPosts.map(post => 
                    <Post key={post._id} post={post} setPosts={setPosts} token={token} />
                )
            }
        </div>
    )
}

export default Posts;