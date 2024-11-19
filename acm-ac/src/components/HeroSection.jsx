/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// TODO: For future maintaing purpose, please add comments
/**
 * ACM Chapter Hero Section Component
 * 
 * A dynamic and interactive hero section featuring:
 * - Full viewport coverage
 * - Responsive design up to 8xl screens
 * - Interactive animations and floating shapes
 * - Gradient effects and decorative elements
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
  const responsiveText = {
    heading: " text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
    description: "text-lg sm:text-xl lg:text-2xl",
    badge: "text-sm sm:text-base lg:text-lg",
  };

  return (
    // Changed to min-h-screen to ensure full viewport height
    <div className="relative h-[85vh] bg-acmblack overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-4 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-acmturquoise" />
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <FloatingShape className="top-[10%] left-[10%] sm:top-20 sm:left-20" delay="0s">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rotate-45 bg-acmpink animate-pulse" />
      </FloatingShape>
      
      <FloatingShape className="top-[20%] right-[15%] sm:top-40 sm:right-32" delay="0.5s">
        <Star className="w-8 h-8 sm:w-10 sm:h-10 text-acmneon animate-spin" />
      </FloatingShape>
      
      <FloatingShape className="top-[60%] left-[20%] sm:bottom-32 sm:left-40" delay="0.3s">
        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-acmturquoise animate-ping" />
      </FloatingShape>
      
      <FloatingShape className="top-1/3 right-1/4" delay="0.7s">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rotate-12 bg-acmorange animate-pulse opacity-75" />
      </FloatingShape>

      {/* Main Content - Centered vertically and horizontally */}
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto text-center space-y-6 sm:space-y-8 py-12 sm:py-16 lg:py-20">
            {/* Welcome Badge */}
            <div className="inline-block animate-bounce">
              <span className={`bg-acmblue px-6 py-3 rounded-full text-white font-['Raleway'] ${responsiveText.badge}`}>
                Welcome to ACM Chapter
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`${responsiveText.heading} font-['Montserrat'] font-black leading-tight`}>
              <span className="block text-white mb-4">
                FOR THE MAKERS,
              </span>
              <span className="block text-acmneon animate-pulse mb-4">
                THE DREAMERS,
              </span>
              <span className="block bg-gradient-to-r from-acmpink via-acmorange to-acmred bg-clip-text text-transparent">
                THE DOERS
              </span>
            </h1>

            {/* Description */}
            <p className={`${responsiveText.description} font-['Raleway'] tracking-wider font-bold text-acmturquoise/80 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto`}>
              Your tech playground at Allegheny College. We are a chapter club of the Association for Computing Machinery Organization. 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <button className="px-8 py-4 bg-acmblue hover:bg-acmblue/80 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105">
                Join Us
              </button>
              <button className="px-8 py-4 border-2 border-acmpink text-acmpink hover:bg-acmpink/10 rounded-2xl font-medium transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-acmblue via-acmpink to-acmneon" />
    </div>
  );
};

export default HeroSection;