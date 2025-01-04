import React, { useState, useEffect } from "react";
import { Rocket, Moon, Star, Coins, ChevronLeft, ChevronRight } from "lucide-react";

const MemecoinSite = () => {
  const slides = ["To the Moon and Beyond! 🚀", "1000x Potential Growth 📈", "Join Our Strong Community 🤝", "Early Investors Get Special Rewards 🎁", "Liquidity Locked for 2 Years 🔒"];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center relative">
        <div className="flex justify-center mb-6">
          <Coins className="w-24 h-24 text-yellow-400" />
        </div>
        <h1 className="text-6xl font-bold mb-4">$BOOB COIN</h1>

        <div className="relative max-w-2xl mx-auto mb-8">
          <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-800 p-2 rounded-full z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden h-32">
            <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex items-center justify-center">
                  <div className="text-2xl px-4">{slide}</div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-800 p-2 rounded-full z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition">Buy $BOOB Now</button>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-800 p-8 rounded-xl text-center">
            <Moon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Moon Mission</h3>
            <p>Join our journey to astronomical heights!</p>
          </div>
          <div className="bg-purple-800 p-8 rounded-xl text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community First</h3>
            <p>Power to the meme lords!</p>
          </div>
          <div className="bg-purple-800 p-8 rounded-xl text-center">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Infinite Potential</h3>
            <p>No limits, only gains!</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Token Distribution</h3>
            <ul className="space-y-2">
              <li>Total Supply: 69,420,000,000 $BOOB</li>
              <li>Liquidity Pool: 40%</li>
              <li>Community Rewards: 30%</li>
              <li>Development: 20%</li>
              <li>Marketing: 10%</li>
            </ul>
          </div>
          <div className="bg-blue-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>2% Reflection to Holders</li>
              <li>3% Added to Liquidity</li>
              <li>Anti-Whale Mechanism</li>
              <li>Locked Liquidity</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm opacity-75">$BOOB is a meme coin for entertainment purposes. Trade at your own risk. DYOR.</p>
      </footer>
    </div>
  );
};

export default MemecoinSite;
