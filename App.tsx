import React, { useState, useMemo } from 'react';
import { Search, Type, Sun, Moon } from 'lucide-react';
import { SECTIONS, DATA } from './constants';
import { Topic, SectionKey, FontSize } from './types';
import TopicCard from './components/TopicCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('overview');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate derived styles
  const containerClass = highContrast 
    ? 'bg-black text-white min-h-screen' 
    : 'bg-white text-neutral-900 min-h-screen';

  const fontClass = {
    normal: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  }[fontSize];

  const accentClass = highContrast ? 'text-yellow-400' : 'text-blue-700';
  const buttonActiveClass = highContrast 
    ? 'bg-neutral-800 border-yellow-400 text-yellow-400 font-bold' 
    : 'bg-blue-50 border-blue-600 text-blue-800 font-semibold';
  
  const buttonInactiveClass = highContrast
    ? 'bg-black border-white text-white hover:bg-neutral-900'
    : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50';

  // Filter Logic
  const currentTopics = DATA[activeSection];
  
  const filteredTopics = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return currentTopics;
    
    return currentTopics.filter(topic => {
      const fullText = `${topic.title} ${topic.period} ${topic.description}`.toLowerCase();
      return fullText.includes(query);
    });
  }, [activeSection, searchQuery, currentTopics]);

  return (
    <div className={`${containerClass} ${fontClass} transition-colors duration-300`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-4 rounded z-50">
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Header */}
        <header className={`pb-6 border-b-2 mb-6 ${highContrast ? 'border-white' : 'border-neutral-200'}`}>
          <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 ${accentClass}`}>
            Huerfano County History
          </h1>
          <p className="max-w-2xl mb-6 opacity-90">
            A simple guide to the people, places, and events that shaped Huerfano County, Colorado.
          </p>

          {/* Accessibility Controls */}
          <div className="flex flex-wrap gap-2 items-center" role="group" aria-label="Accessibility Settings">
             <div className="flex items-center gap-2 mr-2">
               <button 
                  onClick={() => setFontSize('normal')}
                  className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-1 transition-colors ${fontSize === 'normal' ? buttonActiveClass : buttonInactiveClass}`}
                  aria-label="Normal text size"
                  aria-pressed={fontSize === 'normal'}
                >
                  <Type size={14} /> Normal
                </button>
               <button 
                  onClick={() => setFontSize('large')}
                  className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-1 transition-colors ${fontSize === 'large' ? buttonActiveClass : buttonInactiveClass}`}
                  aria-label="Large text size"
                  aria-pressed={fontSize === 'large'}
                >
                  <Type size={16} /> Large
                </button>
               <button 
                  onClick={() => setFontSize('xlarge')}
                  className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-1 transition-colors ${fontSize === 'xlarge' ? buttonActiveClass : buttonInactiveClass}`}
                  aria-label="Extra large text size"
                  aria-pressed={fontSize === 'xlarge'}
                >
                  <Type size={18} /> X-Large
                </button>
             </div>

             <button 
                onClick={() => setHighContrast(!highContrast)}
                className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-2 transition-colors ${highContrast ? buttonActiveClass : buttonInactiveClass}`}
                aria-pressed={highContrast}
              >
                {highContrast ? <Sun size={16} /> : <Moon size={16} />}
                {highContrast ? 'High Contrast On' : 'High Contrast Off'}
              </button>
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-6 overflow-x-auto pb-2" aria-label="History sections">
          <div className="flex gap-2 min-w-max">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                   setActiveSection(sec.id);
                   setSearchQuery(''); // Clear search on tab switch for better UX
                }}
                className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all whitespace-nowrap ${
                  activeSection === sec.id ? buttonActiveClass : buttonInactiveClass
                }`}
                aria-current={activeSection === sec.id ? 'page' : undefined}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Search Box */}
        <div className="mb-8">
          <label htmlFor="search-input" className="block text-sm font-bold mb-2 opacity-90">
            Search {SECTIONS.find(s => s.id === activeSection)?.label} (type a town, event, or name):
          </label>
          <div className="relative">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Example: Ludlow, La Veta, coal mine..."
              className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${
                highContrast 
                  ? 'bg-neutral-900 border-white text-white placeholder-neutral-400 focus:ring-yellow-400' 
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${highContrast ? 'text-neutral-400' : 'text-neutral-500'}`} size={20} />
          </div>
        </div>

        {/* Main Content Area */}
        <main id="main-content" className="animate-in fade-in duration-500">
          <section aria-labelledby="section-heading">
             <div className="mb-6">
                <h2 id="section-heading" className={`text-2xl md:text-3xl font-bold mb-3 ${highContrast ? 'text-yellow-400' : 'text-neutral-800'}`}>
                  {SECTIONS.find(s => s.id === activeSection)?.label}
                </h2>
                <p className="opacity-90 leading-relaxed max-w-3xl">
                  {SECTIONS.find(s => s.id === activeSection)?.intro}
                </p>
                {activeSection === 'overview' && (
                  <p className={`mt-4 text-sm italic border-l-4 pl-3 ${highContrast ? 'border-yellow-400 text-neutral-300' : 'border-blue-500 text-neutral-600'}`}>
                    Note: This is a community history tool. Content can be expanded with photos, oral histories, and archival materials.
                  </p>
                )}
             </div>

             {filteredTopics.length === 0 ? (
               <div className={`p-8 text-center border-2 border-dashed rounded-xl ${highContrast ? 'border-neutral-700 text-neutral-400' : 'border-neutral-200 text-neutral-500'}`}>
                 <p className="text-lg">No topics found matching "{searchQuery}" in this section.</p>
                 <button 
                   onClick={() => setSearchQuery('')}
                   className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold hover:underline ${accentClass}`}
                 >
                   Clear Search
                 </button>
               </div>
             ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredTopics.map((topic, index) => (
                   <TopicCard 
                      key={`${topic.title}-${index}`} 
                      topic={topic} 
                      highContrast={highContrast} 
                   />
                 ))}
               </div>
             )}
          </section>
        </main>

        <footer className={`mt-12 pt-6 border-t text-center text-sm opacity-70 ${highContrast ? 'border-neutral-700' : 'border-neutral-200'}`}>
          <p>
            Huerfano County History App – draft prototype. Content is for educational use and should be verified
            with local historians, elders, archives, museums, and tribal nations.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;