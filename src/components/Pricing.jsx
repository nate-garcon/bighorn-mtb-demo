import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Half-Day Rental',
    price: '$75',
    unit: 'per person',
    features: [
      'Choice of hardtail or full-suspension',
      'Helmet & gloves included',
      '4-hour rental window',
      'Trail map + route recommendation',
      'Bike fit & pre-ride safety check',
    ],
    cta: 'Reserve Now',
    featured: false,
  },
  {
    name: 'Full-Day Rental',
    price: '$120',
    unit: 'per person',
    features: [
      'Full-suspension bike',
      'Full gear kit included',
      '8-hour rental window',
      'Trailhead delivery available',
      'Trail map + route recommendation',
      'Bike fit & pre-ride safety check',
    ],
    cta: 'Reserve Now',
    featured: true,
  },
  {
    name: 'Guided Tour',
    price: '$195',
    unit: 'per person',
    features: [
      'Full-suspension bike + full gear',
      'Dedicated local guide all day',
      'Custom route based on skill level',
      'Trailhead drop-off & pickup',
      'Trail snacks & water included',
      'Photo stops & trail history',
    ],
    cta: 'Book a Tour',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="section-inner">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Straightforward rates. No surprises.</h2>
        <p className="section-subtitle">
          All prices are per person. Group rates available — contact us for parties of 6 or more.
        </p>
        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`pricing-card${tier.featured ? ' pricing-card--featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              {tier.featured && <div className="pricing-badge">Most Popular</div>}
              <h3 className="pricing-tier-name">{tier.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-unit">{tier.unit}</span>
              </div>
              <ul className="pricing-features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className="pricing-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={tier.featured ? 'btn-primary' : 'btn-outline'}>
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
