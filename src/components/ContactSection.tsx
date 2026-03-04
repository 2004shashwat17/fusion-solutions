import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-orange uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3 mb-4">
              Let's Build Something Enterprise-Grade
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Ready to architect your next mission-critical system? Get in touch for a strategic consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <a href="tel:+918799764188" className="text-foreground font-semibold hover:text-orange transition-colors">
                    +91 8799764188
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <a href="mailto:enquiry@bwaystechnosolution.co.in" className="text-foreground font-semibold hover:text-orange transition-colors">
                    enquiry@bwaystechnosolution.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Office</p>
                  <p className="text-foreground font-semibold">Pocket 16, Sector 20, Rohini, New Delhi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Project Brief</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange/50 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-accent-foreground px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Send Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
