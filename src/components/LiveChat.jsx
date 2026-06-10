import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AGENT_MESSAGES = [
  "Hey there! 👋 Welcome to Bighorn Mountain Biking. Looking to book a rental or a guided tour?",
  "We have bikes available this weekend and guided tours open Thursday through Sunday.",
  "Send us a message and we'll get right back to you!",
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState([]);
  const [typing, setTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [sent, setSent] = useState(false);
  const initialized = useRef(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (!open || initialized.current) return;
    initialized.current = true;

    let delay = 700;
    AGENT_MESSAGES.forEach((text) => {
      setTimeout(() => setTyping(true), delay);
      delay += 1300;
      setTimeout(() => {
        setTyping(false);
        setVisible((prev) => [...prev, text]);
      }, delay);
      delay += 500;
    });
  }, [open]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [visible, typing]);

  function handleSend(e) {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setSent(true);
    setInputVal('');
  }

  return (
    <>
      <button
        className="chat-bubble"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? '✕' : '💬'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">🧢</div>
              <div>
                <div className="chat-agent-name">Trail Support</div>
                <div className="chat-status">● Online now</div>
              </div>
            </div>

            <div className="chat-messages" ref={messagesRef}>
              <AnimatePresence>
                {visible.map((text, i) => (
                  <motion.div
                    key={i}
                    className="chat-msg"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </AnimatePresence>
              {typing && (
                <div className="chat-typing">
                  <span /><span /><span />
                </div>
              )}
            </div>

            {sent ? (
              <div className="chat-sent">
                Thanks! We'll be in touch within a few minutes. 🤙
              </div>
            ) : (
              <form className="chat-input-row" onSubmit={handleSend}>
                <input
                  className="chat-input"
                  type="text"
                  placeholder="Type your message..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                <button type="submit" className="chat-send">Send</button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
