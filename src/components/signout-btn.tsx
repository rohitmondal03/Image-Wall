import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Button } from './ui/button'


const SignOutBtn = () => {
    const supabase = useSupabaseClient();


    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) console.log(error)
    }

    return (
        <Button
            variant={`destructive`}
            onClick={signOut}
        >
            Sign Out
        </Button>
    )
}

export default SignOutBtn