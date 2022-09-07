const baseURL = "https://strangers-things.herokuapp.com/api";
const cohort = "2206-FTB-PT-WEB-PT";

export const fetchPosts = async () => {
    try {
    const result = await fetch(`${baseURL}/${cohort}/posts`);
    const { data } = await result.json();
    const { posts } = data;
    return posts;
    } catch(err) {
        console.error(err)
    }
}

export const fetchAccount = async (action, username, password) => {
  try {
  const result = await fetch(`${baseURL}/${cohort}/users/${action === "signup" ? 'register' : 'login'}`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    },
  }),
}) 

const { data } = await result.json();
return data;

} catch(err) {
    console.error(err);
}

};

export const fetchGuest = async () => {
    
}