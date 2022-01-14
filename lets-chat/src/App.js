import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

/* App is a constant component */
const projectID = '91376680-c792-4b4d-bbdc-5370004bc8a8';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
			userName='javascript'
			userSecret='food1'
            projectID= {projectID}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    );
}

export default App;