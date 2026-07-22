import { useState } from "react";

export default function NovaChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="nova-chat">

      <div className="chat-header">
        ✨ Nova
      </div>

      <div className="chat-window">
        <div className="nova-message">
          Hello, I'm Nova. 
          I'm here to help turn your ideas into reality.
        </div>
      </div>

      <div className="chat-input">
        <input
          placeholder="Ask Nova anything..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />

        <button>
          Send
        </button>
      </div>

    </div>
  );
}
