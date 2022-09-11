import { useState } from "react";

const EditPost = ({ post, setEditPostActive }) => {
    const [title, setTitle] = useState(`${post.title}`);
    const [price, setPrice] = useState(`${post.price}`);
    const [description, setDescription] = useState(`${post.description}`);
    const [location, setLocation] = useState(`${post.location}`);
    const [willDeliver, setWillDeliver] = useState(false);

    return (
        <>
            <form action="submit">
        <div className="card m-3">
            <input 
            type="text" 
            className="card-header" 
            placeholder={post.title}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <div className="card-body">
                <label htmlFor="price">Price:</label>
                <input 
                type="text"
                name="price"
                className="card-header form-control" 
                placeholder={post.price}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                />
                <label htmlFor="description">Description:</label>
                <textarea 
                type="text"
                name="description"
                className="card-text form-control" 
                placeholder={post.description}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
                <label htmlFor="location">Location:</label>
                <input 
                type="text" 
                name="location"
                className="card-text form-control" 
                placeholder={post.location}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                />
                <label htmlFor="delivery-option">Check the box if you are willing to deliver:</label>
                <input 
                type="checkbox" 
                name="delivery-option"
                onChange={(event) => {
                    if (event.target.checked) {
                        setWillDeliver(true);
                    } else {
                        setWillDeliver(false);
                    }
                }}
                />
                <button type="submit">Submit Changes</button>
                <button onClick={() => setEditPostActive(false)}>Cancel</button>
            </div>
        </div>
        </form>
        </>
    )
}

export default EditPost;