import React from 'react';
import Link from "next/link";

const Link = () => {
    return (
        <>
            <Link href="/">
                <a className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 p-2 rounded hover:bg-primary hover:text-white">
                    Inicio
                </a>
            </Link>
        </>
    );
}

export default Link;
