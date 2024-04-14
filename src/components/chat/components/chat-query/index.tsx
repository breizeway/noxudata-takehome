import { User } from "@/types";
import Image from "next/image";
import styles from "./chat-query.module.css";

interface ChatQueryProps {
  prompt: string;
  user: User;
}

const ChatQuery = ({ prompt, user }: ChatQueryProps): JSX.Element => {
  return (
    <div className={styles.chatQuery}>
      <div className={styles.queryInner}>
        <div className={styles.userImageClip}>
          <Image
            src={user.image}
            alt="User profile image"
            height={40}
            width={40}
          />
        </div>
        <span>{prompt}</span>
      </div>
    </div>
  );
};

export default ChatQuery;
