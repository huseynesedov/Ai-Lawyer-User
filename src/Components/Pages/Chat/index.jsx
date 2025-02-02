import React, { useState, useEffect } from 'react';
import { Spin } from 'antd'; // Ant Design Spin Component
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
    const [currentChatId, setCurrentChatId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchChats = async () => {
        try {
            let token = localStorage.getItem('token') || localStorage.getItem('google-token');
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

                const params = {
                    message,
                    chatId: currentChatId, // Varsayılan 0 və ya seçilmiş dəyər
                };

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
                setIsInputDisabled(false);
            } catch (error) {
                console.error("Message sending error:", error.response?.data || error.message);
                setIsInputDisabled(false);
            }
        }
    };

    const handleNewChat = () => {
        setCurrentChatId(1); // Yeni mesaj üçün chatId 1
        setMessages([]); // Mesajları sıfırla
    };

    const handleChatClick = async (chatId) => {
        setCurrentChatId(chatId); // Arxiv seçildikdə chatId yenilənir
        setIsLoading(true); // Start loading
        try {
            const response = await ChatApi.getMessages(chatId);

            const formattedMessages = response.flatMap((msg) => {
                const userMessage = { sender: 'user', text: msg.contentUser, loading: false };
                const botMessage = { sender: 'bot', text: msg.contentBot, loading: false };
                return [userMessage, botMessage];
            });

            setMessages(formattedMessages);
        } catch (error) {
            console.error("Error fetching chat messages:", error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const toggleScroll = () => {
        setIsScrollOpen(prevState => !prevState);
        setIsArrowRotated(prevState => !prevState);
    };

    return (
        <div className="container">
            <div className="row d-flex mx-3 my-3">
                <div className="col-3 h-600" >
                    <div className="leftbar h-100 d-flex flex-column justify-content-between bg-turkuaz">
                        <div>
                            <div className='d-flex justify-content-between homburger'>
                                <span className='fw-400 fs-24 text-black'>
                                    <a href="/">
                                        Ai Lawyer
                                    </a>
                                </span>
                            </div>
                            <div className="d-flex bg-turkuaz flex-column justify-content-between">
                                <button
                                    className='Chat-button mt-3 d-flex align-items-center justify-content-between'
                                    onClick={handleNewChat}
                                >
                                    Yeni Chat
                                    <img src={images.plus} alt="" />
                                </button>
                                <div className='mt-4'>
                                    <button
                                        className='Chat-button mt-3 d-flex align-items-center justify-content-between'
                                        onClick={toggleScroll}
                                    >
                                        Keçmiş
                                        <img src={images.arrowdown} alt="" className={isArrowRotated ? 'rotated' : ''} />
                                    </button>
                                    <div className={`scrool ${isScrollOpen ? 'open' : 'closed'}`}>
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
                                            <p>Sizin Keçmiş Çatlarınız yoxdur!</p>
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
                            {isLoading ? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <Spin />
                                </div>
                            ) : (
                                messages.map((msg, index) => (
                                    <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : ''}`}>
                                        <div className={`box${msg.sender === 'user' ? 'Right' : 'Left'} position-relative mb-4 me-2`}>
                                            {msg.sender === 'user' && (
                                                <div className="d-flex w-100 position-relative">
                                                    <span className='fs-25 fw-400'>{msg.text}</span>
                                                    <div className="blue-part"></div>
                                                </div>
                                            )}
                                            {msg.sender === 'bot' && (
                                                <>
                                                    <div className="blue-part2"></div>
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
                                ))
                            )}
                        </div>

                        <div className="input d-flex align-items-center justify-content-between">
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
