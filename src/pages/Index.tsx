
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Brain, Database, CheckCircle, Users, Award, Clock } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-primary text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-8 leading-tight">
              We Build
              <span className="block text-accent">Future-Ready Tech</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge IT infrastructure, intelligent AI solutions, 
              and data-driven insights that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
              Technology Partners You Can <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over a decade, TechForward has been at the forefront of digital transformation. 
              We combine technical expertise with business insight to deliver solutions that not only work today, 
              but scale for tomorrow's challenges.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold font-poppins text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6">
              Our Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure to intelligence, we provide comprehensive technology solutions 
              that drive innovation and accelerate growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join hundreds of companies who trust TechForward to power their digital future. 
              Let's discuss how we can accelerate your success.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/95 transition-all hover:scale-105 hover:shadow-hero"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Index;
