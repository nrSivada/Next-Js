"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
    const pathName = usePathname();
    return (
        <nav>
            <Link href="/" className={`px-3 py-2 rounded ${pathName=='/' ?
            "bg-blue-500 text-white" : "text-blue=500"
                }`}>Home</Link>
            <Link href="/About" className={`px-3 py-2 rounded ${pathName=='/About' ?
            "bg-blue-500 text-white" : "text-blue=500"
                }`}>About</Link>
            <Link href="/Dashboard/setting" className={`px-3 py-2 rounded ${pathName=='/Dashboard/setting' ?
            "bg-blue-500 text-white" : "text-blue=500"
                }`}>Dashboard</Link>
        </nav>
    )
}