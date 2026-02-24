import React, { useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHALLENGER_LETTERS = 'CHALLENGER'.split('');

interface PreLandingProps {
  onComplete: () => void;
}

export function PreLanding({ onComplete }: PreLandingProps) {
  const completedRef = useRef(false);
  const [exiting, setExiting] = useState(false);
  const handleComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setExiting(true);
  }, []);

  const handleExitComplete = useCallback(() => {
    const timeoutId = setTimeout(() => {
      onComplete();
      clearTimeout(timeoutId);
    }, 1000);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-[100] bg-garage overflow-hidden flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => exiting && handleExitComplete()}
      >
        {/* Carbon fiber texture overlay */}
        <div className="absolute inset-0 carbon-fiber opacity-30 pointer-events-none" />

        {/* Headlight beams - left & right */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute bottom-[18%] left-1/2 w-[70vmax] h-[70vmax] -translate-x-[90%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse 50% 55% at 50% 100%, rgba(255,107,0,0.28) 0%, rgba(255,107,0,0.06) 30%, transparent 60%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute bottom-[18%] left-1/2 w-[70vmax] h-[70vmax] translate-x-[-10%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse 50% 55% at 50% 100%, rgba(255,107,0,0.28) 0%, rgba(255,107,0,0.06) 30%, transparent 60%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Racing stripes - diagonal slash */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: 'skewX(-12deg)' }}
        >
          <motion.div
            className="absolute top-0 -left-1/2 w-1/2 h-[140%] bg-challenger-orange"
            initial={{ x: '-100%' }}
            animate={{ x: '215%' }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ boxShadow: '0 0 60px rgba(255,107,0,0.5)' }}
          />
          <motion.div
            className="absolute top-0 -left-1/2 w-[2%] h-[140%] bg-white"
            initial={{ x: '-100%' }}
            animate={{ x: '215%' }}
            transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>


        {/* CHALLENGER title - letter stagger */}
        <div className="relative z-10 flex justify-center items-center mb-2">
          {CHALLENGER_LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter drop-shadow-[0_0_30px_rgba(255,107,0,0.4)]"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                textShadow: '0 0 20px rgba(255,107,0,0.3)',
              }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-tech text-white tracking-[0.4em] text-sm sm:text-base md:text-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          START YOUR ENGINE
        </motion.p>

        {/* Enter / progress line */}
        <motion.div
          className="absolute bottom-14 self-center -translate-x-1/2 h-[2px] bg-challenger-orange rounded-full origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: 'linear' }}
          style={{ width: 'min(200px, 40vw)' }}
        />

        {/* Click / tap to enter */}
        <motion.button
          type="button"
          onClick={handleComplete}
          className="absolute bottom-8 self-center -translate-x-1/2 font-bebas text-muted-metal hover:text-challenger-orange tracking-widest text-sm transition-colors cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          aria-label="Enter site"
        >
          ENTER
        </motion.button>

        {/* Auto-enter after 3.8s if user doesn't click */}
        <AutoComplete onComplete={handleComplete} delay={3800} />
      </motion.div>
    </AnimatePresence>
  );
}

function AutoComplete({ onComplete, delay }: { onComplete: () => void; delay: number }) {
  React.useEffect(() => {
    const t = setTimeout(onComplete, delay);
    return () => clearTimeout(t);
  }, [onComplete, delay]);
  return null;
}
