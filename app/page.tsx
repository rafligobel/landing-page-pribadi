'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, PenTool, Layout } from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.div variants={item} className="mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300">
          👋 Welcome to my portfolio
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Crafting Digital <br className="hidden md:block" />
          <span className="gradient-text">Experiences</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I&apos;m a full-stack developer and designer based in Indonesia.
          I build accessible, pixel-perfect, and performant web applications.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/portfolio" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/blog" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium">
            Read Blog
          </Link>
        </motion.div>

        {/* Feature Cards Snippet */}
        <motion.div variants={item} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: <Code size={24} />, title: 'Modern Tech', desc: 'Next.js, React, Tailwind, & Framer Motion' },
            { icon: <PenTool size={24} />, title: 'UI/UX Design', desc: 'Clean, accessible, and user-centric interfaces' },
            { icon: <Layout size={24} />, title: 'Responsive', desc: 'Optimized for all devices and screen sizes' },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
              <div className="mb-4 text-purple-400">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.main>
    </div>
  );
}
