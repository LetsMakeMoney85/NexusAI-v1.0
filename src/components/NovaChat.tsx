import {useState} from "react";
import {sendMessage} from "../services/api";

export default function NovaChat(){

const [message,setMessage]=useState("");
const [reply,setReply]=useState("");

async function handleSend(){

const response = await sendMessage(message);

setReply(response.reply);

setMessage("");

}

return(

<div className="nova-chat">

<div className="chat-header">
✨ Nova
</div>

<div className="chat-window">

<div className="nova-message">
Hello, I'm Nova. I'm here to help turn your ideas into reality.
</div>

{reply && (
<div className="user-message">
{reply}
</div>
)}

</div>


<div className="chat-input">

<input
placeholder="Ask Nova anything..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={handleSend}>
Send
</button>

</div>

</div>

);

}
