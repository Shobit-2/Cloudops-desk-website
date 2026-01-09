import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const Engagement: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="engagement" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/5 dark:bg-sky-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Engagement Models</h2>
          <p className="text-slate-600 dark:text-slate-400">Flexible structures for startups and enterprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hourly */}
          <div className="flex flex-col">
            <GlassCard className="h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hourly</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">On-demand troubleshooting and optimization.</p>
                <ul className="space-y-4 mb-8">
                  {['Pay-as-you-go', 'No long-term contracts', 'Emergency Support', 'Task-based execution'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center">Get Custom Quote</Button>
            </GlassCard>
          </div>

          {/* Card 2: Retainer (Highlighted) */}
          <div className="relative flex flex-col transform md:-translate-y-4">
             {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-3xl blur opacity-20" />
            
            <GlassCard className="h-full flex flex-col justify-between bg-slate-900/90 dark:bg-slate-900/80 border-sky-500/30 shadow-2xl relative">
               <div className="absolute top-0 right-0 p-4">
                 <span className="bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
               </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Retainer & Project</h3>
                <p className="text-slate-300 dark:text-slate-400 text-sm mb-6">Dedicated resources for scaling infrastructure.</p>
                <ul className="space-y-4 mb-8">
                  {['Dedicated DevOps Engineer', 'Architecture Design', '24/7 Monitoring Setup', 'Priority SLA Support', 'Weekly Strategy Calls'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <div className="p-1 bg-sky-500/20 rounded-full">
                        <Check className="w-3 h-3 text-sky-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={scrollToQuote} variant="primary" className="w-full justify-center shadow-lg shadow-sky-500/20">Get Custom Quote</Button>
            </GlassCard>
          </div>

          {/* Card 3: Training */}
          <div className="flex flex-col">
            <GlassCard className="h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Guidance & Training</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Empower your internal team.</p>
                <ul className="space-y-4 mb-8">
                  {['Team Workshops', 'Code Reviews', 'Best Practices Audit', 'Documentation Setup'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center">Get Custom Quote</Button>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Engagement;