import Image from "next/image";
import styles from "./chat-query.module.css";

interface ChatQueryProps {
  prompt: string;
  userImage: string;
}

const ChatQuery = ({ prompt, userImage }: ChatQueryProps): JSX.Element => {
  return (
    <div className={styles.comp}>
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
    </div>
  );
};

export default ChatQuery;
