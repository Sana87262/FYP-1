"use client";

import { useState } from "react";

interface ChatContainerProps {
  messages: string[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
  return (
    <div className=" h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar ">
      <div className="  bg-fixed h-full w-full opacity-100 left-0 top-0 z-0  ">
        <div className="mx-10 my-6 relative  bottom-0 z-40 left-0">
          <div className="flex w-full">
            <div className="flex flex-col justify-end w-full gap-1 overflow-auto text-white">
              {messages?.map((msg, index) => (
                <div key={index}><p>{msg}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
