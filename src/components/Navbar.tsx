import { Link } from "react-router-dom"
import { useUser } from "@supabase/auth-helpers-react"

import SignOutBtn from "./signout-btn"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const Navbar = () => {
    const user = useUser()


    return (
        <nav className="flex flex-row items-center justify-around py-7 border-b-2">
            <div>
                <Link to={`/`}>
                    <span className="text-2xl sm:text-3xl font-bold">ImageWall</span>
                </Link>
            </div>

            <div className="flex flex-row items-center justify-center gap-x-4 sm:gap-x-7">
                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <h1 className="bg-zinc-600 text-white px-4 py-2 rounded-full cursor-pointer">{user.email?.toUpperCase().charAt(0)}</h1>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="gap-y-3 flex flex-col p-2">
                            <Link to={`/dashboard`}>Dashboard</Link>
                            <SignOutBtn />
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Link to={`/signin`}>
                        <Button>Sign In</Button>
                    </Link>
                )}

                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar