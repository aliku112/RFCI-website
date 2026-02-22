import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { CreditCard, Landmark, Smartphone, CheckCircle2 } from "lucide-react";

export default function Donate() {
  const paymentMethods = [
    {
      title: "Mobile Money",
      icon: <Smartphone className="text-green-600" size={28} />,
      description: "MTN, AT, Telecel",
      details: "*170# or Merchant ID: 123456",
      color: "bg-yellow-50",
    },
    {
      title: "Bank Transfer",
      icon: <Landmark className="text-blue-600" size={28} />,
      description: "Direct Deposit / EFT",
      details: "GCB Bank - Acc: 00123456789",
      color: "bg-blue-50",
    },
    {
      title: "Cards (Visa/Mastercard)",
      icon: <CreditCard className="text-purple-600" size={28} />,
      description: "Credit or Debit Cards",
      details: "Pay securely via Flutterwave/Paystack",
      color: "bg-purple-50",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <div className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-800"
          >
            Support RFCI
          </motion.h1>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Your contribution directly funds seeds, medical supplies, and training for rural farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{method.title}</h3>
              <p className="text-slate-500 mt-2 text-sm">{method.description}</p>
              
              <div className="mt-6 p-4 bg-slate-50 rounded-xl w-full border border-dashed border-slate-200">
                <p className="text-xs font-mono text-slate-600 overflow-wrap-anywhere">
                  {method.details}
                </p>
              </div>

              <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors">
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-slate-400">
          <div className="flex items-center gap-2 text-sm mb-2">
            <CheckCircle2 size={16} className="text-green-500" />
            <span>Secure SSL Encrypted Transactions</span>
          </div>
        </div>
      </div>
    </div>
  );
}