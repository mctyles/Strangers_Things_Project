import { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { CreatePostForm } from "./CreatePostForm";

const Posts = ({ posts, setPosts, token }) => {

    const [searchValue, setSearchValue] = useState('');

    const getPosts = async () => {
        const returnPosts = await fetchPosts();
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
            <CreatePostForm token ={token}/>
            <input type="text" 
            className="form-control" 
            placeholder="Search posts" 
            value = {searchValue}
            onChange={(event => setSearchValue(event.target.value))}
            />
            {
                filteredPosts.map(post => (
                    <div className="card m-3" key={post._id}>
                        <h5 className="card-header">{post.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Price: {post.price}</h5>
                            <p className="card-text">Description: {post.description}</p>
                            <p className="card-text">Location: {post.location}</p>
                            <p className="card-text">Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
                            <a href="#" className="btn btn-primary">Message</a>
                            <a href="#" className="btn btn-primary">Edit</a>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Posts;