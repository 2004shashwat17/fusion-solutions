import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  { name: "United States", cities: ["New York", "Texas", "California"], x: "20%", y: "40%" },
  { name: "India", cities: ["New Delhi (HQ)"], x: "68%", y: "48%" },
  { name: "Singapore", cities: ["Singapore"], x: "76%", y: "62%" },
  { name: "United Kingdom", cities: ["London"], x: "46%", y: "28%" },
  { name: "Middle East", cities: ["Dubai"], x: "60%", y: "46%" },
  { name: "Europe", cities: ["Netherlands"], x: "49%", y: "30%" },
];

const GlobalPresenceSection = () => {
  return (
    <section className="section-padding bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Global Reach</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mt-3">
            Delivering Across Continents
          </h2>
          <p className="text-primary-foreground/40 mt-4 max-w-xl mx-auto">
            Headquartered in New Delhi with active delivery across 6+ countries.
          </p>
        </motion.div>

        {/* Map area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[2/1] rounded-3xl border border-primary-foreground/10 bg-navy-dark/50 mb-12 overflow-hidden"
        >
          {/* World map SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Simplified continent outlines */}
            {/* North America */}
            <path
              d="M120,120 L160,100 L200,90 L230,95 L260,110 L270,130 L265,160 L250,180 L240,200 L220,220 L200,230 L180,240 L170,260 L190,270 L210,260 L230,250 L250,240 L260,230 L270,220 L280,210 L285,200 L280,190 L270,180 L260,170 L250,160 L245,150 L250,140 L260,135 L270,140 L280,150 L285,160 L280,175 L270,190 L260,210 L250,230 L230,250 L210,260 L195,275 L185,290 L175,300 L160,305 L145,295 L130,280 L120,260 L115,240 L110,220 L105,200 L100,180 L105,160 L110,140 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* South America */}
            <path
              d="M220,310 L240,300 L260,305 L275,320 L285,340 L290,360 L285,380 L275,400 L260,415 L245,420 L235,410 L230,395 L225,380 L220,360 L215,340 L218,320 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* Europe */}
            <path
              d="M430,100 L450,95 L470,100 L490,105 L510,115 L520,130 L515,145 L505,155 L495,160 L480,165 L465,160 L455,150 L445,140 L435,130 L430,120 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* Africa */}
            <path
              d="M450,190 L470,185 L490,190 L510,200 L520,220 L530,250 L535,280 L530,310 L520,340 L505,360 L490,370 L475,365 L460,350 L450,330 L445,310 L440,280 L438,250 L440,220 L445,200 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* Asia / India / Middle East */}
            <path
              d="M540,100 L570,90 L600,85 L640,90 L680,100 L720,110 L750,125 L770,140 L780,160 L775,180 L760,195 L740,200 L720,210 L700,220 L690,240 L680,260 L670,270 L660,260 L650,245 L640,235 L625,230 L610,225 L595,220 L580,215 L565,205 L555,190 L545,175 L535,160 L530,140 L535,120 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* India subcontinent */}
            <path
              d="M640,200 L660,195 L675,205 L685,220 L690,240 L685,260 L675,275 L660,280 L650,270 L645,255 L640,240 L635,220 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              fill="hsl(var(--orange))"
              fillOpacity="0.06"
            />
            {/* Southeast Asia / Indonesia */}
            <path
              d="M720,260 L740,255 L760,260 L780,270 L790,280 L785,290 L770,295 L750,290 L735,280 L725,270 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />
            {/* Australia */}
            <path
              d="M770,340 L800,330 L830,335 L860,345 L875,360 L870,380 L855,395 L835,400 L810,395 L790,385 L775,370 L770,355 Z"
              stroke="hsl(var(--orange))"
              strokeWidth="0.8"
              strokeOpacity="0.15"
              fill="hsl(var(--orange))"
              fillOpacity="0.03"
            />

            {/* Grid lines for map feel */}
            {[100, 150, 200, 250, 300, 350, 400].map((y) => (
              <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="hsl(var(--orange))" strokeWidth="0.3" strokeOpacity="0.05" />
            ))}
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
              <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="hsl(var(--orange))" strokeWidth="0.3" strokeOpacity="0.05" />
            ))}
          </svg>

          {/* Connection lines from HQ (India) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            {regions.filter(r => r.name !== "India").map((r, i) => {
              const targetX = parseFloat(r.x);
              const targetY = parseFloat(r.y);
              return (
                <motion.line
                  key={i}
                  x1="68" y1="48"
                  x2={targetX} y2={targetY}
                  stroke="hsl(22, 83%, 50%)"
                  strokeWidth="0.15"
                  strokeDasharray="0.8 0.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.35 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Location pins */}
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 200 }}
              className="absolute group"
              style={{ left: r.x, top: r.y, transform: "translate(-50%, -50%)" }}
            >
              {/* Pulse ring */}
              <span
                className="absolute rounded-full bg-orange/20"
                style={{
                  width: r.name === "India" ? "24px" : "18px",
                  height: r.name === "India" ? "24px" : "18px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <div
                className={`relative rounded-full bg-orange border-2 border-navy shadow-lg shadow-orange/30 cursor-pointer ${r.name === "India" ? "w-4 h-4" : "w-3 h-3"}`}
              />

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-navy-dark border border-orange/20 rounded-lg px-4 py-2.5 whitespace-nowrap shadow-xl">
                  <p className="text-xs font-bold text-orange">{r.name}</p>
                  <p className="text-[10px] text-primary-foreground/50 mt-0.5">{r.cities.join(", ")}</p>
                </div>
                <div className="w-2 h-2 bg-navy-dark border-b border-r border-orange/20 rotate-45 mx-auto -mt-1" />
              </div>
            </motion.div>
          ))}

          {/* HQ badge */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="absolute bg-orange/10 border border-orange/30 rounded-xl px-4 py-2 flex items-center gap-2 backdrop-blur-sm"
            style={{ left: "72%", top: "42%" }}
          >
            <MapPin className="w-3.5 h-3.5 text-orange" />
            <span className="text-[11px] font-bold text-orange uppercase tracking-wider">HQ — New Delhi</span>
          </motion.div>
        </motion.div>

        {/* Region cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-navy-light/40 border border-primary-foreground/10 rounded-xl p-4 text-center hover:border-orange/30 transition-colors"
            >
              <MapPin className="w-4 h-4 text-orange mx-auto mb-2" />
              <p className="text-sm font-semibold text-primary-foreground">{r.name}</p>
              <p className="text-[11px] text-primary-foreground/40 mt-1">{r.cities.join(", ")}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
