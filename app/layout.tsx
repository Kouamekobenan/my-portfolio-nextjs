import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("Layout start ✈️");
  return children;
}
