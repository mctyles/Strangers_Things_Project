import { useEffect } from "react";
import { fetchPosts } from "../api";

const Posts = ({ posts, setPosts }) => {

    const getPosts = async () => {
        const returnPosts = await fetchPosts();
        setPosts(returnPosts);
        console.log(returnPosts)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {
                posts.map(element => (
                    <div class="card">
                        <h5 class="card-header">{element.title}</h5>
                        <div class="card-body">
                            <h5 class="card-title">{element.price}</h5>
                            <p class="card-text">{element.description}</p>
                            <a href="#" class="btn btn-primary">Message</a>
                            <a href="#" class="btn btn-primary">Edit</a>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Posts;