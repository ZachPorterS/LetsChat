import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "91376680-c792-4b4d-bbdc-5370004bc8a8", 'User-Name': username, 'User-Secret': password};
        try {
            axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {

        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Let's Chat</h1>
                <h1 className="title">レッツチャット</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="ユーザーお名前"/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="パスワード"/>
                        <div align="center">
                            <button type="submit" className="button">
                                <span>開始チャット</span>
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default LoginForm;