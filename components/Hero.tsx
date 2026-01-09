import React from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Available for Immediate Deployment
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            On-Demand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-500">
              Cloud & DevOps
            </span> <br />
            Expertise.
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Scalable infrastructure engineering for high-growth tech companies. 
            We build the pipelines that power your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" withIcon onClick={() => scrollToSection('quote')}>
              Start Your Project
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('engagement')}>
              View Engagement Models
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <div className="font-bold text-slate-900 dark:text-white text-xl">99.9%</div>
              <div className="text-xs leading-tight">Uptime<br/>Guaranteed</div>
            </div>
            <div className="w-px h-8 bg-slate-300 dark:bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="font-bold text-slate-900 dark:text-white text-xl">24/7</div>
              <div className="text-xs leading-tight">Expert<br/>Response</div>
            </div>
          </div>
        </div>

        {/* 3D Visual Content */}
        <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
          {/* Floating Card Container */}
          <div className="relative w-full max-w-md aspect-square animate-float preserve-3d transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
            
            {/* Main Glass Card (Terminal) */}
            <div className="absolute inset-0 bg-slate-900/90 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Window Controls */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4 text-slate-300">
                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-sky-400">~</span>
                  <span>terraform init</span>
                </div>
                <div className="text-slate-500">Initializing the backend...</div>
                <div className="text-slate-500">Successfully configured the backend "s3"!</div>
                
                <div className="flex gap-2 pt-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-sky-400">~</span>
                  <span>kubectl get pods --all-namespaces</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-xs opacity-70">
                  <span className="text-white">NAME</span>
                  <span className="text-white">READY</span>
                  <span className="text-white">STATUS</span>
                  <span className="text-white">AGE</span>
                  
                  <span>api-gateway-v1</span>
                  <span>1/1</span>
                  <span className="text-green-400">Running</span>
                  <span>24d</span>
                  
                  <span>worker-node-x7</span>
                  <span>1/1</span>
                  <span className="text-green-400">Running</span>
                  <span>12d</span>
                </div>

                 <div className="flex gap-2 pt-2 animate-pulse">
                  <span className="text-green-400">➜</span>
                  <span className="text-sky-400">~</span>
                  <span className="w-2 h-4 bg-slate-400 inline-block align-middle" />
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-500/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-12 top-20 bg-slate-800/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <Terminal className="w-8 h-8 text-sky-400 mb-2" />
              <div className="text-xs font-bold text-white">Automated</div>
              <div className="text-[10px] text-slate-400">CI/CD Pipelines</div>
            </div>

            <div className="absolute -left-8 bottom-20 bg-slate-800/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <Cpu className="w-8 h-8 text-indigo-400 mb-2" />
              <div className="text-xs font-bold text-white">Infrastructure</div>
              <div className="text-[10px] text-slate-400">as Code</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;