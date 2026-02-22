import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black text-slate-800"
            >
              Get in Touch
            </motion.h1>
            <p className="text-slate-600 mt-4 text-lg">
              Have questions about our programs or want to partner with RFCI? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-green-600 p-10 rounded-[3rem] text-white shadow-xl shadow-green-900/20">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Our Office</p>
                      <p className="text-green-100">123 Agriculture Lane, North Legon,<br />Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Phone</p>
                      <p className="text-green-100">+233 24 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <p className="text-green-100">info@rfci-ghana.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">Office Hours</h3>
                <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-slate-600">Saturday: By Appointment Only</p>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition">
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Volunteer Opportunities</option>
                    <option>Donation Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="How can we help you?"></textarea>
                </div>

                <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}