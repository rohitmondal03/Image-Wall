import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";

import { Button } from "@/components/ui/button";


const MainPage = () => {
    const user = useUser();

    const navigate= useNavigate();

    if(user) {
        navigate("/dashboard")
    }
    

    return (
        <section className="flex flex-row items-center justify-center md:gap-x-9 px-12 sm:px-56 pt-12 sm:pt-10 md:pt-24">
            <div className="relative md:static md:block">
                <h4 className="text-2xl text-amber-500">Welcome to...</h4>
                <h1 className="text-7xl leading-relaxed underline md:decoration-zinc-300 decoration-zinc-600 dark:decoration-zinc-500">
                    Image<span className="text-red-600">Wall</span>
                </h1>
                <p className="text-md md:text-xl text-zinc-700 dark:text-zinc-300">ImageWall is a online platform that offers a visually appealing way for users to store and showcase their images safely online. To enhance user experience and ensure seamless image storage, we have integrated a server-side solution. ImageWall is the easiest way to store your images.</p>

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
                className="absolute -z-40 opacity-20 dark:opacity-30 md:opacity-100 dark:md:opacity-100 inset-0 h-screen md:z-0 md:static md:h-80 md:rounded-3xl"
            />
        </section>
    );
};

export default MainPage;
