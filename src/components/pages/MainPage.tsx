import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";

import { Button } from "@/components/ui/button";


const MainPage = () => {
    const user = useUser();

    const navigate = useNavigate();

    if (user) navigate("/dashboard")


    return (
        <section className="flex flex-row items-center justify-center gap-x-9 px-56 h-[75vh]">
            <div>
                <h4 className="text-2xl text-amber-500">Welcome to...</h4>
                <h1 className="text-7xl leading-relaxed underline decoration-zinc-300 dark:decoration-zinc-500">ImageWall</h1>
                <p className="text-xl text-zinc-700 dark:text-zinc-300">ImageWall is a online platform that offers a visually appealing way for users to store and showcase their images safely online. To enhance user experience and ensure seamless image storage, we have integrated a server-side solution. ImageWall is the easiest way to store your images.</p>

                <>
                    {user ? (
                        null
                    ) : (
                        <Button className="mt-5">
                            <Link to={`/signin`}>Sign In</Link>
                        </Button>
                    )}
                </>
            </div>

            <img
                src="./assets/mainImg.jpg"
                className="h-80 rounded-3xl"
            />
        </section>
    );
};

export default MainPage;
