import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What skill level do I need to rent a bike?',
    a: "We have bikes for all levels — from beginner-friendly hardtails on flowing trails to full-suspension rigs for Moab's technical terrain. Tell us your experience when you book and we'll set you up with the right bike.",
  },
  {
    q: 'Do I need to bring my own gear?',
    a: "Nope. Every rental includes a helmet, gloves, and a basic trail kit. Just show up in comfortable athletic clothing and closed-toe shoes. Clip-in pedals and shoes are available on request.",
  },
  {
    q: 'How far in advance should I book?',
    a: "We recommend booking at least 48 hours ahead, especially during spring and fall peak season (March–May, September–November). Same-day rentals are sometimes available — call us to check.",
  },
  {
    q: 'What if the weather turns bad?',
    a: "Moab is mostly dry and rideable year-round. If conditions are genuinely unsafe — rare thunderstorms or flash flood warnings — we'll reschedule at no charge. A little dust and wind is just part of the experience.",
  },
  {
    q: 'Can you accommodate kids or first-time riders?',
    a: "Absolutely. We carry youth bikes and beginner routes that are a blast for new riders. Our guides are patient and pick terrain that builds confidence without overwhelming anyone in the group.",
  },
  {
    q: 'Do you offer multi-day packages?',
    a: "Yes — multi-day rentals get a 15% discount and we'll help you plan a different trail each day so you see the full variety Moab has to offer. Ask us about 3- and 5-day packages when you book.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">
      <div className="section-inner faq-inner">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Common questions</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
