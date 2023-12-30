import { auth, currentUser } from "@clerk/nextjs"
import { Metadata } from "next"
import DashboardPage from "./dashboard"
import LandingPage from "./landing"

export const metadata: Metadata = {
  title: "Get Shorts | Home",
  description: "Home page for Get Shorts.",
}

export default async function HomePage() {
  const { userId } = auth() // null means not logged in

  const user = await currentUser()
  // Use `user` to render user details or create UI elements

  if (userId) {
    return <DashboardPage />
  }

  return <LandingPage />
}
