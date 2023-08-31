import { useNavigate } from "react-router-dom";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Auth, AuthCard } from "@supabase/auth-ui-react"


export default function Login() {
    const navigate = useNavigate();

    const supabase = useSupabaseClient();
    const user = useUser();

    if (user) {
        navigate("/dashboard")
    }


    return (
        <div className="mx-auto flex items-center justify-center h-[80vh] mt-6">
            <AuthCard>
                <h1 className="text-2xl font-bold">SignIn with your account</h1>
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                    }}
                    providers={["google", 'github', "discord"]}
                    redirectTo="/dashboard"
                    onlyThirdPartyProviders
                />
            </AuthCard>
        </div>
    )
}