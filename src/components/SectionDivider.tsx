interface SectionDividerProps {
  title: string;
}
export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="w-full py-12 flex items-center justify-center relative overflow-hidden">
      {/* Racing Stripes Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="h-full w-32 bg-challenger-orange transform -skew-x-12 mx-4"></div>
        <div className="h-full w-8 bg-white transform -skew-x-12 mx-2"></div>
        <div className="h-full w-8 bg-white transform -skew-x-12 mx-2"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-challenger-orange"></div>
          <h2 className="text-4xl md:text-6xl font-bebas text-chrome tracking-widest uppercase">
            {title}
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-challenger-orange"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-challenger-orange rounded-full"></div>
          <div className="w-2 h-2 bg-chrome rounded-full"></div>
          <div className="w-2 h-2 bg-brake-red rounded-full"></div>
        </div>
      </div>
    </div>);

}