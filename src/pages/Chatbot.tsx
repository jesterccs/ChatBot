import React, {useState, useEffect, useRef} from "react";
import "../styles/ChatBot.css";
import {Test} from "../api";


interface Message {
    id: number;
    content: string;
    sender: "user" | "chatbot";
}

interface Option {
    label: string;
    value: string;
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<Message>()
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const [useCaseIsOpen, setUseCaseIsOpen] = useState(false);
    const [useCaseSelectedOption, setUseCaseSelectedOption] = useState<Option | null>(null);
    const [languageIsOpen, setLanguageIsOpen] = useState(false)
    const [languageSelectedOption, setLanguageSelectedOption] = useState('English')


    // const useCaseOptions = ['Option 1', 'Option 2', 'Email Drafting'];
    const useCaseOptions: Option[] = [
        {label: 'option1', value: 'Option 1'},
        {label: 'option1', value: 'Option 2'},
        {label: 'emailDrafting', value: 'Email Drafting'},
    ];
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
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputValue("");
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
        setUseCaseIsOpen((prevState) => !prevState);
    };

    const handleOptionClickUseCase = (option: any) => {
        setUseCaseSelectedOption(option);
        setUseCaseIsOpen(false);
    };

    const languageToggleMenu = () => {
        setLanguageIsOpen((prevState) => !prevState);
    };

    const handleOptionsClickLanguage = (language: any) => {
        setLanguageSelectedOption(language)
        setLanguageIsOpen(false)
    }

    // const handleOnClick = async () => {
    //     console.log(languageSelectedOption)
    //     console.log(">>>>>>>>>>>>>>>>>> : " + useCaseSelectedOption?.value)
    //     const obj = {
    //         sender: newMessage.sender,
    //         message: newMessage.content,
    //         language: languageSelectedOption,
    //         button: useCaseSelectedOption?.value
    //     }
    //     await Test(obj)
    //
    // }


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
                                {useCaseSelectedOption ? useCaseSelectedOption.value : useCaseOptions[0].value}
                            </button>
                            {useCaseIsOpen && (
                                <ul className="useCase-dropdown-menu">
                                    {useCaseOptions.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClickUseCase(option)}>
                                            {option.value}
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
                        {messages.map((message) => {
                            console.log(`Rendering message with id: ${message.id} ... ${message.content}`);
                            return (
                                <>
                                    <div key={message.id} className={`message ${message.sender}`}>
                                        {message.content}
                                    </div>
                                    <div>response</div>
                                </>
                            )
                        })}
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
