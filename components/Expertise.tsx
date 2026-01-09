import React from 'react';
import { Cloud, Server, Box, Workflow, Shield, Globe, Database, Activity } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Technical Domain</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We specialize in the modern cloud stack. From orchestration to observability, we handle the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Large Card: Cloud Architecture */}
          <GlassCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center group" hoverEffect>
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Cloud className="w-8 h-8" />
              </div>
              <div className="text-xs font-mono text-slate-500 border border-slate-300 dark:border-white/10 px-2 py-1 rounded">AWS / GCP / AZURE</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Cloud Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Multi-cloud strategies, serverless implementation, and cost optimization designed for scale.
            </p>
          </GlassCard>

          {/* Card: Kubernetes */}
          <GlassCard className="flex flex-col justify-center group" hoverEffect>
             <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500 dark:text-indigo-400 w-fit mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Box className="w-6 h-6" />
              </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Kubernetes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Production-grade clusters, Helm charting, and GitOps workflows.</p>
          </GlassCard>

          {/* Card: IaC */}
           <GlassCard className="flex flex-col justify-center group" hoverEffect>
             <div className="p-3 bg-pink-500/10 rounded-lg text-pink-500 dark:text-pink-400 w-fit mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Server className="w-6 h-6" />
              </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Terraform / IaC</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Infrastructure as Code. Reproducible, auditable environments.</p>
          </GlassCard>

           {/* Large Card: CI/CD */}
           <GlassCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center group" hoverEffect>
             <div className="flex items-start justify-between mb-4">
               <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                 <Workflow className="w-8 h-8" />
               </div>
               <div className="text-xs font-mono text-slate-500 border border-slate-300 dark:border-white/10 px-2 py-1 rounded">GITHUB ACTIONS / JENKINS</div>
             </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CI/CD Pipelines</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Automated testing and deployment pipelines that reduce time-to-market from days to minutes.
            </p>
          </GlassCard>

           {/* Small Card */}
           <GlassCard className="flex flex-col justify-center group" hoverEffect>
             <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500 dark:text-orange-400 w-fit mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">DevSecOps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Security shifted left. Compliance automation and vulnerability scanning.</p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default Expertise;