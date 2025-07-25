
import { Server, Brain, Database, Cloud, Code, Shield, BarChart3, Bot, Cpu, HardDrive, Users, Zap } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime and maximum security.',
      features: ['AWS/Azure/GCP Migration', 'Hybrid Cloud Solutions', 'Cost Optimization', '24/7 Monitoring']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization']
    },
    {
      icon: Shield,
      title: 'DevOps & Security',
      description: 'Automated deployment pipelines and comprehensive security implementations.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Security Audits', 'Compliance Management']
    },
    {
      icon: HardDrive,
      title: 'Infrastructure Setup',
      description: 'Robust, scalable infrastructure designed for performance and reliability.',
      features: ['Server Configuration', 'Network Architecture', 'Load Balancing', 'Disaster Recovery']
    }
  ];

  const aiServices = [
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'Intelligent conversational AI that enhances customer experience and support.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard']
    },
    {
      icon: Cpu,
      title: 'Machine Learning Models',
      description: 'Custom ML models that solve specific business problems and drive insights.',
      features: ['Predictive Analytics', 'Classification Models', 'Recommendation Systems', 'Model Deployment']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that streamlines workflows and reduces manual tasks.',
      features: ['RPA Implementation', 'Workflow Optimization', 'Integration Solutions', 'Performance Monitoring']
    },
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic guidance on AI adoption and implementation for your business.',
      features: ['AI Strategy Development', 'Use Case Identification', 'Technology Selection', 'ROI Assessment']
    }
  ];

  const dataServices = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and warehouses for scalable data operations.',
      features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time Processing', 'Data Quality Management']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with custom BI solutions.',
      features: ['Executive Dashboards', 'KPI Tracking', 'Automated Reporting', 'Self-service Analytics']
    },
    {
      icon: Users,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics solutions that drive data-driven decision making.',
      features: ['Advanced Analytics', 'Predictive Modeling', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: Server,
      title: 'Data Architecture',
      description: 'Design scalable, secure data architecture that grows with your business.',
      features: ['Architecture Design', 'Data Governance', 'Security Implementation', 'Performance Optimization']
    }
  ];

  const ServiceSection = ({ title, description, services, delay = 0 }: {
    title: string;
    description: string;
    services: any[];
    delay?: number;
  }) => (
    <section className="py-16">
      <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
        <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="animate-fade-in" 
            style={{ animationDelay: `${delay + (index * 0.1)}s` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* IT Services */}
        <ServiceSection
          title="IT Services"
          description="Complete infrastructure solutions from setup to maintenance. We ensure your technology foundation is robust, secure, and scalable."
          services={itServices}
          delay={0}
        />

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* AI Services */}
        <ServiceSection
          title="AI Services"
          description="Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions for your business."
          services={aiServices}
          delay={0.2}
        />

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Data Services */}
        <ServiceSection
          title="Data Services"
          description="Transform raw data into actionable insights. From engineering to visualization, we help you make data-driven decisions."
          services={dataServices}
          delay={0.4}
        />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="mailto:hello@techforward.com"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
