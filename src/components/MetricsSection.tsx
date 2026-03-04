import { motion } from "framer-motion";
import { Calendar, Briefcase, Globe, TrendingUp, Zap } from "lucide-react";

const metrics = [
  { icon: Calendar, value: "20+", label: "Years of Experience", color: "text-orange" },
  { icon: Briefcase, value: "200+", label: "Projects Delivered", color: "text-orange" },
  { icon: Globe, value: "6+", label: "Countries Served", color: "text-orange" },
  { icon: TrendingUp, value: "Enterprise", label: "Financial Domain Expertise", color: "text-orange" },
  { icon: Zap, value: "Agile", label: "Offshore Delivery Model", color: "text-orange" },
];

const MetricsSection = () => {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center p-6"
            >
              <m.icon className={`w-8 h-8 mx-auto mb-4 ${m.color}`} />
              <div className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-2">
                {m.value}
              </div>
              <div className="text-sm text-primary-foreground/50">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
