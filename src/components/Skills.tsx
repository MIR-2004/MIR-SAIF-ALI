
import { motion } from 'framer-motion';
interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}
function SkillBar({
  name,
  level,
  color = 'bg-challenger-orange'
}: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-1">
        <span className="font-bebas text-xl tracking-wide text-white">
          {name}
        </span>
        <span className="font-tech text-challenger-orange">{level}%</span>
      </div>
      <div className="h-4 bg-zinc-900 border border-zinc-700 skew-x-12 relative overflow-hidden">
        {/* Grid lines on track */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[...Array(10)].map((_, i) =>
          <div key={i} className="w-[1px] h-full bg-zinc-800"></div>
          )}
        </div>
        <motion.div
          initial={{
            width: 0
          }}
          whileInView={{
            width: `${level}%`
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className={`h-full ${color} relative`}>

          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
        </motion.div>
      </div>
    </div>);

}
export function Skills() {
  const frontend = [
  {
    name: 'REACT / NEXT.JS',
    level: 95
  },
  {
    name: 'JAVASCRIPT',
    level: 90
  },
  {
    name: 'TYPESCRIPT',
    level: 75
  },
  {
    name: 'TAILWIND CSS',
    level: 98
  }];

  const backend = [
  {
    name: 'NODE.JS',
    level: 88
  },
  {
    name: 'POSTGRESQL',
    level: 85
  },
  {
    name: 'DOCKER',
    level: 70
  },
  {
    name: 'AWS',
    level: 60
  }];

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Frontend Engine */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b-2 border-zinc-800 pb-4">
            <h3 className="text-3xl font-bebas text-white">
              FRONTEND <span className="text-muted-metal">ENGINE</span>
            </h3>
            <div className="flex-1 text-right font-tech text-xs text-challenger-orange">
              RPM: 7200
            </div>
          </div>
          <div className="space-y-2">
            {frontend.map((skill) =>
            <SkillBar key={skill.name} {...skill} />
            )}
          </div>
        </div>

        {/* Backend Drivetrain */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b-2 border-zinc-800 pb-4">
            <h3 className="text-3xl font-bebas text-white">
              BACKEND <span className="text-muted-metal">DRIVETRAIN</span>
            </h3>
            <div className="flex-1 text-right font-tech text-xs text-brake-red">
              TORQUE: 650 LB-FT
            </div>
          </div>
          <div className="space-y-2">
            {backend.map((skill) =>
            <SkillBar key={skill.name} {...skill} color="bg-brake-red" />
            )}
          </div>
        </div>
      </div>

      {/* Dyno Chart Decoration */}
      <div className="mt-16 border-t border-zinc-800 pt-8 flex justify-center">
        <div className="w-full max-w-4xl h-32 bg-zinc-900/50 border border-zinc-800 relative overflow-hidden flex items-end px-4 gap-1">
          {[...Array(40)].map((_, i) =>
          <div
            key={i}
            className="flex-1 bg-zinc-800 hover:bg-challenger-orange transition-colors duration-300"
            style={{
              height: `${Math.random() * 80 + 20}%`
            }}>
          </div>
          )}
          <div className="absolute top-2 left-2 font-tech text-xs text-muted-metal">
            DYNO READOUT_V2.0
          </div>
        </div>
      </div>
    </section>);

}