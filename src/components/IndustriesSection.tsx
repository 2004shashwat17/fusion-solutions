import { motion } from "framer-motion";
import { Landmark, Shield, HeartPulse, Plane, Package, ShoppingCart, BarChart3 } from "lucide-react";

const industries = [
  { icon: Landmark, label: "Financial Services" },
  { icon: Shield, label: "Insurance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Plane, label: "Travel & Hospitality" },
  { icon: Package, label: "Inventory & Supply Chain" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: BarChart3, label: "Enterprise Reporting" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            Industries We Serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-2xl hover:border-orange/30 hover:shadow-lg transition-all"
            >
              <ind.icon className="w-8 h-8 text-orange" />
              <span className="text-xs font-semibold text-foreground text-center leading-tight">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
