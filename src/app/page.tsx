"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {

  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Future Frontend Developer", "Web Scraper", "Back-End Developer"],
      typeSpeed: 50, // Speed of typing in milliseconds
      backSpeed: 50, // Speed of deleting in milliseconds
      loop: true, // Loop the typing animation
    };

    if (typingRef.current) {
      const typed = new Typed(typingRef.current, options);

      return () => {
        typed.destroy(); // Cleanup when component unmounts
      };
    }
  }, []);

  return (
        <div className="hero">
          <p>
            No one can whistle a symphony. It takes an orchestra to play it.
          </p>
          <h1>
            {`Hi, I'm Saher Rameez`}
          </h1>
          <h2>
            An Expert{" "}
            <span className="typingref" ref={typingRef}></span>
          </h2>
          <div>
            <button className="button">
              <Link href=""></Link>
              Download CV
            </button>
          </div>
        </div>
  );
}
