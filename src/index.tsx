import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Smartphone, 
  ThumbsUp, 
  Users 
} from 'lucide-react';

const BottleBoyLandingPage = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-teal-400" />,
      title: "Discover Nearby Bars",
      description: "Find the hottest bars in your area with real-time vibe ratings"
    },
    {
      icon: <Clock className="w-12 h-12 text-emerald-400" />,
      title: "Live Happy Hours",
      description: "Never miss a deal with up-to-the-minute happy hour information"
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-cyan-400" />,
      title: "Community Vibes",
      description: "Vote and share the true atmosphere of each bar"
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-400" />,
      title: "AI Recommendations",
      description: "Personalized bar suggestions based on your preferences"
    }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thanks for your interest! We\'ll keep you updated.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Smartphone className="w-10 h-10 mr-2 text-teal-400" />
          <h1 className="text-2xl font-bold text-teal-300">BottleBoy</h1>
        </div>
        <nav>
          <a href="#features" className="mx-2 text-gray-300 hover:text-teal-300">Features</a>
          <a href="#waitlist" className="mx-2 text-gray-300 hover:text-teal-300">Waitlist</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-teal-300">
            Your Night Out, Optimized
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Find the best bars, skip the lines, and discover amazing vibes
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-teal-600 text-black px-6 py-3 rounded-lg hover:bg-teal-500 transition">
              Download App
            </button>
            <button className="border-2 border-teal-600 text-teal-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Watch Demo
            </button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-teal-300">
            What Makes BottleBoy Awesome
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-2xl flex items-center">
                <div className="mr-6">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-teal-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="waitlist" className="bg-gray-800 rounded-xl p-12 shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-teal-300">
            Join the BottleBoy Waitlist
          </h3>
          <p className="text-gray-400 mb-8">
            Be the first to know when we launch!
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 text-gray-100"
            />
            <button 
              type="submit" 
              className="w-full bg-teal-600 text-black px-6 py-3 rounded-lg hover:bg-teal-500 transition"
            >
              Join Waitlist
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BottleBoy. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-teal-300">Privacy Policy</a>
            <a href="#" className="hover:text-teal-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BottleBoyLandingPage;
