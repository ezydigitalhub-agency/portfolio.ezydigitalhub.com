import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Sparkles, AlertCircle, ShieldCheck, CheckCircle2, ArrowRight, CornerDownLeft, Send } from 'lucide-react';

interface CTASectionProps {
  onRef?: (triggers: { triggerWhatsApp: () => void; triggerBookCall: () => void }) => void;
}

export default function CTASection({ onRef }: CTASectionProps) {
  // Booking call state
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', scale: 'under-5k' });
  const [isBooked, setIsBooked] = useState(false);

  // WhatsApp chatbot state
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'agent', text: string, time: string }>>([
    { sender: 'agent', text: 'Hey there! Welcome to EZY Digital Hub. Ready to scale your brand? Drop us a line below or pick one of our hot topics.', time: '10:54' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Expose triggers to parent components if needed
  useEffect(() => {
    if (onRef) {
      onRef({
        triggerWhatsApp: () => setShowChat(true),
        triggerBookCall: () => setShowCalendar(true)
      });
    }
  }, [onRef]);

  // Date selection options
  const DATES = [
    { day: 'Mon', num: '25', full: 'Monday, May 25, 2026' },
    { day: 'Tue', num: '26', full: 'Tuesday, May 26, 2026' },
    { day: 'Wed', num: '27', full: 'Wednesday, May 27, 2026' },
    { day: 'Thu', num: '28', full: 'Thursday, May 28, 2026' }
  ];

  const TIMES = ['09:30 AM', '11:00 AM', '02:00 PM', '04:30 PM'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a preferred Date and Time slot.');
      return;
    }
    setIsBooked(true);
  };

  const handleChatOption = (option: string) => {
    // Append user msg
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text: option, time: timeString };
    setChatMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulated reply
    setTimeout(() => {
      let replyText = "";
      if (option.includes("Branding")) {
        replyText = "Awesome! Branding is our core obsession. Typically, a long-term branding track includes complete competitor audited styling guides, custom logo suites, and targeted copywriting. Would you like us to audit your current brand?";
      } else if (option.includes("Price")) {
        replyText = "Our packages are structured as transparent monthly partnerships starting around $2,500/mo. This gets you full access to a designer, marketing strategist, and creative lead. You can pause or cancel anytime!";
      } else {
        replyText = "Fabulous preference! Let's get down to business. I highly recommend booking a rapid 15-minute Discovery Audio call with our lead partner, so we can draft a tailored roadmap together.";
      }

      setChatMessages(prev => [...prev, { sender: 'agent' as const, text: replyText, time: timeString }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text: inputText, time: timeString };
    setChatMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = "Thank you for sharing that! Our directors have been notified. Since we don't just design but build systems, our principal scale architect is reviewing your note. Let's lock in a virtual strategy audio call to finalize!";
      setChatMessages(prev => [...prev, { sender: 'agent' as const, text: replyText, time: timeString }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Blue Container Box */}
        <div className="bg-gradient-to-br from-[#051329] via-[#07162d] to-[#12253f] rounded-[32px] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden border border-white/5">
          {/* Subtle Orange Accent Circle */}
          <div className="absolute top-[80%] right-[-10%] w-72 h-72 bg-brand-orange/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-[-20%] left-[-10%] w-60 h-60 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3 py-1 font-mono uppercase inline-block">
                🚀 Lets Get Started
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display tracking-tight leading-[1.1]">
                Let's Build a Brand <br />
                That Actually <span className="text-brand-orange">Grows.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed font-light">
                Ready to take your brand to the next level? Let's talk about how we can work together to secure consistency, strategy, and conversions.
              </p>
            </div>

            {/* Right Buttons Column */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              
              {/* WhatsApp Button */}
              <button
                onClick={() => setShowChat(true)}
                className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm px-7 py-4.5 rounded-2xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/35 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer w-full text-center"
              >
                {/* Embedded WhatsApp Vector Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.519.99c-5.44 0-9.866 4.372-9.87 9.802 0 1.772.486 3.502 1.407 5.027L2.093 21.8l6.11-1.595h.057l.001.002z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </button>

              {/* Book Call Button */}
              <button
                onClick={() => setShowCalendar(true)}
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-brand-navy font-bold text-sm px-7 py-4.5 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer w-full text-center border border-gray-100"
              >
                <Calendar className="w-5 h-5 text-gray-500" />
                <span>Book a Call</span>
              </button>

            </div>

          </div>

          {/* Under-line attributes matching photo */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 justify-start text-[11px] text-gray-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              <span>⏱️ Quick Response Team</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>🛡️ No Obligation Discovery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>🔥 Free Preliminary Consultation</span>
            </div>
          </div>

        </div>

      </div>

      {/* FLOATING WHATSAPP CHAT PREVIEW WORKSPACE (Bottom Custom Agent) */}
      <AnimatePresence>
        {showChat && (
          <div className="fixed bottom-4 right-4 z-50 w-full sm:max-w-[360px] p-4">
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-[460px]"
            >
              {/* WhatsApp styled header */}
              <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
                      EZ
                    </span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#075e54]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">EZY Digital Support</h4>
                    <p className="text-[10px] text-green-200">Active online • Chat agent</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-white hover:text-green-100 font-black text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Chat messages listing container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#e5ddd5]">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-3 shadow-xs text-xs ${
                      msg.sender === 'user' 
                        ? 'bg-[#dcf8c6] text-slate-800 rounded-tr-none' 
                        : 'bg-white text-slate-800 rounded-tl-none'
                    }`}>
                      <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                      <span className="text-[9px] text-gray-400 block text-right mt-1 font-mono">{msg.time}</span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-500 rounded-2xl p-3 rounded-tl-none font-bold text-xs shadow-xs">
                      Agent is styling response...
                    </div>
                  </div>
                )}
              </div>

              {/* Predefined prompts */}
              {chatMessages.length === 1 && (
                <div className="p-2.5 bg-gray-50 border-t border-gray-100 flex flex-col gap-1.5">
                  <span className="text-[9px] text-gray-400 font-bold px-1 uppercase tracking-wider text-left">Suggested Questions:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <button 
                      onClick={() => handleChatOption("🎨 I want a Branding Re-design")}
                      className="text-[10px] bg-white border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy font-semibold px-2.5 py-1.5 rounded-full shadow-xs text-left"
                    >
                      🎨 Redesign Brand
                    </button>
                    <button 
                      onClick={() => handleChatOption("💰 What are the monthly rates?")}
                      className="text-[10px] bg-white border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy font-semibold px-2.5 py-1.5 rounded-full shadow-xs text-left"
                    >
                      💰 Partnership Rates?
                    </button>
                    <button 
                      onClick={() => handleChatOption("📈 How can we scale our leads?")}
                      className="text-[10px] bg-white border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-brand-navy font-semibold px-2.5 py-1.5 rounded-full shadow-xs text-left"
                    >
                      📈 Scale Leads Strategy
                    </button>
                  </div>
                </div>
              )}

              {/* User message input box */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type message here..."
                  className="flex-1 bg-gray-150 border border-gray-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-brand-orange font-medium"
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-8 h-8 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white flex items-center justify-center cursor-pointer transition-colors disabled:opacity-40"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOOK CALL DYNAMIC INLINE CALENDAR DIALOG */}
      <AnimatePresence>
        {showCalendar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowCalendar(false); setIsBooked(false); }}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100 text-left flex flex-col"
            >
              {/* Header */}
              <div className="p-6 bg-brand-navy text-white flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-brand-orange" />
                  <h3 className="font-display font-bold text-lg">
                    Book Discovery Session
                  </h3>
                </div>
                <button 
                  onClick={() => { setShowCalendar(false); setIsBooked(false); }}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {!isBooked ? (
                <form onSubmit={handleBooking} className="p-6 space-y-5">
                  <p className="text-xs text-gray-500">
                    Pick a live available consulting slot with EZY Digital lead creative coordinator. We'll examine your challenges.
                  </p>

                  {/* Date selection cards */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase font-mono font-bold text-gray-400">1. Select Consultation Date</label>
                    <div className="grid grid-cols-4 gap-2">
                      {DATES.map((date) => (
                        <div
                          key={date.num}
                          onClick={() => setSelectedDate(date.full)}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                            selectedDate === date.full 
                              ? 'border-brand-orange bg-brand-orange/5 font-bold text-brand-orange' 
                              : 'border-gray-100 hover:border-gray-200 bg-white text-brand-navy'
                          }`}
                        >
                          <div className="text-[9px] font-mono leading-none tracking-widest text-gray-400 uppercase">{date.day}</div>
                          <div className="text-lg font-black font-display mt-0.5">{date.num}</div>
                          <div className="text-[8px] font-medium mt-0.5 text-gray-400">May</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time slots grid */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-wider uppercase font-mono font-bold text-gray-400">2. Preferred Time Slot (GMT+7)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMES.map((time) => (
                        <div
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2.5 rounded-xl border text-center text-xs font-bold cursor-pointer transition-all ${
                            selectedTime === time 
                              ? 'border-brand-orange bg-brand-orange/5 text-brand-orange' 
                              : 'border-gray-150 hover:border-gray-200 bg-white text-brand-navy'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Basic user parameters info */}
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-wider uppercase font-mono font-bold text-gray-400">3. Partner Contact Coordinates</label>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-orange font-medium"
                      />
                      <input 
                        type="email" 
                        required
                        placeholder="Contact Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-orange font-medium"
                      />
                      <input 
                        type="text" 
                        required
                        placeholder="Company Name / Website"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-orange font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit card */}
                  <button
                    type="submit"
                    className="w-full bg-brand-navy hover:bg-brand-orange text-white text-xs font-black py-4.5 rounded-2xl tracking-widest uppercase transition-all duration-300 shadow-md transform hover:scale-[1.01] active:scale-95 cursor-pointer mt-4"
                  >
                    Confirm Discovery Slot ➔
                  </button>
                </form>
              ) : (
                <div className="p-8 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="font-display font-black text-xl text-brand-navy">Discovery Slot Secured!</h4>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Congratulations <span className="font-bold text-brand-navy">{formData.name}</span>. We scaled a video audio consult room under <span className="font-bold text-brand-orange">{formData.company}</span>. Check your inbox for coordinates!
                    </p>
                  </div>

                  {/* Structured Ticket details */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100 text-left text-xs space-y-2 font-mono">
                    <div className="flex justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-gray-400 uppercase">Consulting Track:</span>
                      <span className="font-bold text-brand-navy uppercase">15m Discovery</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200/50 pb-2">
                      <span className="text-gray-400">Selected Date:</span>
                      <span className="font-bold text-brand-navy">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Start Time:</span>
                      <span className="font-bold text-brand-orange">{selectedTime}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => { setShowCalendar(false); setIsBooked(false); }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold py-3 px-5 rounded-xl transition-all"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
