import Post from "./Post";


const YourPosts = ({posts}) => {
    return (
    <>
    <h2>Your Posts</h2>
    {
    posts.map((post) => (
      <Post key={post._id} post={post} />
    ))
    }
    </>
    )
}

export default YourPosts;