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
  
export const fetchPosts = async (token) => {
    const data = callApi({path: '/posts', token})
    const { posts } = await data;
    return posts;
}

export const fetchAccount = async (action, username, password) => {
    const path = (action === "signup" ? '/users/register' : '/users/login')
    console.log(path)
    const data = await callApi({method: 'POST', path: path, body: {
        user: {
          username,
          password,
        },
      }
    })
    console.log(data);
    return data;
}

export const fetchUser = async (token) => {
    const data = await callApi({path: '/users/me', token});
    return data;
}

export const addPost = async (token, title, price, description, location, willDeliver) => {
    try {
        const data = await callApi({method: 'POST', path: '/posts', token, body: {
            post: {
              title,
              price,
              description,
              location,
              willDeliver
            },
          }
        });
        return data;
        } catch(err) {
            console.error(err)
        }
    }
    
export const apiDelete = async (post, token) => {
        const data = await callApi({method: 'DELETE', path: `/posts/${post._id}`, token 
        });
        return data;
    }
    
export const createMessage = async (post, token, content) => {
    const data = await callApi({
        method: 'POST', 
        path: `/posts/${post._id}/messages`, 
        token, 
        body: {
            message: {
                content,
            },
        },
        });
        return data;
    }