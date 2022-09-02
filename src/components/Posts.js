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
                    <div>
                        <h5>{element.title}</h5>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Posts;