import Post from "./Post";


const YourPosts = ({ posts }) => {
    

    return (
      <>
        <h3>Your Posts</h3>
        {
        posts.map((post) => (
          <Post key={post._id} post={post} />
        ))
        }
      </>
    )
}

export default YourPosts;