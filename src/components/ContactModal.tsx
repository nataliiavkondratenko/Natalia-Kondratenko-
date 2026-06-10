import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Send, Check, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'all' | 'email' | 'messenger';
}

export default function ContactModal({ isOpen, onClose, mode = 'all' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Reset state when modal closes/opens
  useEffect(() => {
    if (!isOpen) {
      setName('');
      setContact('');
      setMessage('');
      setIsSubmitting(false);
      setIsSuccess(false);
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError("Будь ласка, вкажіть ваше ім'я");
      return;
    }
    if (!contact.trim()) {
      setError("Будь ласка, вкажіть телефон або email");
      return;
    }

    setIsSubmitting(true);

    // Store in localStorage as local backup first
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      existingInquiries.push({
        name,
        contact,
        message,
        timestamp: new Date().toISOString(),
        recipient: 'nataliia.v.kondratenko@gmail.com'
      });
      localStorage.setItem('inquiries', JSON.stringify(existingInquiries));
    } catch (err) {
      console.error('Failed to save inquiry to local backup', err);
    }

    // Directly open custom mailto link to email client prefilled with form data
    setTimeout(() => {
      triggerMailtoFallback();
    }, 400);
  };

  const triggerMailtoFallback = () => {
    const emailSubject = `Запит на консультацію: ${name}`;
    const emailBody = `Вітаю!

Мене звати: ${name}
Контактний телефон / email: ${contact}

Запит:
${message || '—'}
`;

    const mailtoUrl = `mailto:nataliia.v.kondratenko@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Open native email app
    window.location.href = mailtoUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
          id="contact-modal-overlay"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[95svh]"
            id="contact-modal-content"
          >
            {/* Close Button Header */}
            <div className="flex justify-end p-3 md:p-5">
              <button 
                onClick={onClose}
                className="p-2 text-brand-ink/30 hover:text-brand-ink transition-colors hover:bg-black/5 rounded-full"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-8 md:px-12 pb-10 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="w-16 h-16 bg-[#EEF3EE] rounded-full flex items-center justify-center text-[#5B755B] shadow-sm">
                    <Check size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-sans font-medium text-brand-ink">Надіслано успішно!</h3>
                    <p className="text-sm text-brand-muted leading-relaxed max-w-md mx-auto px-2">
                      Дякую за звернення! Ваше повідомлення прийнято. Я отримаю його на адресу <span className="font-semibold text-brand-ink">nataliia.v.kondratenko@gmail.com</span> та зв'яжуся з вами найближчим часом для узгодження часу зустрічі.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="mt-6 px-8 py-3.5 bg-brand-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg active:scale-[0.98] cursor-pointer"
                  >
                    Зрозуміло
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Header Title */}
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-brand-ink leading-tight px-4">
                      {mode === 'email' ? (
                        <>Надіслати запит <br className="hidden sm:block" /> на email</>
                      ) : mode === 'messenger' ? (
                        <>Написати в <br className="hidden sm:block" /> WhatsApp / Telegram</>
                      ) : (
                        <>Оберіть зручний <br className="hidden sm:block" /> спосіб зв'язку</>
                      )}
                    </h2>
                  </div>

                  {/* Instant Contact Options */}
                  {mode !== 'email' && (
                    <div className="grid grid-cols-1 gap-3 mb-6 md:mb-8">
                      <a 
                        href="https://wa.me/380678250825" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-5 p-4 md:p-5 rounded-3xl bg-[#F8F6F3] group hover:bg-[#F3EFE9] transition-all border border-transparent hover:border-brand-ink/5"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink shadow-sm group-hover:scale-105 transition-transform shrink-0">
                          <MessageCircle size={20} className="text-[#25D366]" />
                        </div>
                        <div className="overflow-hidden">
                          <span className="block text-sm font-bold text-brand-ink">WhatsApp</span>
                          <span className="text-xs text-brand-muted truncate">+38 067 825 08 25</span>
                        </div>
                      </a>

                      <a 
                        href="https://t.me/nvkondratenko" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-5 p-4 md:p-5 rounded-3xl bg-[#F8F6F3] group hover:bg-[#F3EFE9] transition-all border border-transparent hover:border-brand-ink/5"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink shadow-sm group-hover:scale-105 transition-transform shrink-0">
                          <Send size={20} className="text-[#0088cc]" />
                        </div>
                        <div className="overflow-hidden">
                          <span className="block text-sm font-bold text-brand-ink">Telegram</span>
                          <span className="text-xs text-brand-muted truncate">@nvkondratenko</span>
                        </div>
                      </a>
                    </div>
                  )}

                  {/* OR Divider */}
                  {mode === 'all' && (
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <div className="h-[1px] flex-grow bg-brand-ink/10" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/20 shrink-0">АБО</span>
                      <div className="h-[1px] flex-grow bg-[#EAE8E4]" />
                    </div>
                  )}

                  {/* Form */}
                  {mode !== 'messenger' && (
                    <form className="space-y-3" onSubmit={handleSubmit}>
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ваше ім'я"
                          className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all text-sm"
                          id="form-name"
                          disabled={isSubmitting}
                        />
                        <input 
                          type="text" 
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="Телефон або email"
                          className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all text-sm"
                          id="form-contact"
                          disabled={isSubmitting}
                        />
                        <textarea 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Коротко про запит"
                          rows={3}
                          className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all resize-none text-sm"
                          id="form-message"
                          disabled={isSubmitting}
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-xs px-2 font-medium">{error}</p>
                      )}
                      
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-ink text-white py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-brand-ink/10 hover:bg-black transition-all active:scale-[0.98] mt-6 cursor-pointer flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                        id="form-submit"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2 w-4 h-4" />
                            Надсилання...
                          </>
                        ) : (
                          mode === 'email' ? 'Відправити email' : 'Відправити'
                        )}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
