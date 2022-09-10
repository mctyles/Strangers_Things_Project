import { useState } from "react";
import { addPost } from "../api";


export const CreatePostForm = ({ token, setPosts }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (event) => {
    event.preventDefault()
    const { post } = await addPost(token, title, price, description, location, willDeliver);
    setPosts((prev) => [post, ...prev]);
    setTitle("");
    setPrice("");
    setLocation("");
    setDescription("");
    }

    return (
        <div>
        {
            token &&
            <>
            <h5>Create New Post</h5>
                <form 
                className="d-flex flex-column align-items-start m-3"
                onSubmit={handleSubmit}
                >
                    <label htmlFor="title">Title:</label>
                    <input type="text" 
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <label htmlFor="price">Price:</label>
                    <input type="text" 
                        name="price"
                        className="form-control"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <label htmlFor="description">Description:</label>
                    <input type="text" 
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <label htmlFor="location">Location:</label>
                    <input 
                        type="text"
                        name="location"
                        className="form-control"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)} 
                        />
                    <div>
                    <label htmlFor="delivery-option">Will Deliver:</label>
                    <input type="checkbox" 
                        name="delivery-option"
                        className="form-control"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setWillDeliver(true);
                            } else {
                                setWillDeliver(false);
                            }
                        }}
                    />
                    </div>
                    <button type='submit'>Post</button>
                </form>
            </>
    }
    </div>
    )
}