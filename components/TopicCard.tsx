import React, { useState } from 'react';
import { Topic } from '../types';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  highContrast: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, highContrast }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalize images: use array if exists, otherwise single image if exists, otherwise empty
  const images = topic.images && topic.images.length > 0 
    ? topic.images 
    : topic.image 
      ? [topic.image] 
      : [];

  const hasImages = images.length > 0;

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // Dynamic styles based on high contrast
  const cardClass = highContrast
    ? 'bg-neutral-900 border border-white text-white'
    : 'bg-neutral-50 border border-neutral-200 text-neutral-900';

  const titleClass = highContrast ? 'text-yellow-400' : 'text-neutral-900';
  const metaClass = highContrast ? 'text-neutral-300' : 'text-neutral-500';
  const btnClass = highContrast
    ? 'bg-black border border-white text-white hover:bg-neutral-800'
    : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100';

  return (
    <article className={`rounded-xl p-4 shadow-sm transition-all ${cardClass}`}>
      {hasImages && (
        <div className="mb-4 space-y-2">
          <div className="relative overflow-hidden rounded-lg aspect-video bg-neutral-200 flex items-center justify-center">
            <img 
              src={images[currentImageIndex]} 
              alt={`${topic.title} illustration`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 hover:opacity-100 transition-opacity">
                 <button onClick={handlePrev} className="p-1 bg-black/50 text-white rounded-full hover:bg-black/70" aria-label="Previous image">
                   <ChevronLeft size={20} />
                 </button>
                 <button onClick={handleNext} className="p-1 bg-black/50 text-white rounded-full hover:bg-black/70" aria-label="Next image">
                   <ChevronRight size={20} />
                 </button>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-start text-xs opacity-70">
            {topic.credit && <span>{topic.credit}</span>}
            {images.length > 1 && (
              <div className="flex gap-1">
                 {images.map((_, idx) => (
                   <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? (highContrast ? 'bg-yellow-400' : 'bg-blue-600') : 'bg-gray-400'}`} 
                   />
                 ))}
              </div>
            )}
          </div>
        </div>
      )}

      <h3 className={`text-lg font-bold mb-1 leading-tight ${titleClass}`}>
        {topic.title}
      </h3>
      
      <div className={`text-sm uppercase tracking-wider font-semibold mb-2 ${metaClass}`}>
        {topic.period}
      </div>
      
      <p className="text-base leading-relaxed">
        {topic.description}
      </p>
    </article>
  );
};

export default TopicCard;