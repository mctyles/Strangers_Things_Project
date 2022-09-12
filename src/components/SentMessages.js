import { Link } from 'react-router-dom'

const SentMessages = ({ user, messages }) => {

    const sentMessages = messages.filter((message) => message.fromUser.username === user.username);

    return (
        <>
            <h3>Sent Messages</h3>
            {
            sentMessages.map ((message) => {
                return (
                    <div className="card m-3" key={message._id}>
                        <h5 className="card-header">Message from you</h5>
                        <div className="card-body">
                            <Link className="d-block card-text mb-3" to={`/posts/${message.post._id}`}>View Original Post</Link>
                            <p className="card-text">{message.content}</p>
                    </div>
                </div>
                )
            })
            }
        </>
    )
}

export default SentMessages;