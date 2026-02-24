import { motion } from 'framer-motion';
import { ChevronDown, Zap, Gauge } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 transform skew-x-12 translate-x-1/4"></div>
        {/* Racing Stripe */}
        <div className="absolute top-0 left-1/2 md:left-1/4 w-32 h-[120%] bg-challenger-orange opacity-10 transform -skew-x-12 -translate-y-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="inline-flex items-center gap-3 mb-4">

            <div className="h-[2px] w-12 bg-challenger-orange"></div>
            <span className="font-tech text-challenger-orange tracking-widest text-sm md:text-base">
              VIN: 2023-DEV-FULLSTACK
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-7xl md:text-9xl font-bebas text-white leading-none tracking-tighter mb-2">

            MIR  {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
             SAIF ALI
            </span>
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">

            <div className="bg-challenger-orange text-black font-bebas text-xl px-3 py-1 transform -skew-x-12">
              R/T EDITION
            </div>
            <h2 className="text-2xl md:text-3xl font-rajdhani font-bold text-gray-300 tracking-wide">
              FULL STACK DEVELOPER
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            className="flex flex-wrap justify-center md:justify-start gap-6 font-tech text-muted-metal text-sm mb-10">

            <span className="flex items-center gap-2">
              <Zap size={14} className="text-challenger-orange" /> 485
              HORSEPOWER
            </span>
            <span className="flex items-center gap-2">
              <Gauge size={14} className="text-challenger-orange" /> 0-60 IN
              3.4S
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>{' '}
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.8
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="group relative px-8 py-4 bg-transparent overflow-hidden border-2 border-challenger-orange text-white font-bebas text-xl tracking-wider transition-all hover:text-black">

              <div className="absolute inset-0 w-full h-full bg-challenger-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                VIEW MODELS{' '}
                <ChevronDown
                  size={18}
                  className="group-hover:rotate-90 transition-transform" />

              </span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-zinc-800 border-2 border-zinc-700 text-white font-bebas text-xl tracking-wider hover:border-white transition-all">

              CONTACT DEALER
            </a>
          </motion.div>
        </div>

        {/* Visual Element (Abstract Engine/Grille) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="hidden md:block flex-1 relative h-[500px]">

          {/* Abstract Grille Representation using CSS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-64 border-y-4 border-zinc-800 bg-black/50 backdrop-blur-sm flex items-center justify-between px-4 relative overflow-hidden">
              {/* Mesh Pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                  backgroundSize: '4px 4px'
                }}>
              </div>

              {/* Headlights */}
              <div className="w-32 h-32 rounded-full border-4 border-zinc-700 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border-2 border-zinc-800 bg-black"></div>
                <div className="absolute inset-0 rounded-full border-t-4 border-white/20"></div>
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="text-6xl font-bebas text-zinc-800 tracking-[0.5em]">
                  DODGE
                </div>
                <div className="w-full h-1 bg-zinc-800"></div>
                <div className="w-3/4 h-1 bg-zinc-800"></div>
              </div>

              <div className="w-32 h-32 rounded-full border-4 border-zinc-700 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border-2 border-zinc-800 bg-black"></div>
                {/* Intake Hole */}
                <div className="absolute inset-0 rounded-full border-t-4 border-white/20"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="absolute bottom-8 self-center transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-metal">

        <span className="font-tech text-xs tracking-widest">
          SCROLL TO START
        </span>
        <ChevronDown className="text-challenger-orange" />
      </motion.div>
    </section>);

}