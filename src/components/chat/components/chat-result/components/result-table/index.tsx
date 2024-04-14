import React from "react";
import styles from "./result-table.module.css";
import Image from "next/image";
import { mockAccountData } from "@/data/mock-account-data";
import { Button } from "@/components/button";

const ResultTable = (): JSX.Element => {
  const numColumns = Object.keys(mockAccountData[0] ?? {}).length || 1;

  return (
    <div className={styles.resultTableWrapper}>
      <table className={styles.resultTable}>
        <thead>
          <tr className={styles.headerRow}>
            <th>
              <HeaderButton />
            </th>
            <th>
              <HeaderButton label="Name" />
            </th>
            <th>Industry</th>
            <th>
              <HeaderButton label="City" />
            </th>
            <th>
              <HeaderButton label="State" />
            </th>
            <th>Segment</th>
            <th>
              <HeaderButton label="Owner ID" />
            </th>
          </tr>
        </thead>
        <tbody>
          {mockAccountData.map((account, idx) => (
            <tr key={idx}>
              <td className="!w-auto">{account.id}</td>
              <td className="!w-1/2">{account.name}</td>
              <td>{account.industry}</td>
              <td className={styles.condensed}>{account.city}</td>
              <td>{account.state}</td>
              <td className={styles.condensed}>{account.segment}</td>
              <td>{account.ownerId}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={numColumns} className={styles.footerInfo}>
              <div className={styles.infoMessageContainer}>
                <div className={styles.infoMessage}>
                  <Image
                    src="/icons/info.svg"
                    alt="Info"
                    height={20}
                    width={20}
                    className="min-w-5"
                  />
                  Only X rows are shown. View full list for more
                </div>
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
            </td>
          </tr>
          <tr>
            <td colSpan={numColumns}>
              <div className={styles.footerButtons}>
                <Button theme="primary">Show Full List</Button>
                <Button theme="primary">Show Query</Button>
                <Button theme="primary">Show Chart</Button>
                <Button theme="primary">Pin to Dashboard</Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const HeaderButton = ({ label }: { label?: string }): JSX.Element => (
  // TODO check all alts
  // TOOD consistent exports
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
