import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Northern Region Seed Bank",
    category: "Agriculture",
    description: "Established a community-managed seed bank to protect local crop diversity.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800",
  },
  {
    title: "Mobile Wellness Clinic",
    category: "Health",
    description: "Providing quarterly health screenings for 500+ smallholder families.",
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=800",
  },
  {
    title: "Agri-Tech Workshop",
    category: "Education",
    description: "Training youth in drone technology for precision crop monitoring.",
    image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&w=800",
  },
];

export default function OurWork() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <header className="bg-green-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold"
          >
            Our Work in the Field
          </motion.h1>
          <p className="mt-6 text-green-100 max-w-2xl mx-auto text-lg">
            From the soil to the clinic, RFCI is dedicated to the holistic well-being of the Ghanaian farmer.
          </p>
        </div>
      </header>

      {/* Project Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 text-slate-800">{project.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <button className="mt-6 text-green-700 font-bold hover:text-green-800 transition flex items-center gap-2">
                  Read Full Report <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center bg-slate-900 rounded-[3rem] p-16 text-white">
          <h2 className="text-3xl font-bold">Want to support these projects?</h2>
          <p className="mt-4 text-slate-400">Join us in making a tangible difference today.</p>
          <button className="mt-8 bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-xl shadow-green-900/40">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
}