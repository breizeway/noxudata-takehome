import { ChatBox } from "./components/chat-box";
import { ChatQuery } from "./components/chat-query";
import { ChatResult } from "./components/chat-result";

export const Chat = (): JSX.Element => {
  return (
    <div className="grow max-h-full flex flex-col">
      <ChatQuery
        user={{ name: "User 1", image: "/images/user-1.png" }}
        prompt="List my top 10 accounts"
      />
      <ChatResult answer="To find out how many accounts you have, you can use the following query:" />
      <ChatBox />
    </div>
  );
};

export default Chat;
