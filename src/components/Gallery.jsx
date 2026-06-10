import { motion } from 'framer-motion';

const cells = [
  {
    label: 'Dead Horse Point overlook',
    gradient: 'linear-gradient(145deg, #2a1200 0%, #6b3510 55%, #c97a30 100%)',
  },
  {
    label: 'Guided group on Slickrock Trail',
    gradient: 'linear-gradient(145deg, #0e1a0e 0%, #1c3c1c 60%, #2e5e2e 100%)',
  },
  {
    label: 'Rocky trail POV',
    gradient: 'linear-gradient(145deg, #181818 0%, #3c3c3c 70%, #8a8a8a 100%)',
  },
  {
    label: 'Canyon wall at golden hour',
    gradient: 'linear-gradient(145deg, #1a0600 0%, #8c3a00 55%, #d49060 100%)',
  },
  {
    label: 'E-bike fleet lineup',
    gradient: 'linear-gradient(145deg, #0e0e1c 0%, #1c1c3c 60%, #36367a 100%)',
  },
  {
    label: 'Moab sunrise from the saddle',
    gradient: 'linear-gradient(145deg, #1c0606 0%, #703030 50%, #d08060 100%)',
  },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="section-inner">
        <p className="section-label">The terrain</p>
        <h2 className="section-title">Moab from every angle</h2>
        <div className="gallery-grid">
          {cells.map((cell, i) => (
            <motion.div
              key={cell.label}
              className="gallery-cell"
              style={{ background: cell.gradient }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
            >
              <div className="gallery-overlay">
                <span className="gallery-label">{cell.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
