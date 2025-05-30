import React, { useState } from 'react';
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul Sharma',
    feedback: 'Atharva Movers made my relocation stress-free and smooth. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Indian man portrait
  },
  {
    name: 'Priya Singh',
    feedback: 'Professional team and timely delivery. Will use their services again!',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80', // Indian woman portrait
  },
  {
    name: 'Amit Patel',
    feedback: 'Great packing and careful handling of my belongings. Very satisfied!',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80', // Indian man portrait
  },
];

const galleryImages = [
  // Indian packers and movers, trucks, and moving scenes
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Indian truck
  'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=400', // Indian family moving
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // Indian city street
  'https://images.pexels.com/photos/1439226/pexels-photo-1439226.jpeg?auto=compress&w=400', // Indian workers loading boxes
];

const steps = [
  'Basic Info',
  'Move Details',
  'Review & Submit',
];

const stepVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', date: '', mobile: '', email: '', from: '', to: '', requirement: '', captcha: '',
  });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));
  const handleSubmit = e => { e.preventDefault(); alert('Quote submitted!'); };

  return (
    <>
      <section id="quote" className="bg-yellow-400 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4">
          {/* Form Section */}
          <div className="bg-yellow-300 rounded-lg shadow-lg flex-1 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Get a Free Online Quote!</h2>
            {/* Progress Bar */}
            <div className="flex justify-between mb-8 items-center relative">
              {steps.map((label, idx) => (
                <div key={label} className="flex-1 flex flex-col items-center z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300 ${step >= idx ? 'bg-blue-600 scale-110 shadow-lg' : 'bg-gray-300'}`}>{idx + 1}</div>
                  <span className={`text-xs mt-1 ${step === idx ? 'font-bold text-blue-700' : 'text-gray-600'}`}>{label}</span>
                  {idx < steps.length - 1 && <div className={`h-1 w-full ${step > idx ? 'bg-blue-600' : 'bg-gray-300'}`}></div>}
                </div>
              ))}
              {/* Animated progress bar fill */}
              <motion.div
                className="absolute top-1/2 left-0 h-1 bg-blue-400 rounded-full z-0"
                style={{ width: '100%', transform: 'translateY(-50%)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (step) / (steps.length - 1) || 0.01 }}
                transition={{ duration: 0.5 }}
                originX={0}
              />
            </div>
            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                      <input name="date" value={form.date} onChange={handleChange} type="text" placeholder="dd-mm-yyyy" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                      <input name="mobile" value={form.mobile} onChange={handleChange} type="text" placeholder="Mobile No" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    </div>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <input name="from" value={form.from} onChange={handleChange} type="text" placeholder="From" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                      <input name="to" value={form.to} onChange={handleChange} type="text" placeholder="To" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    </div>
                    <textarea name="requirement" value={form.requirement} onChange={handleChange} placeholder="Requirement" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 min-h-[80px] mt-4" required></textarea>
                    <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
                      <img src="https://dummyimage.com/80x30/cccccc/000000&text=7+9+9+9" alt="captcha" className="border rounded" />
                      <input name="captcha" value={form.captcha} onChange={handleChange} type="text" placeholder="Enter digits from image" className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow text-gray-700">
                      <h4 className="font-bold mb-2">Review Your Details</h4>
                      <ul className="mb-4 space-y-1">
                        <li><b>Name:</b> {form.name}</li>
                        <li><b>Date:</b> {form.date}</li>
                        <li><b>Mobile:</b> {form.mobile}</li>
                        <li><b>Email:</b> {form.email}</li>
                        <li><b>From:</b> {form.from}</li>
                        <li><b>To:</b> {form.to}</li>
                        <li><b>Requirement:</b> {form.requirement}</li>
                        <li><b>Captcha:</b> {form.captcha}</li>
                      </ul>
                      <div className="text-green-600 font-semibold mb-2">All details look good!</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex gap-4 justify-between mt-2">
                {step > 0 && <button type="button" onClick={prev} className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold hover:bg-gray-300 active:scale-95 transition-all duration-150">Back</button>}
                {step < steps.length - 1 && <button type="button" onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-150">Next</button>}
                {step === steps.length - 1 && <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 active:scale-95 transition-all duration-150">Submit</button>}
              </div>
            </form>
          </div>
          {/* Sidebar Section */}
          <div className="bg-black text-white rounded-lg shadow-lg p-8 w-full md:w-96 flex flex-col justify-between">
            <div>
              <p className="text-yellow-400 font-bold mb-2">24*7 Customer Care Support No:</p>
              <div className="flex items-center gap-2 mb-1">
                <FaPhoneAlt className="text-yellow-400" />
                <span className="font-bold text-lg">040 4955 7237</span>
              </div>
              <p className="text-yellow-400 font-bold">+91-9347 08 6020</p>
              <p className="text-yellow-400 font-bold mb-2">+91-8919 75 9556</p>
              <p className="text-sm mb-1">info@swastikmoverspackers.in</p>
              <p className="text-sm mb-4">dhakaramniwas2611@gmail.com</p>
              <p className="text-xs mb-2">We Accept All Debit / Credit Cards<br />Beware of Frauds</p>
              <p className="text-xs mb-2 font-bold">Branch Address</p>
              <p className="text-xs">63C, C Block, Hanuman Nagar, Raghavendra Colony, Shilpa Hills, Kondapur, Hyderabad, Telangana 500084</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-yellow-100 rounded-lg p-6 shadow text-center flex flex-col items-center">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-yellow-400" />
                <p className="italic mb-4">"{t.feedback}"</p>
                <span className="font-bold text-yellow-700">- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery ${idx+1}`} className="rounded-lg shadow w-full h-32 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 flex justify-center gap-6">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
        </div>
      </section>
    </>
  );
} 