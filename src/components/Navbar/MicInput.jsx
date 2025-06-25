import React, { useState, useEffect, useRef } from "react";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const MicInput = ({ onResult }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      onResult(speechResult);
    };

    recognition.onerror = () => setListening(false);

    recognitionRef.current = recognition;
  }, [onResult]);

  const handleMicClick = () => {
    if (recognitionRef.current && !listening) {
      recognitionRef.current.start();
    }
  };

  return (
    <button onClick={handleMicClick} className="icon-button bg-button">
      <MdOutlineRecordVoiceOver />
    </button>
  );
};

export default MicInput;
