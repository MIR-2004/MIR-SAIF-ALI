import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
const projects = [
{
  title: 'MEET AI',
  desc: 'High-performance analytics platform with real-time data visualization.',
  tags: ['NEXT.JS', 'OPENAI', 'WEBSOCKETS'],
  hp: '707 HP',
  link: 'https://meet-ai-five-ashen.vercel.app/',
  github: 'https://github.com/MIR-2004/Meet-AI'
},
{
  title: 'NOVA',
  desc: 'Headless commerce solution built for speed and conversion optimization.',
  tags: ['NEXT.JS', 'FABRIC.JS', 'CONVEX'],
  hp: '405 HP',
  link: 'https://nova-eta-three.vercel.app/',
  github: 'https://github.com/MIR-2004/NOVA'
},
{
  title: 'FOODI',
  desc: 'End-to-end encrypted messaging app with zero latency.',
  tags: ['REACT', 'NODE', 'MONGODB'],
  hp: '392 HP',
  link: 'https://foodi-gamma-eight.vercel.app/',
  github: 'https://github.com/MIR-2004/FOODI'
}];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: index * 0.1
          }}
          className="group relative bg-zinc-900 border-2 border-zinc-800 hover:border-challenger-orange transition-colors duration-300 flex flex-col h-full">

            {/* Window Sticker Header */}
            <div className="bg-zinc-800 p-2 flex justify-between items-center border-b border-zinc-700 group-hover:bg-challenger-orange group-hover:text-black transition-colors">
              <span className="font-tech text-xs tracking-widest">
                VIN: 00{index + 1}
              </span>
              <span className="font-bebas text-lg">{project.hp}</span>
            </div>

            {/* Image Placeholder */}
            <div className="h-48 bg-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 carbon-fiber opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap
                size={48}
                className="text-zinc-700 group-hover:text-white transition-colors" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-3xl font-bebas text-white mb-2 group-hover:text-challenger-orange transition-colors">
                {project.title}
              </h3>
              <p className="font-rajdhani text-gray-400 mb-6 flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) =>
              <span
                key={tag}
                className="px-2 py-1 bg-black border border-zinc-700 text-xs font-tech text-muted-metal">

                    {tag}
                  </span>
              )}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                href={project.link} target='_blank'
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bebas py-2 hover:bg-challenger-orange transition-colors">

                  <ExternalLink size={16} /> DEMO
                </a>
                <a
                href={project.github} target='_blank'
                className="flex items-center justify-center px-4 border border-zinc-600 text-white hover:border-white hover:bg-zinc-800 transition-colors">

                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}