import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Import client logos
import googleLogo from "@/assets/logos/google-logo.png";
import amazonLogo from "@/assets/logos/amazon-logo.png";
import microsoftLogo from "@/assets/logos/microsoft-logo.png";
import metaLogo from "@/assets/logos/meta-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import appleLogo from "@/assets/logos/apple-logo.png";
import teslaLogo from "@/assets/logos/tesla-logo.png";
import netflixLogo from "@/assets/logos/netflix-logo.png";

const clients = [
  { name: "Google", logo: googleLogo, industry: "Technology" },
  { name: "Amazon", logo: amazonLogo, industry: "E-commerce & Cloud" },
  { name: "Microsoft", logo: microsoftLogo, industry: "Software & Cloud" },
  { name: "Meta", logo: metaLogo, industry: "Social Media & VR" },
  { name: "IBM", logo: ibmLogo, industry: "Enterprise Technology" },
  { name: "Apple", logo: appleLogo, industry: "Consumer Technology" },
  { name: "Tesla", logo: teslaLogo, industry: "Electric Vehicles" },
  { name: "Netflix", logo: netflixLogo, industry: "Streaming & Entertainment" },
];

const testimonials = [
  {
    quote: "bitNbytesol transformed our digital infrastructure with cutting-edge AI solutions that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO, Tech Corp",
    rating: 5
  },
  {
    quote: "Their expertise in cloud migration and data analytics helped us scale efficiently and reduce costs by 40%.",
    author: "Michael Chen",
    position: "VP Engineering, StartupX",
    rating: 5
  },
  {
    quote: "Outstanding AI implementation that revolutionized our customer service operations. Highly recommended!",
    author: "Emily Rodriguez",
    position: "Operations Director, Enterprise Ltd",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const OurClients = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 -left-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-6">
                Our Trusted Clients
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're proud to have partnered with these amazing companies, delivering innovative IT and AI solutions that drive digital transformation and business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Client Logos Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className="glassmorphism rounded-xl p-8 h-40 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-border/50">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-24 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="text-sm text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {client.industry}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-foreground text-lg">
                Our track record speaks for itself
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Enterprise Clients" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Real feedback from real clients
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glassmorphism rounded-xl p-6 border border-border/50"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Client List?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="group">
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurClients;