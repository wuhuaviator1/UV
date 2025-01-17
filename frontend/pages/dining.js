import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function Dining() {
    return (
        <div className="pages-wrapper">
            <Head>
                <title>Dining</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>
            <Navbar></Navbar>
            <h1 className="heading-14 commonheading">Dining</h1>


        </div>
    );
}