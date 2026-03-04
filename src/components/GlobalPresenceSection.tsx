import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  { name: "United States", cities: ["New York", "Texas", "California"], x: "22%", y: "38%" },
  { name: "India", cities: ["New Delhi (HQ)"], x: "65%", y: "45%" },
  { name: "Singapore", cities: ["Singapore"], x: "73%", y: "58%" },
  { name: "United Kingdom", cities: ["London"], x: "46%", y: "28%" },
  { name: "Middle East", cities: ["Dubai"], x: "58%", y: "42%" },
  { name: "Europe", cities: ["Netherlands"], x: "48%", y: "30%" },
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
          {/* Simplified world map dots background */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--orange)) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />

          {/* Connection lines (simplified) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            <line x1="65" y1="45" x2="22" y2="38" stroke="hsl(22, 83%, 50%)" strokeWidth="0.15" strokeDasharray="1 1" opacity="0.3" />
            <line x1="65" y1="45" x2="46" y2="28" stroke="hsl(22, 83%, 50%)" strokeWidth="0.15" strokeDasharray="1 1" opacity="0.3" />
            <line x1="65" y1="45" x2="73" y2="58" stroke="hsl(22, 83%, 50%)" strokeWidth="0.15" strokeDasharray="1 1" opacity="0.3" />
            <line x1="65" y1="45" x2="58" y2="42" stroke="hsl(22, 83%, 50%)" strokeWidth="0.15" strokeDasharray="1 1" opacity="0.3" />
            <line x1="65" y1="45" x2="48" y2="30" stroke="hsl(22, 83%, 50%)" strokeWidth="0.15" strokeDasharray="1 1" opacity="0.3" />
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
              <span className="absolute inset-0 w-5 h-5 -m-1 rounded-full bg-orange/20 animate-ping" style={{ animationDuration: "2.5s" }} />
              <div className="relative w-3 h-3 rounded-full bg-orange border-2 border-navy shadow-lg shadow-orange/30 cursor-pointer" />

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-navy-dark border border-primary-foreground/10 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                  <p className="text-xs font-bold text-orange">{r.name}</p>
                  <p className="text-[10px] text-primary-foreground/40">{r.cities.join(", ")}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* HQ badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute bg-orange/10 border border-orange/30 rounded-xl px-3 py-2 flex items-center gap-2"
            style={{ left: "68%", top: "52%" }}
          >
            <MapPin className="w-3 h-3 text-orange" />
            <span className="text-[10px] font-bold text-orange uppercase tracking-wider">HQ — New Delhi</span>
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
