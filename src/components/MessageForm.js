import { useState } from "react"
import { createMessage } from "../api";

const MessageForm = ({ post, token, setMessageStatus }) => {

    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        try {
        event.preventDefault();
        const { message } = await createMessage(post, token, content);
        setContent('');
        setMessageStatus(false);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="content">Type your message here:</label>
        <textarea name="content" value={content} onChange={(event) => setContent(event.target.value)}/>
        <button type='submit'>Submit Message</button>
        <button onClick={() => setMessageStatus(false)}>Cancel</button>
        </form>
    )
}

export default MessageForm;