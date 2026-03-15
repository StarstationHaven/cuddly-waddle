import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Heart, 
  Sparkles, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Youtube, 
  ExternalLink,
  ChevronRight,
  Coffee
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'healing', label: 'Healing Hub' },
    { id: 'contact', label: 'Contact Me' }
  ];

  const socialLinks = [
    { icon: <MessageCircle className="w-4 h-4" />, label: 'TikTok', url: 'https://www.tiktok.com/@starletheals' },
    { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', url: 'https://www.youtube.com/@StarletHeals' },
    { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', url: 'https://www.instagram.com/starletheals/' },
    { icon: <Coffee className="w-4 h-4" />, label: 'Ko-fi (Support Me!)', url: 'https://ko-fi.com/starletheals' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div 
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center space-y-4 md:space-y-8 py-1 md:py-2"
          >
            {/* Landing Page Image */}
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative mb-1 md:mb-2">
              <img 
                src="https://picsum.photos/seed/starlet/400/400" 
                alt="Starlet" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-star-accent-brown/10 to-transparent"></div>
            </div>

            <div className="space-y-2 md:space-y-4 max-w-lg">
              <h1 className="text-3xl md:text-5xl gradient-text mb-1 md:mb-2">Starlet Heals ★</h1>
              <p className="font-hand text-lg md:text-2xl text-star-accent-brown">Overwatch Support Main & Social Worker</p>
              
              <div className="h-px w-12 md:w-16 bg-star-accent-brown/20 mx-auto my-2 md:my-4"></div>
              
              <p className="text-star-ink/80 leading-relaxed text-sm md:text-lg px-2 md:px-4">
                Hello! I am Starlet, an Overwatch support main & social worker. 
                My goal is to create content that acts as a force of good for others, 
                by connecting gaming, mental health, and design. 
                <span className="block mt-1 md:mt-2 font-bold text-star-accent-rose">I heal others in-game and in real life!</span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-3 pt-1 md:pt-2 px-2 md:px-4 w-full md:w-auto">
              {socialLinks.map((s, i) => (
                <a 
                  key={i} 
                  href={s.url} 
                  target="_blank" 
                  className="cozy-card px-3 md:px-4 py-2 md:py-2.5 bg-white/50 hover:bg-star-accent-rose hover:text-white transition-all group flex items-center justify-center md:justify-start gap-2 md:gap-2.5 border-star-accent-brown/10"
                >
                  <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div 
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              <div className="w-full max-w-[160px] md:max-w-[240px] md:w-1/3 space-y-4 md:space-y-6">
                <div className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 border-white shadow-xl relative">
                  <img 
                    src="https://picsum.photos/seed/starlet/800/800" 
                    alt="Starlet" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="cozy-card p-4 md:p-5 bg-star-accent-brown/5 border-star-accent-brown/10 hidden md:block">
                  <h3 className="text-[9px] font-bold uppercase tracking-widest text-star-ink/30 mb-3 flex items-center gap-2">
                    <Star className="w-3 h-3 text-star-gold" /> Fun Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Peak Rank', value: 'Master 1' },
                      { label: 'Mains', value: 'Mercy / Juno' },
                      { label: 'Birthday', value: 'Dec 21' },
                      { label: 'Symbol', value: 'Stars!' }
                    ].map((fact, i) => (
                      <div key={i} className="space-y-0.5">
                        <p className="text-[7px] font-bold uppercase tracking-widest text-star-ink/30">{fact.label}</p>
                        <p className="text-[10px] font-bold text-star-accent-brown leading-tight">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-center">
                <h2 className="text-2xl md:text-4xl text-star-accent-rose">About Me</h2>
                <div className="space-y-4 text-star-ink/80 leading-relaxed text-base md:text-lg">
                  <p>
                    I started Starlet Heals to combine my background in social work and my lifelong love for gaming. 
                    As a child, gaming was more than an escape for me. It was a way to propel myself forward.
                  </p>
                  <p>
                    I believe many people were touched by games and connected deeply with characters. 
                    The skills we use in games help us thrive in real life.
                  </p>
                  <p>
                    My goal is create an accepting space where gaming and mental health bring people together. 
                    I hope you find the ability to shine and embrace your natural self.
                  </p>
                  <p className="font-hand text-2xl text-star-accent-brown pt-1">
                    Thank you for visiting!
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Fun Facts */}
            <div className="cozy-card p-4 bg-star-accent-brown/5 border-star-accent-brown/10 md:hidden">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Peak Rank', value: 'Master 1' },
                  { label: 'Mains', value: 'Mercy / Juno' },
                  { label: 'Birthday', value: 'Dec 21' },
                  { label: 'Symbol', value: 'Stars!' }
                ].map((fact, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-star-ink/30">{fact.label}</p>
                    <p className="text-[11px] font-bold text-star-accent-brown">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'healing':
        return (
          <motion.div 
            key="healing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl text-star-accent-rose">Healing Hub</h2>
              <p className="text-sm text-star-ink/50 uppercase tracking-widest font-bold">Latest Support Guides & Content</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-star-ink/5 rounded-3xl aspect-[9/16] flex items-center justify-center relative group overflow-hidden border border-star-brown/10 shadow-sm">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <MessageCircle className="w-8 h-8 text-star-accent-brown/20 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-star-ink/20">TikTok Embed {i}</p>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-full bg-white/90 backdrop-blur py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-star-accent-brown shadow-sm">Watch on TikTok</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div 
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl text-star-accent-rose">Contact Me</h2>
              <p className="text-star-ink/70 leading-relaxed">
                Whether you have a question about a guide, want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-star-ink/70">
                  <Mail className="w-4 h-4 text-star-accent-rose" />
                  starletheals@gmail.com
                </div>
                <div className="flex items-center gap-2 text-sm text-star-ink/70">
                  <MessageCircle className="w-4 h-4 text-star-accent-brown" />
                  @starletheals on TikTok
                </div>
              </div>
            </div>

            <form className="w-full space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <input type="text" placeholder="Your Name" className="w-full bg-white/50 border border-star-accent-brown/10 rounded-2xl px-6 py-3 focus:border-star-accent-rose outline-none transition-all text-sm" />
                <input type="email" placeholder="Your Email" className="w-full bg-white/50 border border-star-accent-brown/10 rounded-2xl px-6 py-3 focus:border-star-accent-rose outline-none transition-all text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-white/50 border border-star-accent-brown/10 rounded-2xl px-6 py-3 focus:border-star-accent-rose outline-none transition-all text-sm text-left" />
              <textarea rows={4} placeholder="Your Message" className="w-full bg-white/50 border border-star-accent-brown/10 rounded-2xl px-6 py-3 focus:border-star-accent-rose outline-none transition-all text-sm resize-none text-left"></textarea>
              <button className="w-full bg-star-ink text-white font-bold py-4 rounded-2xl hover:bg-star-accent-brown transition-all shadow-lg shadow-star-accent-brown/20 text-xs uppercase tracking-widest">Send Message</button>
            </form>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-12 selection:bg-star-gold/30">
      
      {/* Navigation - Persistent Header Style */}
      <header className="w-full max-w-2xl mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-star-gold fill-star-gold" />
          <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-star-ink/40">Starlet Heals</span>
        </div>
        
        <nav className="bg-star-cream/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-sm border border-star-accent-brown/5 flex gap-4 md:gap-6 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-star-ink/60">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-colors relative py-1 ${activeTab === tab.id ? 'text-star-accent-rose' : 'hover:text-star-accent-rose'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-star-accent-rose rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Card Container - Shrinked for better breathing room */}
      <main className="w-full max-w-3xl min-h-[400px] md:min-h-[500px] cozy-card p-4 md:p-12 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-star-accent-rose to-star-accent-brown"></div>
        
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-star-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-star-accent-rose/5 rounded-full blur-3xl pointer-events-none"></div>
      </main>

      <footer className="mt-12 text-center space-y-2">
        <div className="flex items-center justify-center gap-4 text-star-ink/20">
          <div className="h-px w-8 bg-current"></div>
          <Star className="w-3 h-3 fill-current" />
          <div className="h-px w-8 bg-current"></div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-star-ink/30">© 2026 Starlet Heals • Healing in-game and in real life</p>
      </footer>
    </div>
  );
};

export default App;
