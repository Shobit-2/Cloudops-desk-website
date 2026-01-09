import React from 'react';
import { Mail, Linkedin, Send, Cloud } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="support" className="bg-slate-100 dark:bg-slate-950 pt-24 pb-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Ready for <br/>
              <span className="text-slate-400 dark:text-slate-500">Reliable Scale?</span>
            </h2>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex flex-wrap gap-4">
              <a href="mailto:cloudopsdesk@gmail.com" className="flex-1 min-w-[200px]">
                <Button variant="secondary" className="w-full h-16 text-lg justify-start px-8 group">
                  <Mail className="w-6 h-6 mr-3 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  Email Us
                </Button>
              </a>
              <a href="https://t.me/CloudOpsDesk" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px]">
                <Button variant="secondary" className="w-full h-16 text-lg justify-start px-8 group">
                  <Send className="w-6 h-6 mr-3 text-sky-500 dark:text-sky-400 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors" />
                  Telegram
                </Button>
              </a>
            </div>
             <a href="https://www.linkedin.com/company/cloudops-desk/posts/?feedView=all" target="_blank" rel="noreferrer" className="w-full">
                <Button variant="secondary" className="w-full h-16 text-lg justify-start px-8 group hover:bg-[#0077b5]/10 dark:hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50">
                  <Linkedin className="w-6 h-6 mr-3 text-slate-500 dark:text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                  Connect on LinkedIn
                </Button>
              </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5 text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <Cloud className="w-4 h-4" />
             <span className="font-semibold text-slate-700 dark:text-slate-300">CloudOps Desk</span>
          </div>
          
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;