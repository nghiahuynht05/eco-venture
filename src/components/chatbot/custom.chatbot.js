import React, { useState } from "react";

import "./chatbot.css";
function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: userInput },
      { sender: "bot", text: getBotResponse(userInput) },
    ];

    setMessages(newMessages);
    setUserInput("");
  };

  const getBotResponse = (message) => {
    message = message.toLowerCase();
    const contactInfo =
      "Liên hệ Ecoventure qua số điện thoại: 0708 596 715, email: ecoventuretourist@gmail.com, hoặc ghé website: https://v0-new-project-c9nxtz040fg.vercel.app để đặt tour nhé!";

    if (message.includes("trang chủ") || message.includes("homepage")) {
      return `Trang chủ Ecoventure là nơi bắt đầu hành trình xanh! ${contactInfo}`;
    } else if (message.includes("tour") || message.includes("chuyến đi")) {
      return `Ecoventure có các tour:\n1. Cultural\n2. Survival\n3. Combine\n4. Volunteer. ${contactInfo}`;
    } else if (message.includes("giá") || message.includes("cost")) {
      return `Giá tour phụ thuộc vào gói tour, số người và thời điểm. ${contactInfo}`;
    } else if (message.includes("liên hệ") || message.includes("contact")) {
      return contactInfo;
    } else if (message.includes("hi")) {
      return "Chào bạn! Tôi có thể giúp gì hôm nay?";
    } else if (message.includes("bye")) {
      return "Tạm biệt nhé! Nếu cần, cứ gọi 0708 596 715.";
    } else {
      return "Hmm, câu hỏi của bạn làm tôi phải suy nghĩ đây! Bạn muốn hỏi gì về tour, giá, hay liên hệ?";
    }
  };
  return (
    <div>
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChatbot}>
          {isOpen ? "🌿" : "🌿"}
        </button>
      )}
      {isOpen && (
        <div className="chatbot-container" id="chatbot">
          <div
            className="chatbot-header"
            style={{ display: "flex", "justify-content": "space-between" }}>
            <div>Ecoventure Assistant</div>
            <div onClick={toggleChatbot}>Close</div>
          </div>
          <div className="chatbot-body" id="chatbotBody">
            <div className="bot-message">
              Xin chào! Tôi là trợ lý của Ecoventure, sẵn sàng giúp bạn khám phá
              thiên nhiên và sống phiêu lưu. Bạn muốn hỏi gì hôm nay?
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập tin nhắn..."
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      )}

      {/* {isOpen && (
        <div className="chatbot">
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập tin nhắn..."
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      )} */}
    </div>
  );
}
export default ChatBot;
