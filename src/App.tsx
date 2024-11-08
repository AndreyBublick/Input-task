import './App.css';
import styled from 'styled-components';
import {ChangeEvent, useState} from "react";
import {FullInput} from "./components/fullInput/FullInput";


function App() {
    const [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const addMessage = (message:string) => {
        setMessages(prev=>[{message: message},...prev]);
    };

    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <FullInput onClick={addMessage} />
            <ul>
                {messages.map(message => <li>{message.message}</li>)}
            </ul>

        </div>
    );
}


export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;