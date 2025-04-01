// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { setIsHovered } = useHover();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
      const result = await emailjs.sendForm(
        'service_uf61yq5', // Create this in EmailJS dashboard
        'template_bwurj1e', // Create this in EmailJS dashboard
        formRef.current!,
        '56q-zcg2RkhHWoP1e' // Get this from EmailJS dashboard
      );
      
      if (result.text === 'OK') {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: 8,
              height: 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 200], opacity: [0, 1, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="section-heading text-center mb-16 text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form and info sections */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a href="mailto:devmuraripavan556@gmail.com" className="text-blue-600 hover:underline">
                    devmuraripavan556@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <a href="tel:+919714978289" className="text-blue-600 hover:underline">
                    +91 9714978289
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Bhavnagar, Gujarat, India</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="w-5 h-5" />, link: 'https://github.com/PAVAN-DEVMURARI' },
                  { icon: <Linkedin className="w-5 h-5" />, link: 'https://www.linkedin.com/in/pavan-devmurari-34a91a290/' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                    onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            
            {formStatus.type && (
              <div className={`p-4 mb-6 rounded-lg ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setIsHovered(null)}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}