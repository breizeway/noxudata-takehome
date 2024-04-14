import Image from "next/image";
import ConfidenceBadge from "./components/confidence-badge";
import ResultTable from "./components/result-table";
import styles from "./chat-result.module.css";

interface ChatResultProps {
  answer: string;
}

export const ChatResult = ({ answer }: ChatResultProps): JSX.Element => {
  return (
    <div className={styles.chatResult}>
      <div className={styles.resultInner}>
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
    </div>
  );
};

export default ChatResult;
