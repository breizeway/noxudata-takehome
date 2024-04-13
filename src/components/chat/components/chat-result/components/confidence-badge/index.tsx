import Image from "next/image";
import React from "react";

export const ConfidenceBadge = (): JSX.Element => {
  return (
    <div className="flex w-fit text-warning font-semibold">
      <div className="flex bg-white border border-slate-300 rounded-md">
        <div className="flex items-center gap-2 border-r border-slate-300 px-2 py-1">
          <Image
            src={"/icons/alert-circle.svg"}
            alt="User profile image"
            height={20}
            width={20}
          />
          <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
            Not Confident
          </span>
        </div>
        <button className="flex whitespace-nowrap items-center gap-2 px-2 py-1">
          <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">
            Human Help
          </span>
          <Image
            src={"/icons/arrow-right.svg"}
            alt="User profile image"
            height={20}
            width={20}
          />
        </button>
      </div>
    </div>
  );
};
