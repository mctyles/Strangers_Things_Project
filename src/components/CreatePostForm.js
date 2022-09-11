import { useState } from "react";
import { addPost } from "../api";


export const CreatePostForm = ({ token, setPosts }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

const handleSubmit = async (event) => {
    try {
        event.preventDefault()
        const { post } = await addPost(token, title, price, description, location, willDeliver);
        setPosts((prev) => [post, ...prev]);
        setTitle("");
        setPrice("");
        setLocation("");
        setDescription("");
    } catch(err) {
        console.error(err);
    }
}

    return (
        <div>
        {
            token &&
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
                    <textarea type="text" 
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
                    <div className="d-flex flex-column align-items-start">
                    <label htmlFor="delivery-option">Check this box if you are willing to deliver:</label>
                    <input type="checkbox" 
                        name="delivery-option"
                        id="delivery-checkbox"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setWillDeliver(true);
                            } else {
                                setWillDeliver(false);
                            }
                        }}
                    />
                    </div>
                    <button className="mt-2 btn btn-outline-dark" type='submit'>Post</button>
                </form>
    }
    </div>
    )
}