
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
           <Link href="/" className="w-36">
            <Image 
              src="/assets/images/eventscoop.svg" width={150} height={20}
              alt="EventScoop logo"/>
           </Link>

<SignedIn>
  <nav className="md: flex-between hidden w-full max-w-xs">
    <NavItems />
  </nav>
</SignedIn>

           <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
              <MobileNav />
            </SignedIn>
             <SignedOut>
                <Button asChild className="rounded-full bg-teal-300 text-white hover:bg-cyan-300" size="lg">
                    <Link href="/sign-in">
                    Login
                    </Link>
                </Button>
             </SignedOut>
           </div>
        </div>
    </header>
  )
}

export default Header