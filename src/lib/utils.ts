import env from "@/utils/env";
import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function spaceToHyphen(str: string) {
  const list = str.split(" ").map((s) => {
    return s.toLocaleLowerCase();
  });
  // console.log(list);

  if (list.length == 1) {
    return list[0];
  } else {
    return list.join("-");
  }
}

export function hyphenToSpace(str: string) {
  const list = str.split("-");
  if (list.length == 1) {
    return list[0];
  } else {
    return list
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

// console.log(spaceToHyphen("js sjkj"));
// console.log(hyphenToSpace("for-sale"));

export const api = axios.create({
  withCredentials: true,
  baseURL: env.VITE_BACKEND_URL,
});
