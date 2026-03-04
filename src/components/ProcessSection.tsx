import { motion } from "framer-motion";
import { Search, PenTool, Zap, CheckCircle, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery", desc: "Requirements & analysis" },
  { icon: PenTool, label: "Architecture", desc: "System design & planning" },
  { icon: Zap, label: "Agile Development", desc: "Sprint-based delivery" },
  { icon: CheckCircle, label: "QA & Testing", desc: "Rigorous quality assurance" },
  { icon: Rocket, label: "Deployment", desc: "Production launch" },
  { icon: Headphones, label: "Support", desc: "Ongoing maintenance" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            Our Delivery Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-orange" />
              </div>
              <div className="text-xs font-bold text-orange mb-1">0{i + 1}</div>
              <h3 className="text-sm font-bold font-display text-foreground mb-1">{s.label}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
