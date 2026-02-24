import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { User, MapPin, Calendar, Briefcase } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title & Stats */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">

            <h2 className="text-6xl md:text-8xl font-bebas text-white leading-none">
              DRIVER
              <br />
              <span className="text-challenger-orange">PROFILE</span>
            </h2>
            <div className="h-2 w-24 bg-brake-red mt-4 skew-x-12"></div>
          </motion.div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <User size={100} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black border border-zinc-700 rounded-sm">
                  <Briefcase className="text-challenger-orange" />
                </div>
                <div>
                  <div className="font-tech text-muted-metal text-xs">
                    EXPERIENCE
                  </div>
                  <div className="font-bebas text-2xl text-white">3+ YEARS</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black border border-zinc-700 rounded-sm">
                  <MapPin className="text-challenger-orange" />
                </div>
                <div>
                  <div className="font-tech text-muted-metal text-xs">
                    LOCATION
                  </div>
                  <div className="font-bebas text-2xl text-white">
                    DURGAPUR, INDIA
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black border border-zinc-700 rounded-sm">
                  <Calendar className="text-challenger-orange" />
                </div>
                <div>
                  <div className="font-tech text-muted-metal text-xs">
                    AVAILABILITY
                  </div>
                  <div className="font-bebas text-2xl text-green-500">
                    IMMEDIATE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Window */}
        <div className="lg:col-span-8">
          <TerminalWindow title="DRIVER_BIO.TXT" className="h-full">
            <div className="font-rajdhani text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                <span className="text-challenger-orange font-bold">
                  WARNING:
                </span>{' '}
                High performance code ahead.
              </p>
              <p>
                I'm a Full Stack Developer with a passion for building
                high-octane web applications. Just like a well-tuned engine, I
                believe in clean code, optimized performance, and aggressive
                reliability.I thrive on solving complex problems, backed by a strong foundation in Data Structures and Algorithms to ensure optimized and scalable solutions.
              </p>
              <p>
                My background spans from frontend UI design that grips the road
                to backend architectures with massive torque. I don't just write
                code; I engineer digital experiences that leave the competition
                in the rearview mirror.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800">
                <div>
                  <h4 className="font-bebas text-xl text-white mb-2">
                    CURRENT BUILD
                  </h4>
                  <p className="font-tech text-sm text-muted-metal">
                    React, TypeScript, Node.js, AWS
                  </p>
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-white mb-2">
                    DREAM GARAGE
                  </h4>
                  <p className="font-tech text-sm text-muted-metal">
                    Rust, WebAssembly, Three.js
                  </p>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>);

}