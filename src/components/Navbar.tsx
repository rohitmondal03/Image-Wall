import { Link } from "react-router-dom"

import { useUser } from "@supabase/auth-helpers-react"

import SignOutBtn from "./signout-btn"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"


const Navbar = () => {
    const user = useUser()


    return (
        <nav className="flex flex-row items-center justify-around py-7 border-b-2">
            <div>
                <Link to={`/`}>
                    <h1 className="text-3xl font-bold">ImageWall</h1>
                </Link>
            </div>

            <div className="flex flex-row items-center justify-center gap-x-7">
                {user ? (
                    <SignOutBtn />
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