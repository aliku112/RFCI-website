import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Sprout, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";

const DETAILED_PROGRAMS = [
  {
    title: "Resilient Crop Initiative",
    icon: <Sprout className="w-12 h-12 text-green-600" />,
    description: "We provide farmers with climate-smart, high-yield seeds and organic fertilizers to combat soil degradation.",
    features: ["Soil Testing Services", "Organic Fertilizer Subsidies", "Drought-Resistant Maize & Soy"],
    impact: "40% average increase in seasonal yields."
  },
  {
    title: "Rural Health Equity",
    icon: <HeartPulse className="w-12 h-12 text-green-600" />,
    description: "Our mobile clinics visit remote farming settlements every month to provide primary healthcare and malaria prevention.",
    features: ["Antenatal Care", "Malaria Screening", "First-Aid Training for Farmers"],
    impact: "Reduced farm-day losses due to illness by 25%."
  },
  {
    title: "Agri-Business Academy",
    icon: <GraduationCap className="w-12 h-12 text-green-600" />,
    description: "Moving from subsistence to business. We train farmers in bookkeeping, market pricing, and digital tools.",
    features: ["Financial Literacy", "Market Linkage Programs", "Smartphone Literacy"],
    impact: "Helped 200+ farmers access formal credit lines."
  }
];

export default function ProgramsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Our Solutions</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 leading-tight">
            Specialized Support for <br /> Rural Success.
          </h1>
        </div>
      </section>

      {/* Detailed Program Sections */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <div className="space-y-24">
          {DETAILED_PROGRAMS.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon Box */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-green-100 rounded-[3rem] flex items-center justify-center shadow-inner relative">
                  {program.icon}
                  <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-50 text-center">
                    <p className="text-xs text-slate-400 font-bold uppercase">Impact</p>
                    <p className="text-green-600 font-bold">{program.impact}</p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-6">{program.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Are you a community leader?</h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto">
            Partner with us to bring these programs to your district or community.
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-50 transition">
            Request Partnership <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}