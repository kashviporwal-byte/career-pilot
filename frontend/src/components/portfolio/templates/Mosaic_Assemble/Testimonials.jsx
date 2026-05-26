import React from 'react';
import { ScatterItem } from './ScatterText';

const Testimonials = ({ testimonials = [] }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto bg-slate-900/20 rounded-3xl my-24">
    <ScatterItem>
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Words from Others</h2>
    </ScatterItem>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <ScatterItem key={t?.id || `${t?.name || 'testimonial'}-${i}`} delay={i * 0.15}>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10">
            <p className="text-slate-300 italic mb-8 text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover transition-transform duration-300 hover:scale-110" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-300 font-bold transition-all duration-300 hover:scale-110 hover:bg-cyan-500/10 hover:text-cyan-200">
                  {t.name?.charAt(0) || '?'}
                </div>
              )}
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        </ScatterItem>
      ))}
    </div>
  </section>
);

export default Testimonials;
