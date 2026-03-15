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
    { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', url: 'https://www.instagram.com/starletheals/' },
    { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', url: 'https://www.youtube.com/@StarletHeals' },
    { icon: <Coffee className="w-4 h-4" />, label: 'Ko-fi', url: 'https://ko-fi.com/starletheals' }
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
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative mb-1">
              <img 
                src="https://picsum.photos/seed/starlet/400/400" 
                alt="Starlet" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-star-accent-brown/10 to-transparent"></div>
            </div>

            <div className="space-y-2 md:space-y-3 max-w-lg">
              <h1 className="text-3xl md:text-4xl gradient-text mb-0.5">Starlet Heals ★</h1>
              <p className="font-hand text-lg md:text-2xl text-star-accent-brown">Overwatch Support Main & Social Worker</p>
              
              <div className="h-px w-10 md:w-14 bg-star-accent-brown/20 mx-auto my-1 md:my-2"></div>
              
              <p className="text-star-ink/80 leading-relaxed text-sm md:text-base px-2 md:px-4">
                Hello! I am Starlet, and I created content that connects gaming, mental health, and design. 
                My content is made to support, inform, and inspire!
                <span className="block mt-1 font-bold text-star-accent-rose">I heal others in-game and in real life!</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3 pt-1 md:pt-2 px-4 md:px-8 w-full max-w-md">
              {socialLinks.map((s, i) => (
                <a 
                  key={i} 
                  href={s.url} 
                  target="_blank" 
                  className="cozy-card px-3 md:px-5 py-2 md:py-3 bg-white/30 text-star-accent-brown hover:text-star-accent-rose hover:border-star-accent-rose transition-all group flex items-center justify-center gap-2 md:gap-3 border-star-accent-brown/20"
                >
                  <span className="group-hover:scale-110 transition-transform scale-110">{s.icon}</span>
                  <span className="text-[10px] md:text-[12px] font-header font-bold uppercase tracking-widest whitespace-nowrap">{s.label}</span>
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
            className="space-y-4 w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              <div className="w-full max-w-[140px] md:max-w-[180px] space-y-3 md:pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md relative">
                  <img 
                    src="https://picsum.photos/seed/starlet/800/800" 
                    alt="Starlet" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="bg-star-accent-brown/5 rounded-2xl p-4 border border-star-accent-brown/10 hidden md:block">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-star-accent-brown/40 mb-3 flex items-center justify-center gap-2">
                    <Star className="w-3 h-3 fill-star-gold text-star-gold" /> Fun Facts
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Peak Rank', value: 'Master 1' },
                      { label: 'Mains', value: 'Mercy / Juno' },
                      { label: 'Birthday', value: 'Dec 21' },
                      { label: 'Symbol', value: 'Stars!' },
                      { label: 'Fav Colors', value: 'Orange, Purple, Magenta, Blue' }
                    ].map((fact, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <span className="text-[7px] font-bold uppercase tracking-widest text-star-ink/30">{fact.label}</span>
                        <span className="text-[10px] font-bold text-star-accent-brown leading-tight">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <h2 className="text-3xl text-star-accent-rose text-center mb-2">About Me</h2>
                <div className="space-y-4 text-star-ink/80 leading-relaxed text-sm md:text-base">
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
                  <div className="pt-2 text-center">
                    <p className="font-hand text-2xl text-star-accent-brown">
                      Thank you for visiting!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Fun Facts */}
            <div className="bg-star-accent-brown/5 rounded-2xl p-4 border border-star-accent-brown/10 md:hidden">
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
            className="space-y-6 w-full px-4 md:px-12"
          >
            <div className="text-center space-y-1">
              <h2 className="text-3xl text-star-accent-rose">Healing Hub</h2>
              <p className="text-[10px] text-star-ink/40 uppercase tracking-widest font-bold">Latest Support Guides & Content</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 selection:bg-star-gold/30">
      
      {/* Main Card Container */}
      <main className="w-full max-w-xl cozy-card p-4 md:p-6 relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-star-accent-rose to-star-accent-brown"></div>
        
        {/* Integrated Navigation */}
        <nav className="mb-4 md:mb-6 bg-star-cream/80 backdrop-blur-md px-6 md:px-8 py-2 md:py-3 rounded-full shadow-sm border border-star-accent-brown/10 flex gap-6 md:gap-10 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-star-ink/60">
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

        <div className="w-full flex-1 flex flex-col items-center">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>

        {/* Footer Integrated into Card */}
        <footer className="mt-6 md:mt-8 pt-4 border-t border-star-accent-brown/10 w-full text-center space-y-1">
          <div className="flex items-center justify-center gap-4 text-star-ink/20">
            <div className="h-px w-8 bg-current"></div>
            <Star className="w-3 h-3 fill-current" />
            <div className="h-px w-8 bg-current"></div>
          </div>
          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-star-ink/30">© 2026 Starlet Heals • Healing in-game and in real life</p>
        </footer>

        {/* Decorative elements */}
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-star-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-star-accent-rose/5 rounded-full blur-3xl pointer-events-none"></div>
      </main>
    </div>
  );
};

export default App;
