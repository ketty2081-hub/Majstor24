function ChatMessage({ message }) {

    return (

        <div
            className={
                message.sender === "Vi"
                    ? "message user"
                    : "message worker"
            }
        >

            <strong>{message.sender}</strong>

            <p>{message.text}</p>

        </div>

    );

}

export default ChatMessage;