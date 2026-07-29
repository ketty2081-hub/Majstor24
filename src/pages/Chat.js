import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import "../styles/Chat.css"

function Chat() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "Majstor",
            text: "Pozdrav! Kako vam mogu pomoći?"
        }
    ]);

    const [newMessage, setNewMessage] = useState("");

    function sendMessage() {

        if (newMessage.trim() === "") return;

        const message = {
            id: Date.now(),
            sender: "Vi",
            text: newMessage
        };

        setMessages([...messages, message]);

        setNewMessage("");
    }

    return (

        <div className="chat-page">

            <h1>Razgovor s majstorom</h1>

            <div className="chat-box">

                {messages.map((message) => (

                    <ChatMessage
                        key={message.id}
                        message={message}
                    />

                ))}

            </div>

            <div className="chat-input">

                <input
                    type="text"
                    placeholder="Upišite poruku..."
                    value={newMessage}
                    onChange={(e) =>
                        setNewMessage(e.target.value)
                    }
                />

                <button onClick={sendMessage}>

                    Pošalji

                </button>

            </div>

        </div>

    );

}

export default Chat;