import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function LandingPage() {
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

export default LandingPage