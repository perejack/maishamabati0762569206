import { motion } from "framer-motion";
import { Shield, Truck, Palette, ThumbsUp, HeartHandshake, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Our mabati is manufactured using the finest steel with advanced coating technology for maximum durability.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Enjoy complimentary delivery across Kenya. We bring quality roofing right to your doorstep.",
  },
  {
    icon: Palette,
    title: "Wide Color Range",
    description: "Choose from an extensive palette of colors to perfectly match your home's aesthetic.",
  },
  {
    icon: ThumbsUp,
    title: "25+ Year Warranty",
    description: "Rest easy with our comprehensive warranty coverage, ensuring long-term protection for your investment.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Our experienced team provides professional advice and after-sales support for all your roofing needs.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast order processing and delivery times to keep your construction project on schedule.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            The Maisha Mabati{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            When you choose Maisha Mabati, you're choosing quality, reliability, and a partner 
            committed to protecting your home.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl hover:bg-secondary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-3">
                {reason.title}
              </h3>
              
              <p className="text-secondary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/254106020542?text=Hi!%20I%27d%20like%20to%20learn%20more%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-whatsapp px-10 py-4 rounded-full text-lg font-semibold"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
