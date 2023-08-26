import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Login() {
    const [email, setEmail] = useState<string>("")

    const navigate = useNavigate();

    const supabase = useSupabaseClient();
    const user = useUser();

    if (user) {
        navigate("/dashboard")
    }


    async function magicLinkLogin() {
        const { error } = await supabase.auth.signInWithOtp({
            email: email
        });

        if (error) {
            alert("Some error !!")
            console.log(error);
        } else {
            alert("Check email")
        }
    }


    return (
        <Card className="w-1/2 mx-auto text-center mt-16">
            <CardHeader>
                <CardTitle>Sign In to ImageWall</CardTitle>
                <CardDescription>Enter your email and get magic link to your email</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-row items-center gap-x-4">
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        id="email"
                        placeholder="eg. johndoe@example.com"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
            </CardContent>

            <CardFooter>
                <Button
                    className="mx-auto"
                    onClick={() => { magicLinkLogin() }}
                >
                    Get Magic Link
                </Button>
            </CardFooter>
        </Card>
    )
}