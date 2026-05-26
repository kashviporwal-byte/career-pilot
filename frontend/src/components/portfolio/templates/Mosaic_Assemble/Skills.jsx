import React from 'react';
import { ScatterItem } from './ScatterText';

const Skills = ({ skills = [] }) => (
  <section className="py-24 px-6 max-w-5xl mx-auto">
    <ScatterItem>
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Technical Arsenal</h2>
    </ScatterItem>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <ScatterItem key={`${skill?.id || skill?.name || 'skill'}-${skill?.category || 'general'}-${i}`} delay={i * 0.05}>
          <div className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-lg cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10">
            {skill?.name}
          </div>
        </ScatterItem>
      ))}
    </div>
  </section>
);

export default Skills;
