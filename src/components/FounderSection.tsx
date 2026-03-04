import { motion } from "framer-motion";
import { Award, Globe, Shield, Code2 } from "lucide-react";

const credentials = [
  { icon: Award, text: "Microsoft Certified Professional" },
  { icon: Globe, text: "20+ Years of Global Delivery" },
  { icon: Shield, text: "Enterprise Architecture Expert" },
  { icon: Code2, text: "Multi-Domain Software Delivery" },
];

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-orange uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mt-3 mb-4">
              Ravi K. Saxena
            </h2>
            <p className="text-lg text-orange font-medium mb-6">Enterprise Software Architect & Founder</p>
            <p className="text-primary-foreground/50 leading-relaxed mb-8">
              With over 20 years of global delivery experience, Ravi leads BWays with deep expertise in
              enterprise financial systems, architecture design, offshore coordination, technical leadership,
              and multi-domain software delivery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-orange" />
                  </div>
                  <span className="text-sm text-primary-foreground/60">{c.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange/10 via-navy-light to-navy-dark border border-primary-foreground/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold font-display text-orange/20 mb-2">RKS</div>
                <div className="text-sm text-primary-foreground/30">Technical Head</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
              <span className="text-2xl font-bold font-display text-orange">20+</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
