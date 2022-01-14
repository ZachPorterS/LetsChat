/* React no longer needs to be imported from version 17 or higher */
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    /* Set chat to (if chats exist, find chats and then active chats) */
    const chat = chats && chats[activeChat];
    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
            key={'read_${index}'}
            className="read-receipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: {backgroundImage: 'url(${person?.person?.avatar})'}
            }}/>
        ))
    }
    /* Fetch all messages */
    const renderMessages = () => {
        const keys = Object.keys(messages);
        /* renders the messages */
        return keys.map((key, index) => {
            const message = messages[key];
            /* Check if this is the last message sent */
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            /* Check if this is the user's message */
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={'msg_${index}'} style={{width : '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '16px'}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        });
    }
    /* display load the chat if not yet created */
    if(!chat) return 'ロード中...';
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ' ${person.person.userName}')}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {... props} chatId={activeChat}/>
            </div>
        </div>
    );
}

export default ChatFeed;