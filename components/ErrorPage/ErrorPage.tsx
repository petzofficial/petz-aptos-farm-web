import React from "react";
import ghostImg from "assets/ghost.png";
import Image from "next/image";
export default function ErrorPage() {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        priority
        src={ghostImg}
        style={{
          width: 160,
          height: 160,
          // textAlign: "center",
          // display: "block",
          margin: "0 auto",
        }}
        alt="connect to wallet"
      />
      {/* <h1 style={{ textAlign: "center" }}>404</h1> */}
      <h1 style={{ textAlign: "center" }}>Please connect the wallet</h1>
    </div>
  );
}
