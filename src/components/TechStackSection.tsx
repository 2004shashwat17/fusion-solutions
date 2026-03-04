import { motion } from "framer-motion";

const stack = [
  { category: "Languages", items: ["C#", "VB.NET", "ASP.NET", "Java", "HTML5", "jQuery"] },
  { category: "Frameworks", items: [".NET Framework", "MVC", "Entity Framework", "Web API", "SignalR"] },
  { category: "Databases", items: ["SQL Server", "MySQL", "Oracle"] },
  { category: "Reporting", items: ["SSRS", "Crystal Reports"] },
  { category: "Mobile", items: ["Android", "Hybrid Applications"] },
  { category: "Version Control", items: ["Git", "TFS", "Bitbucket"] },
];

const TechStackSection = () => {
  return (
    <section id="technology" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Technology</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mt-3">
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-navy-light/40 border border-primary-foreground/10 rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-orange uppercase tracking-wider mb-4">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-primary-foreground/5 text-primary-foreground/70 border border-primary-foreground/10"
                  >
                    {item}
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

export default TechStackSection;
