const baseUrl = "https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT";

export const callApi = async ({ method, path, token, body }) => {
    const options = {
      method: method ? method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    const result = await fetch(baseUrl + path, options);
    const data = await result.json();
    if (data.error) {
      throw data.error.message;
    }
    return data.data;
  };
  
export const fetchPosts = async () => {
    try {
    const data = callApi({path: '/posts'})
    const { posts } = await data;
    return posts;
    } catch(err) {
        console.error(err)
    }
}
/* export const fetchPosts = async () => {
    try {
    const result = await fetch(`${baseUrl}/posts`);
    const { data } = await result.json();
    const { posts } = data;
    return posts;
    } catch(err) {
        console.error(err)
    }
} */

export const fetchAccount = async (action, username, password) => {
    const path = (action === "signup" ? '/users/register' : '/users/login')
    console.log(path)
    try {
    const data = await callApi({method: 'POST', path: path, body: {
        user: {
          username,
          password,
        },
      }
    })
    console.log(data);
    return data;
    } catch(err) {
        console.error(err)
    }
}

/* export const fetchAccount = async (action, username, password) => {
  try {
  const result = await fetch(`${baseUrl}/users/${action === "signup" ? 'register' : 'login'}`, {
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

}; */

export const fetchUser = async (token) => {
    try {
        const result = await fetch(`${baseUrl}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        })
        const { data } = await result.json();
        console.log(data);
        return data;
} catch(err) {
    console.error(err)
}
}