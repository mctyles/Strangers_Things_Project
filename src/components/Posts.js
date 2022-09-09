import { useState, useEffect } from "react";
import { fetchPosts } from "../api";

const Posts = ({ posts, setPosts }) => {

    const [searchValue, setSearchValue] = useState('');

    const getPosts = async () => {
        const returnPosts = await fetchPosts();
        setPosts(returnPosts);
        console.log(returnPosts)
    }

    const checkPostContent = (post) => {
        const fieldsToCheck = (post.title + post.description).toLowerCase();
        return fieldsToCheck.includes(searchValue.toLowerCase())
    }

    const filteredPosts = posts.filter((post) => {
        return checkPostContent(post);
    })

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className="m-3">
            <input type="text" 
            className="form-control" 
            placeholder="Search posts" 
            value = {searchValue}
            onChange={(e => setSearchValue(e.target.value))}
            />
            {
                filteredPosts.map(post => (
                    <div className="card m-3" key={post.id}>
                        <h5 className="card-header">{post.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Price: {post.price}</h5>
                            <p className="card-text">{post.description}</p>
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