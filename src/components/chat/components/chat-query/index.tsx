import React from "react";

// import "./ChatQuery.css";
import { User } from "@/types";
import Image from "next/image";

interface ChatQueryProps {
  prompt: string;
  user: User;
}

export const ChatQuery = ({ prompt, user }: ChatQueryProps): JSX.Element => {
  return (
    <div className="p-8 bg-white">
      <div className="width-max-content flex items-center gap-4">
        <div className="rounded-full overflow-clip min-w-fit min-h-fit">
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
