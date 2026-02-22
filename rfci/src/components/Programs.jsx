import { Sprout, Hospital, BookOpenCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROGRAMS = [
  {
    title: "Seed Distribution",
    desc: "Providing high-yield, drought-resistant seeds to ensure food security.",
    icon: <Sprout className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Healthcare Outreach",
    desc: "Mobile clinics bringing basic medical care to remote farming villages.",
    icon: <Hospital className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Financial Literacy",
    desc: "Training farmers on budgeting, saving, and accessing agricultural loans.",
    icon: <BookOpenCheck className="w-8 h-8 text-green-600" />,
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Our Core Programs</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {PROGRAMS.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/programs" 
            className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition text-lg group"
          >
            View All Programs Detailed 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}