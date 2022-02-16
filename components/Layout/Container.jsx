import React from 'react';
import Head from "next/head";

import Navigation from './Navigation';
import Footer from './Footer';




const Container = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Hugo Mendoza</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />

                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
                    integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
                    crossorigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
                />
            </Head>
            <Navigation />
            <div className="bg-dark text-dark">{children}</div>
            <Footer />
        </div>
    );
}

export default Container;
