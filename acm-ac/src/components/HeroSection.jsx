/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/*
LAYOUT GUIDELINES: 
- Catchy slogan with interactive/animation background
- CTA buttons ("Join Us")
 */

import React from 'react';
import { Star } from 'lucide-react';

const FloatingShape = ({ children, className, delay }) => (
  <div
    className={`absolute animate-bounce ${className}`}
    style={{ animationDelay: delay }}
  >
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative py-12 px-8 bg-acmblack overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-acmturquoise/20" />
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <FloatingShape className="top-20 left-20" delay="0s">
        <div className="w-8 h-8 rotate-45 bg-acmpink animate-pulse" />
      </FloatingShape>
      
      <FloatingShape className="top-40 right-32" delay="0.5s">
        <Star className="w-10 h-10 text-acmneon animate-spin" />
      </FloatingShape>
      
      <FloatingShape className="bottom-32 left-40" delay="0.3s">
        <div className="w-6 h-6 rounded-full bg-acmturquoise animate-ping" />
      </FloatingShape>
      
      <FloatingShape className="top-1/3 right-1/4" delay="0.7s">
        <div className="w-12 h-12 rotate-12 bg-acmorange animate-pulse opacity-75" />
      </FloatingShape>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-8xl mx-auto text-center space-y-8">
          {/* Small Heading */}
          <div className="inline-block animate-bounce">
            <span className="bg-acmblue px-4 py-2 rounded-full text-white font-medium">
              Welcome to ACM Chapter
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl font-bold leading-tight">
            <span className="block text-white mb-4">
              FOR THE MAKERS,
            </span>
            <span className="block text-acmneon animate-pulse">
              THE DREAMERS,
            </span>
            <span className="block bg-gradient-to-r from-acmpink via-acmorange to-acmred bg-clip-text text-transparent">
              THE DOERS
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-acmturquoise/80 max-w-2xl mx-auto">
            Your tech playground at Allegheny College. Where creativity meets code, and innovation knows no bounds.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 pt-8">
            <button className="px-8 py-3 bg-acmblue hover:bg-acmblue/80 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Join Us
            </button>
            <button className="px-8 py-3 border-2 border-acmpink text-acmpink hover:bg-acmpink/10 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-acmblue via-acmpink to-acmneon" />
    </div>
  );
};

export default HeroSection;
