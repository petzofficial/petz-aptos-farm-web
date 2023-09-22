import React from 'react'
import ghostImg from "assets/ghost.png"
import Image from 'next/image';
export default function Loading() {
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Image src={ghostImg} style={{ width: 160, height: 160, textAlign: "center", display: "block", margin: "auto" }} alt="connect to wallet" />
            {/* <h1 style={{ textAlign: "center" }}>404</h1> */}
            <h1 style={{ textAlign: "center" }}>Please connect the wallet</h1>
        </div >
    )
}
