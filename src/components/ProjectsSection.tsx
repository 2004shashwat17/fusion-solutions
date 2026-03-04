import { motion } from "framer-motion";
import { Truck, Plane, Hospital, BarChart3, RefreshCw } from "lucide-react";

const projects = [
  {
    icon: Truck,
    title: "Waste Management SaaS Platform",
    region: "USA",
    desc: "Cloud-based route scheduling, dispatch, billing, operations, and accounting system built using MVC .NET, SQL Server, and SSRS.",
    tags: [".NET MVC", "SQL Server", "SSRS", "SaaS"],
  },
  {
    icon: Plane,
    title: "Airlines Reservation System",
    region: "Global",
    desc: "Integrated SABRE APIs for flight availability, booking, ticketing, and payment gateway processing.",
    tags: ["SABRE API", "Payment Gateway", "ASP.NET"],
  },
  {
    icon: Hospital,
    title: "Hospital ERP Platform",
    region: "Enterprise",
    desc: "End-to-end hospital management from patient registration to billing, HR, inventory, and accounting modules.",
    tags: ["ERP", "Healthcare", "Full Stack"],
  },
  {
    icon: BarChart3,
    title: "Financial Reporting Engine",
    region: "Finance",
    desc: "Dynamic reporting platform using ASP.NET and SQL Server Reporting Services for enterprise financial institutions.",
    tags: ["SSRS", "ASP.NET", "Finance"],
  },
  {
    icon: RefreshCw,
    title: "Enterprise Legacy Modernization",
    region: "Global",
    desc: "Migration of legacy applications into modern MVC architecture with structured database optimization.",
    tags: ["Migration", "MVC", "SQL Optimization"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Case Studies</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mt-3">
            Flagship Project Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-light/50 border border-primary-foreground/10 rounded-2xl p-7 hover:border-orange/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                  <p.icon className="w-5 h-5 text-orange" />
                </div>
                <span className="text-xs font-semibold text-orange/70 uppercase tracking-wider">{p.region}</span>
              </div>
              <h3 className="text-lg font-bold font-display text-primary-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-primary-foreground/40 mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary-foreground/5 text-primary-foreground/50 border border-primary-foreground/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
