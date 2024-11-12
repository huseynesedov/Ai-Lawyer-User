import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../../Assets/Images/js/images';
import { ChatApi } from '../../../api/chat.api';
import { jwtDecode } from 'jwt-decode';

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [showContactButton, setShowContactButton] = useState(false);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [isScrollOpen, setIsScrollOpen] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const [selectedChatId, setSelectedChatId] = useState(null);

    const fetchChats = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;
                setUsername(decodedToken.UserName || ""); 

                const response = await ChatApi.getChats(userId);
                setChatHistory(Array.isArray(response) ? response : []);
            }
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    const handleSendMessage = async () => {
        if (message.trim()) {
            try {
                setIsInputDisabled(true);
                const newMessage = { sender: 'user', text: message, loading: false };
                setMessages(prevMessages => [...prevMessages, newMessage]);
                setMessage("");

                const loadingMessage = { sender: 'bot', text: '', loading: true };
                setMessages(prevMessages => [...prevMessages, loadingMessage]);

                setTimeout(async () => {
                    if (selectedChatId !== null) {
                        const params = { message, chatId: selectedChatId };
                        const response = await ChatApi.sendMessage(params);

                        const botResponse = { sender: 'bot', text: response.botResponse, loading: false };
                        setMessages(prevMessages => {
                            const updatedMessages = [...prevMessages];
                            updatedMessages[updatedMessages.length - 1] = botResponse;
                            return updatedMessages;
                        });

                        if (response.botResponse.includes("some condition")) {
                            setShowContactButton(true);
                        }
                    }
                    setIsInputDisabled(false);
                }, 1000);
            } catch (error) {
                console.error("Message sending error:", error.response?.data || error.message);
                setIsInputDisabled(false);
            }
        }
    };

    const handleChatClick = async (chatId) => {
        setSelectedChatId(chatId);
        try {
            const response = await ChatApi.getMessages(chatId);
            const formattedMessages = response.map((msg) => ({
                sender: msg.sender === 'user' ? 'user' : 'bot',
                text: msg.sender === 'user' ? msg.contentUser : msg.contentBot,
                loading: false,
            }));
            setMessages(formattedMessages);
        } catch (error) {
            console.error("Error fetching chat messages:", error);
        }
    };

    const toggleScroll = () => {
        setIsScrollOpen(prevState => !prevState);
        setIsArrowRotated(prevState => !prevState);
    };

    return (
        <div className="container">
            <div className="row d-flex mx-3 my-3">
                <div className="col-3" style={{ height: "671px" }}>
                    <div className="leftbar h-100 d-flex flex-column justify-content-between bg-turkuaz">
                        <div>
                            <div className='d-flex justify-content-between homburger'>
                                <span className='fw-400 fs-24 text-black'>E-legal</span>
                            </div>
                            <div className="d-flex bg-turkuaz flex-column justify-content-between">
                                <Link to={"/NewChat"}>
                                    <button className='Chat-button mt-3 d-flex align-items-center justify-content-between'>
                                        Yeni Chat
                                        <img src={images.plus} alt="" />
                                    </button>
                                </Link>
                                <div className='mt-4'>
                                    <button className='Chat-button mt-3 d-flex align-items-center justify-content-between' onClick={toggleScroll}>
                                        Keçmiş
                                        <img src={images.arrowdown} alt="" className={isArrowRotated ? 'rotated' : ''} />
                                    </button>
                                    <div className={`scrool mt-4 ${isScrollOpen ? 'open' : 'closed'}`}>
                                        {chatHistory.length > 0 ? (
                                            chatHistory.map((chat) => (
                                                <button
                                                    className="arxiv justify-content-between"
                                                    key={chat.id}
                                                    onClick={() => handleChatClick(chat.id)}
                                                >
                                                    <h5 className='fs-15'>{chat.title}</h5>
                                                    <img src={images.arrowdown} alt="" />
                                                </button>
                                            ))
                                        ) : (
                                            <p>No chat history available.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="userHello d-flex align-items-center">
                            <span>Xoş Gəlmisiniz , <span className='fs-20'>{username}</span></span>
                        </div>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="ChatRight w-100 d-flex flex-column mt-4 justify-content-end">
                        <div className="overflow">
                            {messages.map((msg, index) => (
                                <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                                    <div className={`box${msg.sender === 'user' ? 'Right' : 'Left'} mb-4 me-2`}>
                                        {msg.sender === 'user' ? (
                                            <span className='fs-25 fw-400'>{msg.text}</span>
                                        ) : (
                                            <>
                                                <span className='fs-20 fw-400'>
                                                    <img src={images.bot} alt="" />
                                                    {msg.text}
                                                </span>
                                            </>
                                        )}
                                        {msg.loading && (
                                            <div className="loading">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="input d-flex justify-content-between">
                            <input
                                type="text"
                                className='input-chat'
                                placeholder='Yeni mesaj yaz...'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                disabled={isInputDisabled}
                            />
                            <div style={{ cursor: "pointer" }} onClick={handleSendMessage}>
                                <img src={images.send} alt="Send" />
                            </div>
                        </div>

                        {showContactButton && (
                            <div className="contact-btn">
                                <p>Əgər sualınız çox mürəkkəbdirsə, hüquq məsləhətçisinə müraciət edin.</p>
                                <button onClick={() => window.location.href = '/contact'}>Kontakt səhifəsinə keç</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
