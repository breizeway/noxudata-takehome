"use client";

import Button from "@/components/button";
import styles from "./chat-box.module.css";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { socket } from "@/socket.mjs";

const ChatBox = (): JSX.Element => {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("messageSent", message);
    setMessage("");
  };

  return (
    <div className={styles.comp}>
      <div className={styles.inner}>
        <div className={styles.buttons}>
          <Button>Suggest Question 1</Button>
          <Button>Suggest Question 2</Button>
          <Button>Suggest Question 3</Button>
        </div>
        <form className={styles.controls} onSubmit={onSubmit}>
          <div className={styles.inputCombo}>
            <Button className={styles.chatButton}>
              <Image
                src={"/icons/message-circle.svg"}
                alt="Chat bubble"
                height={24}
                width={24}
                className="min-w-6"
              />
              Chat
              <Image
                src="/icons/chevrons-up-down.svg"
                alt="Two stacked chevrons pointing up and down"
                height={16}
                width={16}
                className="min-w-4"
              />
            </Button>
            <div className={styles.inputContainer}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.input}
                type="text"
                placeholder="Start a new chat"
              />
              <button className={styles.inputIconButton} type="submit">
                <Image
                  src="/icons/send.svg"
                  alt="Send"
                  height={24}
                  width={24}
                  className="min-w-6"
                />
              </button>
            </div>
          </div>
          <Button theme="terminal" type="button">
            End Chat
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
