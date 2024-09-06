import React, { useState, useEffect } from "react";
import axios from "axios";

const Message = ({ addLog }) => {
  const [IsMessaging, setIsMessaging] = useState(false);
  const [messageNumber, setMessageNumber] = useState("");
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    axios
      .get("https://ivr-14.onrender.com/api/sms-logs/")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleMessage = () => {
    if (!messageNumber) {
      alert("Please enter a phone number to send a message.");
      return;
    }

    // Split the input string into an array of phone numbers
    const phoneNumbersArray = messageNumber.split(",").map((number) => number.trim());

    // Simple phone number format validation (optional, can be improved)
    for (let number of phoneNumbersArray) {
      if (!/^(\+[\d]{1,3})?[\d]{10,15}$/.test(number)) {
        alert(`Invalid phone number format: ${number}`);
        return;
      }
    }

    const message = messageText || "This is a recorded message.";

    setIsMessaging()

    axios
      .post("https://ivr-14.onrender.com/send-sms/", { phone_numbers: phoneNumbersArray, message })
      .then(() => {
        addLog({
          type: "Message",
          // student: student.name,
          phone: messageNumber,
          content: message,
        });
        alert(`Send recorded message to ${messageNumber}: "${message}"`);
        setMessageNumber("");
        setMessageText("");
      })
      .catch((error) => {
        alert("Error sending message:", error);
      });
  };

  return (
    <div className="mb-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 mt-4 text-center">Send a Message</h2>
      <div className="bg-white shadow-md rounded p-4">
        <div className="flex flex-col lg:flex-row items-center">
          <input
            type="text"
            placeholder="Enter phone number..."
            value={messageNumber}
            onChange={(e) => setMessageNumber(e.target.value)}
            className="border rounded p-2 w-full max-w-xs mb-4 lg:mb-0"
            disabled={IsMessaging}
          />
          <input
            type="text"
            placeholder="Enter message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="border rounded p-2 w-full max-w-xs mb-4 lg:mb-0 lg:ml-4"
            disabled={IsMessaging}
          />
          <button
            onClick={handleMessage}
            className="lg:ml-auto bg-yellow-500 text-white px-4 py-2 rounded"
            disabled={IsMessaging}
          >
            {IsMessaging ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
