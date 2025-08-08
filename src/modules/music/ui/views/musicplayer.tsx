"use client";
import { useState } from "react";
import Image from "next/image";
import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";

export const MusicPlayer = () => {
  const [toggle, setToggle] = useState("play");

  const handleClick = () => {
    if (toggle === "play") {
      setToggle("pause");
    } else {
      setToggle("play");
    }
  };
  return (
    <div className="flex flex-col gap-y-6 h-full border rounded-md overflow-hidden w-full max-w-xl">
      <div className="relative aspect-square">
        <Image
          src="https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="artwork"
          className="h-full w-full object-cover border-b border-black"
        />
      </div>
      <div className="flex flex-col gap-y-4 p-4">
        <div className="flex items-center justify-center gap-8">
          <button>
            <SkipBackIcon className="size-6" />
          </button>
          <button onClick={handleClick}>
            {toggle === "play" ? (
              <PlayIcon className="size-6" />
            ) : (
              <PauseIcon className="size-6" />
            )}
          </button>
          <button>
            <SkipForwardIcon className="size-6" />
          </button>
        </div>
        <div className="w-full h-2 mx-auto bg-gray-200 rounded-full overflow-hidden my-3">
          <div className="h-full w-1/3 bg-black" />
        </div>
      </div>
    </div>
  );
};
