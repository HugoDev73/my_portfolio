import React from 'react';
import Link from "next/link";

import Social from '../Social';
import { social } from "../../data"

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-100">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <Link href="/">
                                <a className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 p-2 rounded hover:bg-dark hover:text-white">
                                    Inicio
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/proyectos">
                                <a className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 p-2 rounded hover:bg-dark hover:text-white">
                                    Proyectos
                                </a>
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link href="/blog">
                                <a className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 p-2 rounded hover:bg-dark hover:text-white">
                                    Blog
                                </a>
                            </Link>
                        </div>
                    </nav>

                    <div className="flex justify-center mt-8 space-x-6">
                        {social.map(({ icon, url }, i) => (
                            <Social icon={icon} url={url} key={i} />
                        ))}
                    </div>
                    <p className="mt-8 text-base leading-6 text-center">
                        © 2021 Hugo Mendoza.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
