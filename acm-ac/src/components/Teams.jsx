/* eslint-disable no-unused-vars */

// TODO: For future maintaing purpose, please add comments
/**
 * ACM Chapter Teams
 * - different team button
 * - team list and description
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const navigate = useNavigate();

  const teams = [
    {
      name: 'Software Engineering',
      color: 'acmblue',
      description: 'Focuses on building web applications and websites.',
      mascot: {
        name: 'CodeZilla',
        concept: 'A friendly monster who loves solving puzzles and cracking code. Playful and slightly nerdy.',
      },
      logo: '/logo/SWE.svg',
      link: '/web-development',
    },
    {
      name: 'Art Tech',
      color: 'acmpink',
      description: 'Bridges creativity and technology with interactive projects.',
      mascot: {
        name: 'CreaTiv',
        concept: 'A vibrant character who is energetic and chaotic.',
      },
      logo: '/logo/ArtTech.svg',
      link: '/art-tech',
    },
    {
      name: 'Data Science',
      color: 'acmorange',
      description: 'Analyzes complex data to find actionable insights.',
      mascot: {
        name: 'Data Diva',
        concept: 'A stylish character that is sassy, insightful, and sarcastic.',
      },
      logo: '/logo/DataDiva.svg',
      link: '/data-science',
    },
    {
      name: 'Game Development',
      color: 'acmblue',
      description: 'Creates interactive and engaging games for various platforms.',
      mascot: {
        name: 'Pixel Pal',
        concept: 'A playful character who loves retro style.',
      },
      logo: '/logo/gameDev.svg',
      link: '/game-development',
    },
    {
      name: 'Artificial Intelligence',
      color: 'acm',
      description: 'Applies AI techniques to build intelligent systems.',
      mascot: {
        name: 'AI the Bot',
        concept: 'A cute, curious robot that loves collecting human stuff. Always asking questions and mimicking humans.',
      },
      logo: '/images/ai-logo.svg',
      link: '/ai',add 
    },
    {
      name: 'Cybersecurity',
      color: 'acmpink',
      description: 'Explores security vulnerabilities and implements countermeasures.',
      mascot: {
        name: 'Cypher Ninja',
        concept: 'A mysterious character dressed in black with neon accents. Secretly friendly and always on guard.',
      },
      logo: '/images/cyber-security-logo.svg',
      link: '/cybersecurity',
    },
    {
      name: 'Robotics',
      color: 'acmgreen',
      description: 'Builds and programs robots for various applications.',
      mascot: {
        name: 'Robo',
        concept: 'An adventurous and brave character who loves taking things apart to study them.',
      },
      logo: '/images/robotics-logo.svg',
      link: '/robotics',
    },
  ];

  return (
    <section className="py-16 bg-acmblack">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-['Montserrat'] font-bold text-white mb-8">Join Your Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <button
              key={index}
              className={`bg-${team.color} rounded-lg p-8 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out`}
              onClick={() => navigate(team.link)}
            >
              <img
                src={team.logo}
                alt={`${team.name} Logo`}
                className="scale-150 h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-['Montserrat'] uppercase font-bold text-white mb-4">
                {team.name}
              </h3>
              <p className=" font-['Raleway'] font-normal text-white">{team.description}</p>
              <div className="mt-4 font-['Raleway'] font-mono text-sm text-white">
                <strong>Mascot:</strong> {team.mascot.name}
                <br />
                <em>{team.mascot.concept}</em>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
