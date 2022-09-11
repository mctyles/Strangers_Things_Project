import { Link } from 'react-router-dom'

const ReceivedMessages = ({ user, messages }) => {

    const receivedMessages = messages.filter((message) => message.fromUser.username !== user.username);

    return (
        <>
            <h2>Received Messages</h2>
            {
            receivedMessages.map ((message) => {
                return (
                    <div className="card m-3">
                    <h5 className="card-header">{`Message sent by ${message.fromUser.username}`}</h5>
                    <div className="card-body">
                        <Link className="card-text" to={`/posts/${message.post._id}`}>View Post</Link>
                        <p className="card-text">{message.content}</p>
                    </div>
                </div>
                )
                })
            }
        </>
    )
}

export default ReceivedMessages;