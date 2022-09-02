const baseURL = "https://strangers-things.herokuapp.com/api";
const cohort = "2206-FTB-PT-WEB-PT";

export const fetchPosts = async () => {
    const result = await fetch(`${baseURL}/${cohort}/posts`);
    const { data } = await result.json();
    const { posts } = data;
    return posts;
}