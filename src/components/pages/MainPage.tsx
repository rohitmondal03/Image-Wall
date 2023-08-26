import { Link, useNavigate } from "react-router-dom";

import { useUser } from "@supabase/auth-helpers-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const MainPage = () => {
    const user = useUser();

    const navigate = useNavigate();

    console.log(user);

    if (!user) navigate("/dashboard")



        return (
            <Card className="text-center w-1/2 mx-auto mt-16">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                        <Link to={`/`}>
                            Welcome to ImageWall
                        </Link>
                    </CardTitle>

                    <CardDescription>"Image Wall: Store Your Memories"</CardDescription>
                </CardHeader>

                <Separator orientation="horizontal" className="mb-6" />

                <CardContent>
                    The Image Wall app offers a visually appealing way for users to store
                    and showcase their images. To enhance user experience and ensure
                    seamless image storage, you can integrate a server-side solution. Get started by signing in to ImageWall.
                </CardContent>

                <CardFooter>
                    <Button className="mx-auto">
                        {user ? (
                            <Link to={`/dashboard`}>
                                Dashboard
                            </Link>
                        ) : (
                            <Link to={"/signin"}>
                                Sign In
                            </Link>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        );
};

export default MainPage;
