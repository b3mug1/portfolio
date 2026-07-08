import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 8,
  size: 3 + Math.random() * 5
}));

export function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-10px"
          }}
          animate={{
            y: [0, -900],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
