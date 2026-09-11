import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FaqSection.css';

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-header-col">
            <span className="section-label font-mono-display">Support</span>
            <h2 className="section-title font-display">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Everything you need to know about the product and billing.</p>
          </div>
          <div className="faq-list-col">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-display faq-q-text">{faq.question}</span>
                    <span className="faq-icon">
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div 
                    className="faq-answer-wrapper" 
                    style={{ height: openIndex === index ? 'auto' : '0' }}
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
