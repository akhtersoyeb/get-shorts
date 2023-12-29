import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Shorts | Sign In",
  description: "Sign in page for Get Shorts.",
}

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <SignIn />
    </div>
  )
}