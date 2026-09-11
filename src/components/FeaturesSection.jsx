import { CheckCircle2 } from 'lucide-react';
import './FeaturesSection.css';

export default function FeaturesSection({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-label font-mono-display">Features</span>
            <h2 className="section-title font-display">Why Choose Us</h2>
          </div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="feature-icon-wrapper">
                <CheckCircle2 size={24} className="feature-icon" />
              </div>
              <h3 className="feature-title font-display">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
