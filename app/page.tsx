import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UserButton, auth, currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Get Shorts | Home",
  description: "Home page for Get Shorts.",
}

export default async function HomePage() {
  const { userId } = auth() // null means not logged in

  const user = await currentUser()
  // Use `user` to render user details or create UI elements

  if (userId) {
    return <DashboardPageUI />
  }

  return <LandingPageUI />
}

function DashboardPageUI() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-10">
      <UserButton afterSignOutUrl="/" />
      <p>Dashboard Page</p>
    </div>
  )
}

function LandingPageUI() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-10">
        <h1 className="font-medium text-5xl">
          Welcome to
          <span className="font-bold italic">
            Get Shorts
          </span>
        </h1>
        <Link
          href={'/sign-in'}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Get Started
        </Link>
      </div>
    </>
  )
}