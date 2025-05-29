// import { redirect } from 'next/navigation'

import { LogoutButton } from '@/components/logout-button'
// import { createClient } from '@/lib/supabase/server'

export default async function ProtectedPage() {

    return (
        <div className="flex h-svh w-full items-center justify-center gap-2">
            <p>
                {/* Hello <span>{data.user.email}</span> */}
                Hello World!
            </p>
            <LogoutButton />
        </div>
    )
}
