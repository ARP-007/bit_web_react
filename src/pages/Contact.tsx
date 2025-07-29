
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@bitnbytesol.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Tech Street, Innovation District',
      description: 'San Francisco, CA 94101'
    },
    {
      icon: Clock,
      title: 'Support',
      details: '24/7 Emergency Support',
      description: 'For critical system issues'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can help transform your business 
              with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and how we can help..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Promise */}
              <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-accent mr-2" />
                  <h4 className="font-semibold text-gray-900">Our Promise</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Free consultation call
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Detailed project proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of San Francisco's Innovation District
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-card overflow-hidden animate-fade-in">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
                  bitNbytesol
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Tech Street, Innovation District<br />
                  San Francisco, CA 94101
                </p>
                <p className="text-sm text-gray-500">
                  Interactive map integration available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
