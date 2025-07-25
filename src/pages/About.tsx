
import { Users, Target, Award, Globe, CheckCircle } from 'lucide-react';
import teamHero from '../assets/team-hero.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We believe in building long-term partnerships, understanding your business deeply to deliver truly impactful solutions.'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'Quality is non-negotiable. Every project receives our full attention and commitment to exceptional results.'
    },
    {
      icon: Globe,
      title: 'Future Ready',
      description: 'We build scalable, sustainable solutions designed to grow with your business and adapt to tomorrow\'s challenges.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              About <span className="text-accent">TechForward</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're not just another tech company. We're innovation catalysts, digital architects, 
              and your partners in building the future of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, TechForward Solutions has grown from a small team of passionate 
                technologists into a trusted partner for businesses across industries. Our journey 
                began with a simple mission: to bridge the gap between complex technology and 
                real business value.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to serve over 500 clients worldwide, from innovative startups 
                to Fortune 500 companies, helping them navigate digital transformation with confidence 
                and clarity.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="text-3xl font-bold font-poppins text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Expert Team</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={teamHero} 
                  alt="Professional team working together" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl font-bold font-poppins mb-2">500+</div>
                  <div className="text-lg">Happy Clients Worldwide</div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              What <span className="text-gradient">We Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in three core areas that form the foundation of modern digital business success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group glassmorphism bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">IT Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  From cloud migration to DevOps implementation, we build robust, scalable infrastructure 
                  that supports your business growth and ensures maximum uptime.
                </p>
              </div>
            </div>
            
            <div className="group glassmorphism bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">AI & Automation</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Harness the power of artificial intelligence to automate processes, gain insights, 
                  and create intelligent solutions that transform how your business operates.
                </p>
              </div>
            </div>
            
            <div className="group glassmorphism bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Data Analytics</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Turn your data into your competitive advantage with custom analytics solutions, 
                  dashboards, and business intelligence that drive informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              Our Mission & <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're driven by a simple yet powerful mission: to make advanced technology accessible, 
              understandable, and impactful for businesses of all sizes.
            </p>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                "To empower businesses with cutting-edge technology solutions that not only solve today's challenges 
                but anticipate tomorrow's opportunities, creating lasting value and competitive advantage in an 
                ever-evolving digital landscape."
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group text-center p-6 rounded-lg glassmorphism bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:scale-105 hover:shadow-lg transition-all duration-500 animate-fade-in cursor-pointer" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl">
                  <value.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
