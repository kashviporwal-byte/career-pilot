import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = ({ data = {}, socials = {} }) => {
  const titleLetters = (data.name || '').split('');
  const letterOffsets = useMemo(
    () =>
      titleLetters.map(() => ({
        y: Math.random() * 200 - 100,
        x: Math.random() * 200 - 100,
        rotate: Math.random() * 90,
      })),
    [titleLetters.length, data.name],
  );

  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-6 z-10">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-4 flex flex-wrap justify-center overflow-hidden py-4">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{
                opacity: 0,
                y: letterOffsets[i]?.y ?? 0,
                x: letterOffsets[i]?.x ?? 0,
                rotate: letterOffsets[i]?.rotate ?? 0,
              }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05, type: 'spring', stiffness: 100 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-300 to-violet-500"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-3xl text-cyan-400 font-light tracking-wide mb-10"
        >
          {data.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socials.github && (
            <a
              href={socials.github}
              aria-label="GitHub profile"
              className="p-3 bg-slate-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Github />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              aria-label="LinkedIn profile"
              className="p-3 bg-slate-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Linkedin />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              aria-label="Twitter profile"
              className="p-3 bg-slate-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Twitter />
            </a>
          )}
          {socials.email && (
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="p-3 bg-slate-900 rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
            >
              <Mail />
            </a>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
