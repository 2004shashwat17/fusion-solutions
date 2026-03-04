import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--orange)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--orange)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-1.5 mb-8"
          >
            <Shield className="w-4 h-4 text-orange" />
            <span className="text-sm font-medium text-orange">20+ Years of Enterprise Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6"
          >
            <span className="text-primary-foreground">Engineering Scalable</span>
            <br />
            <span className="text-gradient">Enterprise Systems</span>
            <br />
            <span className="text-primary-foreground/60">Across Global Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mb-10 leading-relaxed"
          >
            From complex ERP platforms to SaaS automation systems — we architect, build,
            and scale mission-critical software for enterprises worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-accent-foreground px-8 py-4 rounded-xl text-base font-semibold transition-colors"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/80 hover:border-orange/40 hover:text-orange px-8 py-4 rounded-xl text-base font-semibold transition-colors"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Code2, label: "200+ Projects Delivered" },
              { icon: Globe, label: "Clients Across 6+ Countries" },
              { icon: Shield, label: "Microsoft Certified" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-primary-foreground/40">
                <item.icon className="w-5 h-5 text-orange/60" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
