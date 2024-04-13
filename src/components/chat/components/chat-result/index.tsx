import Image from "next/image";
import React from "react";
import { ConfidenceBadge } from "./components/confidence-badge";

const NOXU_LOGO_MARK = "/icons/logo-mark.svg";

interface ChatResultProps {
  answer: string;
}

export const ChatResult = ({ answer }: ChatResultProps): JSX.Element => {
  return (
    <div className="bg-slate-100 grow p-8">
      <div className="width-max-content flex flex-col gap-4">
        <ConfidenceBadge />
        <div className="flex items-start gap-4">
          <Image
            src={NOXU_LOGO_MARK}
            alt="Noxu logo mark"
            height={40}
            width={40}
          />
          <div>
            <div className="min-h-10 flex items-center mb-2">
              <span>{answer}</span>
            </div>
            <div className="bg-white w-full h-10 rounded-lg border border-slate-300 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
