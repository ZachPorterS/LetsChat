const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0 
                ? (
                    /* Check if message sent is an image */
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                    /> /* else send text message */
                ) : (
                    <div className="message" style={{float: 'left', marginLeft: isFirstMessageByUser ? '4px' : '48px',backgroundColor: '#3eb489'}}>
                        {message.text}
                      </div>
                )
            }
        </div>
    );
}

export default TheirMessage;