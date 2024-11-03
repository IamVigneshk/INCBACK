import React, { useState } from 'react';
import { Shield, Book, School, User, Github, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  github: string;
  contributions: string[];
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const FACULTY_MENTOR_LINK = 'http://sibichakkaravarthy.github.io/';

  const teamMembers: TeamMember[] = [
    {
      name: 'Vignesh',
      role: 'Project Lead & Designer',
      github: 'https://github.com/IamVigneshk',
      contributions: [
        'Led overall project architecture and design',
        'Implemented core security scanning modules',
        'Designed user interface and experience',
        'Managed project development lifecycle'
      ]
    },
    {
      name: 'Suneel',
      role: 'Security Researcher & Developer',
      github: 'https://github.com/suneelnalla',
      contributions: [
        'Developed vulnerability assessment modules',
        'Implemented security testing features',
        'Conducted security research and analysis',
        'Backend system architecture'
      ]
    },
    {
      name: 'Jagadish',
      role: 'Frontend Developer',
      github: '#',
      contributions: [
        'Built responsive user interfaces',
        'Implemented frontend features',
        'Created interactive components',
        'UI/UX optimizations'
      ]
    },
    {
      name: 'Yatish',
      role: 'Developer & Tester',
      github: '#',
      contributions: [
        'Quality assurance and testing',
        'Bug fixing and optimization',
        'Feature implementation',
        'Performance testing'
      ]
    }
  ];

  return (
    <div id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About The Project
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Academic Capstone Project in Cybersecurity
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <School className="h-5 w-5 text-cyan-500" />
                  Institution
                </h4>
                <p className="text-gray-300">
                  Vellore Institute of Technology, Andhra Pradesh (VITAP)
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-cyan-500" />
                  Faculty Mentor
                </h4>
                <p className="text-gray-300">
                  <a 
                    href={FACULTY_MENTOR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-400"
                  >
                    Prof. Sibi Chakravarty
                  </a>
                </p>
              </div>
            </div>

            {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
}