import { useState } from "react";

export const CreatePostForm = ({ token }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [deliver, setDeliver] = useState(false);

    return (
        <div>
        {
            token &&
            <>
            <h5>Create New Post</h5>
                <form className="d-flex flex-column align-items-start m-3">
                    <label htmlFor="">Title:</label>
                    <input type="text" />
                    <label htmlFor="">Price:</label>
                    <input type="text" />
                    <label htmlFor="">Description:</label>
                    <input type="text" />
                    <label htmlFor="">Location:</label>
                    <input type="text" />
                    <div>
                    <label htmlFor="">Will Deliver:</label>
                    <input type="checkbox" />
                    </div>
                    <button type='submit'>Post</button>
                </form>
            </>
    }
    </div>
    )
}