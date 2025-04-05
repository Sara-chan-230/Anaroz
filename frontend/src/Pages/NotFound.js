import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";

function RainDrop({ x, speed, length }) {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        width: "1px",
        height: `${length}px`,
        backgroundColor: "rgba(173, 216, 230, 0.6)",
        zIndex: 0
      }}
    />
  );
}

function NotFound() {
  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create initial rain drops
    const createDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 100; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          speed: 1 + Math.random() * 2,
          length: 10 + Math.random() * 20
        });
      }
      setDrops(newDrops);
    };

    createDrops();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden min-h-screen">
      {/* Rain drops */}
      {drops.map((drop) => (
        <RainDrop 
          key={drop.id} 
          x={drop.x} 
          speed={drop.speed} 
          length={drop.length} 
        />
      ))}

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10"
      >
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-9xl font-bold mb-6"
        >
          404
        </motion.div>
        <h1 className="text-3xl font-bold text-primary mb-4">Lost in Space?</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          The page you requested was not found. Maybe it's exploring the universe?
        </p>
        <Button 
          variant="contained" 
          size="large" 
          href="/"
          sx={{background : "#08527A", boxShadow : "none"}}
          className=" hover:bg-indigo-700 "
        >
          Beam Me Home
        </Button>
      </motion.div>
    </div>
  );
}

export default NotFound;