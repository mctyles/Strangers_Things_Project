import { useState } from "react"
import { createMessage } from "../api";

const MessageForm = ({ post, token, setMessageFormActive }) => {

    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const { message } = await createMessage(post, token, content);
            setContent('');
            setMessageFormActive(false);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <form 
        action="submit" 
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-start m-3"
        >
            <label htmlFor="content">Type your message here:</label>
            <textarea name="content" className="form-control mt-2" value={content} onChange={(event) => setContent(event.target.value)}/>
            <div className="mt-2">
                <button className="btn btn-outline-dark" type='submit'>Submit Message</button>
            </div>
        </form>
    )
}

export default MessageForm;