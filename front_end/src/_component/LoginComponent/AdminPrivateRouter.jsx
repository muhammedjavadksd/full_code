"use client"
import { isAdminlogged } from '@/app/_util/helper/authHelper';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function AdminPrivateRouter({ children }) {
    let session = useSession();
    let router = useRouter();
    let [isAuth, setAuth] = useState(false)

    useEffect(() => {
        if (isAdminlogged(session)) {
            setAuth(true)
        } else {
            isAuth && router.replace("/admin/auth/sign_in");
        }
    }, [session])


    return (

        <div>
            {
                !isAuth ? <h2>Fallback loading</h2> : children
            }
        </div>
    )
}

export default AdminPrivateRouter