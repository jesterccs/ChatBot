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

    const [useCaseIsOpen, setUseCaseIsOpen] = useState(false);
    const [useCaseSelectedOption, setUseCaseSelectedOption] = useState('');
    const [languageIsOpen, setLanguageIsOpen] = useState(false)
    const [languageSelectedOption, setLanguageSelectedOption] = useState('')


    const useCaseOptions = ['Option 1', 'Option 2', 'Option 3'];
    const languageOptions = ['English', 'Sinhala', 'Tamil']


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
            console.log(newMessage)
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


    const useCaseToggleMenu = () => {
        setUseCaseIsOpen(!useCaseIsOpen);
    };

    const handleOptionClickUseCase = (option: any) => {
        setUseCaseSelectedOption(option);
        setUseCaseIsOpen(false);
    };

    const languageToggleMenu = () => {
        setLanguageIsOpen(!languageIsOpen)
    }

    const handleOptionsClickLanguage = (language: any) => {
        setLanguageSelectedOption(language)
        setLanguageIsOpen(false)
    }

    return (
        <div className="container">
            <div className="chatbot-container">

                {/*Features*/}
                <div className="feature-container">

                    {/*Language selection*/}
                    <div className="language-dropdown-container">
                        <label className="language-dropdown-label">Select a Language</label>
                        <div className="language-dropdown">
                            <button className="language-dropdown-toggle" onClick={languageToggleMenu}>
                                {languageSelectedOption ? languageSelectedOption : languageOptions[0]}
                            </button>
                            {languageIsOpen && (
                                <ul className="language-dropdown-menu">
                                    {languageOptions.map((language, index) => (
                                        <li key={index} onClick={() => handleOptionsClickLanguage(language)}>
                                            {language}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/*Use case selection*/}
                    <div className="useCase-dropdown-container">
                        <label className="useCase-dropdown-label">Select a Use Case</label>
                        <div className="useCase-dropdown">
                            <button className="useCase-dropdown-toggle" onClick={useCaseToggleMenu}>
                                {useCaseSelectedOption ? useCaseSelectedOption : useCaseOptions[0]}
                            </button>
                            {useCaseIsOpen && (
                                <ul className="useCase-dropdown-menu">
                                    {useCaseOptions.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClickUseCase(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>


                </div>

                {/*Message container*/}
                <div className="message-container">
                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <React.Fragment key={message.id}>
                                <div
                                    className={`message ${message.sender === "user" ? "user" : "chatbot"}`}
                                    style={{whiteSpace: "pre-wrap"}}
                                >
                                    {message.content}
                                </div>
                                <div>response</div>
                            </React.Fragment>
                        ))}
                        <div ref={messagesEndRef}/>
                    </div>

                    {/*Input field*/}
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
