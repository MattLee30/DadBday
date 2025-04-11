'use client';

import Slideshow from './Slideshow';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-teal-50">
      <Slideshow />

      {/* Group that contains both cake and text box */}
      <div className="group relative">
        {/* White Rounded Box - hidden by default, shown on group hover */}
        <div className="relative z-10 p-8 bg-white rounded-xl shadow-lg max-w-3xl w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="text-4xl font-bold mb-8 text-teal-800 animate-bounce">
            Happy Birthday Dad!
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-teal-600 animate-bounce">
            (Your present will be in your email today!)
          </h2>
        </div>

        {/* Move cake to center bottom of the screen */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 z-10 mt-8">
          {/* Cake Plate */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-4 bg-gray-300 rounded-full shadow-md" />
          
          {/* Cake Base Layer */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-20 bg-teal-600 rounded-t-lg">
            {/* Base Frosting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3 bg-teal-300 rounded-t-lg" />
          </div>
          
          {/* Cake Middle Layer */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-44 h-16 bg-teal-500 rounded-t-lg">
            {/* Middle Frosting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3 bg-teal-300 rounded-t-lg" />
          </div>
          
          {/* Cake Top Layer */}
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-36 h-12 bg-teal-400 rounded-t-lg">
            {/* Top Frosting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-3 bg-teal-300 rounded-t-lg" />
          </div>
          
          {/* Candles */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Flame */}
                <div className="relative w-4 h-4 mb-1">
                  <div className="absolute w-full h-full bg-yellow-400 rounded-full animate-flicker" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-200 rounded-full animate-flicker-delay" />
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-white rounded-full opacity-70" />
                </div>
                {/* Candle Stick */}
                <div className="w-3 h-12 bg-blue-200 rounded-sm shadow-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.1) translateX(1px); 
          }
          50% { 
            opacity: 0.9; 
            transform: scale(0.95) translateX(-1px); 
          }
          75% { 
            opacity: 0.85; 
            transform: scale(1.05); 
          }
        }
        
        @keyframes flicker-delay {
          0%, 100% { 
            opacity: 0.7; 
            transform: scale(0.8); 
          }
          25% { 
            opacity: 0.6; 
            transform: scale(0.9) translateX(1px); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(0.7) translateX(-1px); 
          }
          75% { 
            opacity: 0.75; 
            transform: scale(0.85); 
          }
        }

        .animate-flicker {
          animation: flicker 2s infinite ease-in-out;
        }
        
        .animate-flicker-delay {
          animation: flicker-delay 2s infinite ease-in-out 0.3s;
        }
      `}</style>
    </main>
  );
}
