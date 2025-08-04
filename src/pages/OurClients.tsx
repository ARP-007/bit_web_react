import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Users, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import client logos
import medpointLogo from "@/assets/logos/medpoint-logo.png";
import summitLegalLogo from "@/assets/logos/summit-legal-logo.png";
import pacificManufacturingLogo from "@/assets/logos/pacific-manufacturing-logo.png";
import riversideCreditLogo from "@/assets/logos/riverside-credit-logo.png";
import techflowLogo from "@/assets/logos/techflow-logo.png";
import greenviewConstructionLogo from "@/assets/logos/greenview-construction-logo.png";
import metroAutoLogo from "@/assets/logos/metro-auto-logo.png";
import coastalInsuranceLogo from "@/assets/logos/coastal-insurance-logo.png";

const clients = [
  { name: "MedPoint Healthcare", logo: medpointLogo, industry: "Healthcare Services" },
  { name: "Summit Legal Group", logo: summitLegalLogo, industry: "Legal Services" },
  { name: "Pacific Manufacturing", logo: pacificManufacturingLogo, industry: "Industrial Manufacturing" },
  { name: "Riverside Credit Union", logo: riversideCreditLogo, industry: "Financial Services" },
  { name: "TechFlow Solutions", logo: techflowLogo, industry: "IT Consulting" },
  { name: "GreenView Construction", logo: greenviewConstructionLogo, industry: "Construction & Real Estate" },
  { name: "Metro Auto Group", logo: metroAutoLogo, industry: "Automotive Sales" },
  { name: "Coastal Insurance", logo: coastalInsuranceLogo, industry: "Insurance Services" },
];

const testimonials = [
  {
    quote: "bitNbytesol transformed our patient management system and implemented a seamless EMR solution. Our workflow efficiency improved dramatically.",
    author: "Dr. Sarah Chen",
    position: "Medical Director",
    rating: 5,
    company: "MedPoint Healthcare"
  },
  {
    quote: "Their legal case management software and cloud migration helped us serve clients better while reducing operational overhead by 40%.",
    author: "Michael Rodriguez",
    position: "Managing Partner",
    rating: 5,
    company: "Summit Legal Group"
  },
  {
    quote: "The inventory management system and production analytics dashboard revolutionized our manufacturing processes. Highly recommended.",
    author: "Emily Johnson",
    position: "Operations Manager",
    rating: 5,
    company: "Pacific Manufacturing"
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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    y: -10,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

const OurClients = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Animated Elements - matching Index.tsx */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div data-aos="fade-up" className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
                Our Trusted <span className="text-gradient">Clients</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We're proud to have partnered with these amazing companies to deliver innovative digital solutions that drive real business transformation.
              </p>
              
              <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Trusted by industry leaders worldwide</span>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  variants={logoVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-xl bg-white backdrop-blur-md border border-gray-200 p-8 h-56 flex flex-col items-center justify-center shadow-sm"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                      y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Logo */}
                    <div className="relative z-10 flex flex-col items-center space-y-4">
                      <motion.img
                        src={client.logo}
                        alt={`${client.name} logo - Trusted client of bitNbytesol`}
                        className="max-w-40 max-h-32 object-contain"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, 2, -2, 0],
                          transition: { 
                            rotate: { duration: 0.5 },
                            scale: { type: "spring" as const, stiffness: 300 }
                          }
                        }}
                      />
                      
                      {/* Industry label - always visible now */}
                      <div className="text-center">
                        <motion.p 
                          className="text-sm font-medium text-gray-600"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ 
                            opacity: 1,
                            scale: 1.05,
                            color: "hsl(var(--primary))"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {client.industry}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Enhanced gradient underline effect */}
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Subtle glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
                Proven Track <span className="text-gradient">Record</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our numbers speak for themselves – delivering excellence across every project
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold font-poppins text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
                What Our Clients <span className="text-gradient">Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from real clients who've experienced transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative group"
                >
                  <div className="gradient-card rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Rating stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author info */}
                    <div className="border-t border-gray-200 pt-6">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6" style={{ color: '#16325C' }}>
                Want to Join Our Client List?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Let's discuss how we can transform your business with cutting-edge technology solutions that deliver real results.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#00C6AE', color: 'white' }}
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <p className="text-sm text-white/80 mt-6">
                Free consultation • No commitment required • Response within 24 hours
              </p>
            </div>
          </div>
          
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 0.8, 1],
              x: [0, -15, 0],
              y: [0, 12, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </section>
      </div>
    </div>
  );
};

export default OurClients;