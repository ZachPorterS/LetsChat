/* Accepts one prompt, which is the message itself */
const MyMessage = ({message}) => {
    /* Check if the message sent was an image return */
    if (message?.attachments?.length > 0) {
        return (
            <img
                scr={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float: 'right'}}
            />
        );
    }
    /* Message is plain text */
    return (
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50'}}>
            {message.text}
        </div>
    );
}

export default MyMessage;