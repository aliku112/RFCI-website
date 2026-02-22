import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-150 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600" 
          className="w-full h-full object-cover"
          alt="African Farmer"
        />
        {/* bg-linear-to-r is used for Tailwind v4; use bg-gradient-to-r for v3 */}
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Growing Together</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Empowering the <span className="text-green-400">Hands</span> that Feed the Nation.
          </h1>
          <p className="text-xl mt-6 text-slate-200">
            Rural Farmer Care Initiative (RFCI) provides smallholder farmers with the tools, 
            health outreach, and education they need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link 
              to="/donate" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 transition-all active:scale-95 text-center"
            >
              Support a Farmer
            </Link>
            <Link 
              to="/programs" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
            >
              Our Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}