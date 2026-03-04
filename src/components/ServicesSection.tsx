import { motion } from "framer-motion";
import { Server, Cloud, RefreshCw, Rocket } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Enterprise Software Engineering",
    items: ["Custom ERP Systems", "Financial & Insurance Platforms", "Hospital Management Systems", "Supply Chain & Inventory", "Reporting & Analytics"],
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Engineering",
    items: ["Multi-tenant SaaS Applications", "API & System Integrations", "MVC Architecture", "Entity Framework & LINQ", "SQL Optimization & Cloud Deployment"],
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    items: ["Legacy Modernization", "Crystal to SSRS Migration", "Workflow Automation", "Enterprise Data Structuring"],
  },
  {
    icon: Rocket,
    title: "Startup Product Engineering",
    items: ["MVP Architecture", "Scalable Backend Systems", "API-Driven Applications", "Long-Term Technical Partnership"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Core Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mt-3">
            Services Architecture
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            End-to-end engineering capabilities spanning enterprise platforms, cloud systems, and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-orange/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                <s.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
