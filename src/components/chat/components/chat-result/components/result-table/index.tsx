import React from "react";
import styles from "./result-table.module.css";
import Image from "next/image";
import { mockAccountData } from "@/data/mock-account-data";
import Button from "@/components/button";

const ResultTable = (): JSX.Element => {
  const numColumns = Object.keys(mockAccountData[0] ?? {}).length || 1;

  return (
    <div className={styles.comp}>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th scope="col">
                <HeaderButton />
              </th>
              <th scope="col">
                <HeaderButton label="Name" />
              </th>
              <th scope="col">
                <HeaderButton label="Industry" />
              </th>
              <th scope="col">
                <HeaderButton label="City" />
              </th>
              <th scope="col">
                <HeaderButton label="State" />
              </th>
              <th scope="col">
                <HeaderButton label="Segment" />
              </th>
              <th scope="col">
                <HeaderButton label="Owner ID" />
              </th>
            </tr>
          </thead>
          <tbody>
            {mockAccountData.map((account, idx) => (
              <tr key={idx}>
                <td>{account.id}</td>
                <td className={styles.expandedCell}>{account.name}</td>
                <td className={styles.condensedCell}>{account.industry}</td>
                <td className={styles.condensedCell}>{account.city}</td>
                <td className={styles.condensedCell}>{account.state}</td>
                <td className={styles.condensedCell}>{account.segment}</td>
                <td className={styles.condensedCell}>{account.ownerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.infoMessageContainer}>
          <span>
            <Image
              src="/icons/info.svg"
              alt="Info"
              height={20}
              width={20}
              className="min-w-5 inline mr-1.5 mb-0.5"
            />
            Only X rows are shown. View full list for more
          </span>
          <button>
            <Image
              src="/icons/x.svg"
              alt="Close"
              height={20}
              width={20}
              className="min-w-5"
            />
          </button>
        </div>
      </div>
      <div className={styles.footerButtons}>
        <Button theme="primary">Show Full List</Button>
        <Button theme="primary">Show Query</Button>
        <Button theme="primary">Show Chart</Button>
        <Button theme="primary">Pin to Dashboard</Button>
      </div>
    </div>
  );
};

const HeaderButton = ({ label }: { label?: string }): JSX.Element => (
  <button className={styles.headerButton}>
    {label}
    <Image
      src="/icons/chevrons-up-down.svg"
      alt="Two stacked chevrons pointing up and down"
      height={16}
      width={16}
      className="min-w-4"
    />
  </button>
);

export default ResultTable;
