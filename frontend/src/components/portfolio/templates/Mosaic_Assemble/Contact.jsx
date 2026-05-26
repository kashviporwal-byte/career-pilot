import React from 'react';
import { ScatterItem } from './ScatterText';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = ({ socials = {} }) => (
  <section className="py-32 px-6 max-w-3xl mx-auto text-center border-t border-slate-900">
    <ScatterItem>
      <h2 className="text-5xl font-black mb-6 text-white">Let's Build Something</h2>
    </ScatterItem>
    <ScatterItem delay={0.2}>
      <p className="text-xl text-slate-300 mb-12 transition-colors duration-300 hover:text-white">
        Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
    </ScatterItem>
    <ScatterItem delay={0.4}>
      {socials.email ? (
        <a
          href={`mailto:${socials.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-slate-950 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35"
        >
          <Mail />
          Say Hello
          <ArrowRight size={20} />
        </a>
      ) : (
        <button
          type="button"
          aria-disabled="true"
          disabled
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/40 text-slate-950/70 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/10 cursor-not-allowed opacity-70"
        >
          <Mail />
          Say Hello
          <ArrowRight size={20} />
        </button>
      )}
    </ScatterItem>
  </section>
);

export default Contact;
