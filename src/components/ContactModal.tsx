import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'all' | 'email' | 'messenger';
}

export default function ContactModal({ isOpen, onClose, mode = 'all' }: ContactModalProps) {
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
                  <div className="h-[1px] flex-grow bg-brand-ink/10" />
                </div>
              )}

              {/* Form */}
              {mode !== 'messenger' && (
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Ваше ім'я"
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all text-sm"
                      id="form-name"
                    />
                    <input 
                      type="text" 
                      placeholder="Телефон або email"
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all text-sm"
                      id="form-contact"
                    />
                    <textarea 
                      placeholder="Коротко про запит"
                      rows={3}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8F6F3] border border-transparent focus:bg-white focus:border-brand-ink/10 focus:ring-4 focus:ring-brand-ink/[0.02] text-brand-ink placeholder:text-brand-muted/50 transition-all resize-none text-sm"
                      id="form-message"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-brand-ink text-white py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-brand-ink/10 hover:bg-black transition-all active:scale-[0.98] mt-6"
                    id="form-submit"
                  >
                    {mode === 'email' ? 'Відправити запит на email' : 'Відправити'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
