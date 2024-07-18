import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState([]);
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full ml-2 p-2 border border-black flex rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          //console.log("Form Submitted", liveMessage);
          dispatch(
            addMessage({
              name: "Anurag",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 rounded-lg px-2 "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
