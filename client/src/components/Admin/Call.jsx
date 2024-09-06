import React, { useState, useEffect } from "react";
import axios from "axios";

const Call = ({ addLog }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [callNumber, setCallNumber] = useState("");
  const [callMessage, setCallMessage] = useState("");


  useEffect(() => {
    axios
      .get("https://ivr-14.onrender.com/api/call-logs/")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);



  const handleCall = () => {
    if (!callNumber) {
      alert("Please enter a phone number to call.");
      return;
    }

    // Split the input string into an array of phone numbers
    const phoneNumbersArray = callNumber.split(",").map((number) => number.trim());

    // Simple phone number format validation (optional, can be improved)
    for (let number of phoneNumbersArray) {
      if (!/^(\+[\d]{1,3})?[\d]{10,15}$/.test(number)) {
        alert(`Invalid phone number format: ${number}`);
        return;
      }
    }

    const message = callMessage || "This is a default message during the call.";

    setIsCalling(true);

    axios
      .post("https://ivr-14.onrender.com/make-calls/", { phone_numbers: phoneNumbersArray, message })
      .then(() => {
        addLog({
          type: "Call",
          // student: student.name,
          phone: callNumber,
          content: message,
        });
        alert(`Recorded call sent to ${callNumber} with message: "${message}"`);
        setCallNumber("");
        setCallMessage("");
      })
      .catch((error) => {
        console.error("Error sending call:", error);
      })
      .finally(() => {
        setIsCalling(false);
      });
  };

  return (
    <div className="min-h-screen mb-6">
    <h2 className="text-2xl font-semibold mb-4 mt-4 text-center">Call a Participant</h2>
    <div className="bg-white shadow-md rounded p-4">
      <div className="flex flex-col lg:flex-row items-center">
        <input
          type="text"
          placeholder="Enter phone number..."
          value={callNumber}
          onChange={(e) => setCallNumber(e.target.value)}
          className="border rounded p-2 w-full max-w-xs my-2 lg:my-0"
          disabled={isCalling}
        />
        <input
          type="text"
          placeholder="Enter message to play during call..."
          value={callMessage}
          onChange={(e) => setCallMessage(e.target.value)}
          className="border rounded p-2 w-full max-w-xs my-2 lg:my-0 lg:ml-4"
          disabled={isCalling}
        />
        <button
          onClick={handleCall}
          className={`lg:ml-auto px-4 py-2 rounded my-2 lg:my-0 ${
            isCalling ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          disabled={isCalling}
        >
          {isCalling ? "In Call" : "Call"}
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Call;
