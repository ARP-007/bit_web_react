
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Brain, Database, CheckCircle, Users, Award, Clock } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import codingWorkspace from '@/assets/coding-workspace.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const services = [
    {
      icon: Server,
      title: 'IT Services',
      description: 'Complete infrastructure solutions from setup to maintenance. Cloud migration, DevOps, and enterprise software development.',
      features: ['Infrastructure Setup', 'Cloud Migration', 'DevOps Solutions', 'Software Development']
    },
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Intelligent automation and machine learning solutions. Custom AI models, chatbots, and process automation for business efficiency.',
      features: ['Process Automation', 'Machine Learning Models', 'Chatbot Development', 'AI Consulting']
    },
    {
      icon: Database,
      title: 'Data Services',
      description: 'Transform raw data into actionable insights. Data engineering, custom dashboards, reporting, and advanced analytics.',
      features: ['Data Engineering', 'Custom Dashboards', 'Business Intelligence', 'Analytics & Reporting']
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '1000+', label: 'Projects Completed' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: CheckCircle, number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with 3D Scrolling */}
      <motion.section 
        className="relative overflow-hidden gradient-primary text-white"
        style={{ 
          y: heroY,
          rotateX: heroRotate,
          scale: heroScale,
          backgroundImage: `linear-gradient(rgba(30, 42, 74, 0.8), rgba(30, 42, 74, 0.8)), url(${codingWorkspace})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold font-poppins mb-8 leading-tight"
              initial={{ opacity: 0, rotateX: -30 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              We Build
              <motion.span 
                className="block text-accent"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Future-Ready Tech
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Empowering businesses with cutting-edge IT infrastructure, intelligent AI solutions, 
              and data-driven insights that drive real results.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/95 transition-all hover:scale-105 hover:shadow-hero flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.section>

      {/* Company Introduction with 3D Effects */}
      <motion.section 
        className="py-20 bg-gray-50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${teamCollaboration})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-50/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6"
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Technology Partners You Can <span className="text-gradient">Trust</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For over a decade, bitNbytesol has been at the forefront of digital transformation. 
              We combine technical expertise with business insight to deliver solutions that not only work today, 
              but scale for tomorrow's challenges.
            </motion.p>
          </motion.div>
          
          {/* Stats with 3D hover effects */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold font-poppins text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Overview with 3D Card Effects */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-5"
          style={{ 
            backgroundImage: `url(${circuitBoard})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6"
              initial={{ opacity: 0, rotateX: -20 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Core <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From infrastructure to intelligence, we provide comprehensive technology solutions 
              that drive innovation and accelerate growth.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with 3D Parallax */}
      <motion.section 
        className="py-20 gradient-primary text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold font-poppins mb-6"
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join hundreds of companies who trust bitNbytesol to power their digital future. 
              Let's discuss how we can accelerate your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/95 transition-all hover:scale-105 hover:shadow-hero"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            x: [0, -15, 0],
            y: [0, 12, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
