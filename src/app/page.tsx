"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState(
    Array.from({ length: 10 }).map((_, index) => ({ id: index }))
  );

  return (
    <div className="grid items-center justify-center min-h-screen">
      <div></div>
      {/* <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        
        className="bg-zinc-800 border"
      >
        teste
      </motion.div> */}
    </div>
  );
}
