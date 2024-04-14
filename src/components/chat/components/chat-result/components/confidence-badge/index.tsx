import Image from "next/image";
import styles from "./confidence-badge.module.css";

const ConfidenceBadge = (): JSX.Element => (
  <div className={styles.comp}>
    <div className={styles.message}>
      <Image
        src={"/icons/alert-circle.svg"}
        alt="Alert"
        height={20}
        width={20}
      />
      <span className={styles.text}>Not Confident</span>
    </div>
    <button className={styles.button}>
      <span className={styles.text}>Human Help</span>
      <Image
        src={"/icons/arrow-right.svg"}
        alt="Right arrow"
        height={20}
        width={20}
      />
    </button>
  </div>
);

export default ConfidenceBadge;
