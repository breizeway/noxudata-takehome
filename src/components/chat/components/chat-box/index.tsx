import Button from "@/components/button";
import styles from "./chat-box.module.css";
import Image from "next/image";

const ChatBox = (): JSX.Element => {
  return (
    <div className={styles.comp}>
      <div className={styles.inner}>
        <div className={styles.buttons}>
          <Button>Suggest Question 1</Button>
          <Button>Suggest Question 2</Button>
          <Button>Suggest Question 3</Button>
        </div>
        <div className={styles.controls}>
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
                className={styles.input}
                type="text"
                placeholder="Start a new chat"
              />
              <button className={styles.inputIconButton}>
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
          <Button theme="terminal">End Chat</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
