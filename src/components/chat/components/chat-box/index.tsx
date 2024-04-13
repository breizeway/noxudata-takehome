import React from "react";

interface ChatBoxProps {}

export const ChatBox = ({}: ChatBoxProps): JSX.Element => {
  return (
    <div className="bg-white p-8 pt-4 border-t border-slate-300">
      <div className="width-max-content">Chat Box</div>
    </div>
  );
};
