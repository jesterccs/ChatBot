import React, {useState, useEffect, useRef} from "react";
import "../styles/ChatBot.css";

interface Message {
    id: number;
    content: string;
    sender: "user" | "chatbot";
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // Scroll to the bottom of the chat window whenever new messages are added
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputHeight = () => {
        if (inputRef.current) {
            inputRef.current.style.height = "auto";
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const trimmedValue = inputValue.trim();

        if (trimmedValue !== "") {
            const newMessage: Message = {
                id: messages.length + 1,
                content: inputValue,
                sender: "user",
            };

            setMessages([...messages, newMessage]);
            setInputValue("");
            console.log(messages)
            if (inputRef.current) {
                inputRef.current.style.height = "auto";
            }
        }
    };


    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (inputValue.trim() !== "") {
                handleFormSubmit(event);
            }
        }
    };

    return (
        <div className="container">
            <div className="chatbot-container">
                {/*Features*/}
                <div className="feature-container"></div>

                {/*Message container*/}
                <div className="message-container">
                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <React.Fragment key={message.id}>
                                <div
                                    className={`message ${message.sender === "user" ? "user" : "chatbot"}`}
                                    style={{ whiteSpace: "pre-wrap" }}
                                >
                                    {message.content}
                                </div>
                                <div>response</div>
                            </React.Fragment>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>


                    <form className="chatbot-input" onSubmit={handleFormSubmit}>
                        <div className="input-container">
                          <textarea
                              ref={inputRef}
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              onInput={handleInputHeight}
                              placeholder="Type your message..."/>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
