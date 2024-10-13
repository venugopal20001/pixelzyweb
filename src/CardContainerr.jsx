import React, { useState } from 'react';
import './Card.css'
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
          {isExpanded ? 'Less' : 'More'}
        </span>
      </div>
    );
  };

function CardContainerr()   {
    const cardsData = [
      { title: 'Search Engine Optimization (SEO)', content: 'On-page and off-page SEO strategies. Keyword research, content optimization, and backlink building.'},
      { title: 'Pay-Per-Click Advertising (PPC)', content: 'Google Ads and social media advertising campaigns. A/B testing and performance analysis.'},
      { title: 'Social Media Marketing', content: 'Strategy development and content creation for platforms like Facebook, Instagram, LinkedIn, etc. Community management and engagement strategies.'},
      { title: 'Email Marketing', content: 'Design and execution of email campaigns. List segmentation and performance tracking.' },
      { title: 'Analytics & Reporting', content: 'Regular performance reports and insights. Google Analytics setup and monitoring.' },
      { title: 'Brand Development', content: 'Brand strategy and identity creation. Logo design, brand messaging, and positioning.'},
    ];
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  )
}

export default CardContainerr