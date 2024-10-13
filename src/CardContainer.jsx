import React, { useState } from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      {isExpanded && <p>{content}</p>}
      <span className="toggle" onClick={toggleContent}>
        {isExpanded ? 'Less' : 'MORE'}
      </span>
    </div>
  );
};

const CardContainer = () => {
  const cardsData = [
    { title: 'Custom Website Development', content: 'Tailored solutions to meet specific business needs. Responsive design for optimal viewing on all devices.' },
    { title: 'E-commerce Development', content: 'Full-fledged online stores with secure payment gateways. Inventory management and user-friendly interfaces.' },
    { title: 'Web Application Development', content: 'Development of dynamic web applications tailored to business processes. Integration with existing systems and APIs.' },
    { title: 'Website Maintenance & Support', content: 'Regular updates, backups, and security checks. Technical support and troubleshooting.' },
    { title: 'UI/UX Design', content: 'User-centric design focusing on enhancing user experience. Wireframing and prototyping services.' },
    { title: 'Performance Optimization', content: 'Speed enhancements and SEO-friendly practices. Regular performance audits and reports.' },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardContainer;