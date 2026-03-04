import { motion } from "framer-motion";

const enterpriseClients = ["American Express", "ING"];
const usClients = [
  "DesertMicro", "Paradigm Consulting", "Savannah Luxury Rentals",
  "The Gallon Foundation", "Rush Order Tees", "Circuitronix",
  "CIBA Insurance Services", "Centek Global Solutions", "Long Island Hotstove Baseball"
];
const internationalClients = [
  "Food Experts Solutions Ltd", "SHIN YA O YA PTE LTD",
  "LIM JOO HUAT ENTERPRISE PTE LTD", "DSB", "Hurdletree Associates Ltd"
];

const LogoCard = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-6 py-4 bg-card rounded-xl border border-border hover:border-orange/30 transition-colors min-h-[64px]">
    <span className="text-sm font-semibold text-foreground/70 text-center leading-tight">{name}</span>
  </div>
);

const ClientLogos = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange uppercase tracking-widest">Trusted By</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            Global Enterprises & Growing Businesses
          </h2>
        </motion.div>

        {/* Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Enterprise & Financial Institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {enterpriseClients.map((c) => <LogoCard key={c} name={c} />)}
          </div>
        </motion.div>

        {/* US Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Active US-Based Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {usClients.map((c) => <LogoCard key={c} name={c} />)}
          </div>
        </motion.div>

        {/* International */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">International Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {internationalClients.map((c) => <LogoCard key={c} name={c} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
