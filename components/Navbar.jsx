import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
function Navbar(){
    return(
        <nav className=" flexBetween max-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((item)=>(
                        <Link className="regular-16" href={item.href} key={item.key}>
                            {item.label}
                        </Link>
                    ))}
                </ul>
            </Link>
        </nav>
    )
}

export default Navbar;