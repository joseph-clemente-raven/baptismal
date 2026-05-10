import { motion } from "motion/react";

const balloonsData = [
  { color1: "#ffdde1", color2: "#ee9ca7", left: "10%", delay: 0.5, duration: 18, scale: 0.8 }, // Soft Pink
  { color1: "#ffffff", color2: "#7ba1c7", left: "25%", delay: 3, duration: 22, scale: 0.6 },  // Light Blue
  { color1: "#fff9c4", color2: "#fbc02d", left: "75%", delay: 1, duration: 20, scale: 0.9 },  // Happy Yellow
  { color1: "#e0f2f1", color2: "#4db6ac", left: "85%", delay: 5, duration: 19, scale: 0.7 },  // Soft Teal
  { color1: "#e3f2fd", color2: "#2196f3", left: "45%", delay: 8, duration: 25, scale: 0.5 },  // Vibrant Blue
  { color1: "#f3e5f5", color2: "#ab47bc", left: "60%", delay: 11, duration: 21, scale: 0.85 }, // Soft Purple
];

export function FloatingBalloons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {balloonsData.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: 0, opacity: 0 }}
          animate={{ y: "-20vh", x: Math.random() * 100 - 50, opacity: [0, 0.8, 0.8, 0] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{ left: b.left, transform: `scale(${b.scale})` }}
        >
          <svg width="80" height="250" viewBox="0 0 80 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 20 86.6667 40 100C60 86.6667 80 62.0914 80 40C80 17.9086 62.0914 0 40 0Z" fill={`url(#balloon-grad-${i})`}/>
            <path d="M37 99L34 104H46L43 99H37Z" fill={b.color2}/>
            <path d="M40 104C40 120 25 145 40 170C55 195 25 220 40 250" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" fill="none"/>
            <defs>
              <radialGradient id={`balloon-grad-${i}`} cx="25" cy="25" r="55" gradientUnits="userSpaceOnUse">
                <stop stopColor={b.color1} />
                <stop offset="1" stopColor={b.color2} />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
