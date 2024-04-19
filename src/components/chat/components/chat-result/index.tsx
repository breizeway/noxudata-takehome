import Image from "next/image";
import ConfidenceBadge from "./components/confidence-badge";
import ResultTable from "./components/result-table";
import styles from "./chat-result.module.css";

import { useEffect, useState } from "react";
import { socket } from "@/socket.mjs";
import ChatQuery from "../chat-message";

interface ChatResultProps {
  answer: string;
}

export const ChatResult = ({ answer }: ChatResultProps): JSX.Element => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    console.log({ isConnected, transport });
  }, [isConnected, transport]);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      // @ts-ignore
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onNewMessage(newMessage: string) {
      setMessages([...messages, newMessage]);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("messageReceived", onNewMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("messageReceived", onNewMessage);
    };
  }, [messages]);

  return (
    <div className={styles.comp}>
      <div className={styles.inner}>
        <ConfidenceBadge />
        <div className={styles.noxuMessage}>
          <Image
            src={"/icons/logo-mark.svg"}
            alt="Noxu logo mark"
            height={40}
            width={40}
          />
          <div className={styles.messageContent}>
            <div className={styles.textContainer}>
              <span>{answer}</span>
            </div>
            <ResultTable />
          </div>
        </div>
      </div>
      {messages.map((message, idx) => (
        <ChatQuery
          key={`${message}-${idx}`}
          userImage="/images/user-1.png"
          prompt={message}
        />
      ))}
    </div>
  );
};

export default ChatResult;
