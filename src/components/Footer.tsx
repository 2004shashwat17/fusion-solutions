import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-primary-foreground/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="BWays Techno Solution" className="h-10" />
        </div>
        <p className="text-sm text-primary-foreground/30 text-center">
          © {new Date().getFullYear()} BWays Techno Solution Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#services" className="text-sm text-primary-foreground/40 hover:text-orange transition-colors">Services</a>
          <a href="#projects" className="text-sm text-primary-foreground/40 hover:text-orange transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-primary-foreground/40 hover:text-orange transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
