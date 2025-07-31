import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Users, TrendingUp, Shield } from "lucide-react";
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
  { name: "Google", logo: googleLogo, industry: "Search & Cloud Technology" },
  { name: "Amazon", logo: amazonLogo, industry: "E-commerce & AWS" },
  { name: "Microsoft", logo: microsoftLogo, industry: "Enterprise Software" },
  { name: "Meta", logo: metaLogo, industry: "Social Media & VR/AR" },
  { name: "IBM", logo: ibmLogo, industry: "Enterprise AI Solutions" },
  { name: "Apple", logo: appleLogo, industry: "Consumer Technology" },
  { name: "Tesla", logo: teslaLogo, industry: "Electric Vehicles & Energy" },
  { name: "Netflix", logo: netflixLogo, industry: "Streaming & Entertainment" },
];

const testimonials = [
  {
    quote: "bitNbytesol transformed our entire digital infrastructure with cutting-edge AI solutions that exceeded every expectation. Their expertise is unmatched.",
    author: "Sarah Chen",
    position: "CTO, TechFlow Inc.",
    rating: 5,
    company: "TechFlow"
  },
  {
    quote: "The cloud migration and data analytics implementation helped us scale efficiently while reducing operational costs by 45%. Outstanding results.",
    author: "Michael Rodriguez",
    position: "VP Engineering, DataCore",
    rating: 5,
    company: "DataCore"
  },
  {
    quote: "Their AI-powered customer service solution revolutionized our operations. Response times improved by 80% and customer satisfaction soared.",
    author: "Emily Johnson",
    position: "Operations Director, ServiceHub",
    rating: 5,
    company: "ServiceHub"
  }
];

const stats = [
  { icon: Users, number: "150+", label: "Projects Delivered", color: "text-blue-500" },
  { icon: TrendingUp, number: "98%", label: "Client Satisfaction", color: "text-green-500" },
  { icon: Shield, number: "50+", label: "Enterprise Clients", color: "text-purple-500" },
  { icon: Sparkles, number: "24/7", label: "Premium Support", color: "text-orange-500" }
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

const floatingAnimation = {
  y: [-20, 20, -20],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity
  }
};

const OurClients = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 4 }
          }}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        />
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
                  Our Trusted Clients
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We're proud to have partnered with these amazing companies to deliver innovative digital solutions that drive real business transformation.
              </p>
              
              <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Trusted by industry leaders worldwide</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Client Logos Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 h-48 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Logo */}
                    <div className="relative z-10 flex flex-col items-center space-y-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo - Trusted client of bitNbytesol`}
                        className="max-w-20 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                      
                      {/* Industry label */}
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {client.industry}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Statistics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Proven Track Record
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Our numbers speak for themselves – delivering excellence across every project
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl">
                    <div className={`inline-flex p-3 rounded-xl bg-white/10 mb-4 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Real feedback from real clients who've experienced transformation
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
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl">
                    {/* Rating stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author info */}
                    <div className="border-t border-white/20 pt-6">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Want to Join Our Client List?
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                    Let's discuss how we can transform your business with cutting-edge technology solutions that deliver real results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link to="/contact">
                        Let's Talk
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-white/10">
                      <Link to="/services">
                        View Our Services
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    Free consultation • No commitment required • Response within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurClients;