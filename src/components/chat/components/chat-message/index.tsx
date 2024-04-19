import Image from "next/image";
import styles from "./chat-message.module.css";

interface ChatMessageProps {
  prompt: string;
  userImage: string;
}

const ChatMessage = ({ prompt, userImage }: ChatMessageProps): JSX.Element => {
  return (
    <div className={styles.inner}>
      <div className={styles.userImageClip}>
        <Image
          src={userImage}
          alt="User profile image"
          height={40}
          width={40}
        />
      </div>
      <span>{prompt}</span>
    </div>
  );
};

export default ChatMessage;
