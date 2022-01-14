/* This file contains all logic to write and send a message */
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    /* gets the current state
     * sets the state to the value 
     * init value is empty string */
    const [value, setValue] = useState('');
    const { chatId, creds} = props;

    /* event handler for text submittions */
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, {text})
        setValue(' ');
    }
    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }
    /* For user image uploads */
    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }

    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="入力メッセージ..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    );
}

export default MessageForm;