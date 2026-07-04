import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi (हिंदी)' },
  { code: 'bn', name: 'Bengali (বাংলা)' },
  { code: 'te', name: 'Telugu (తెలుగు)' },
  { code: 'mr', name: 'Marathi (मराठी)' },
  { code: 'ta', name: 'Tamil (தமிழ்)' },
  { code: 'gu', name: 'Gujarati (ગુજરાતી)' },
  { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
  { code: 'ml', name: 'Malayalam (മലയാളം)' },
  { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse cookie to get current language if already set
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    
    // Find the native Google Translate select element and trigger a change
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback if widget hasn't loaded yet
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      window.location.reload();
    }
  };

  // Get current language short name (e.g., 'EN', 'HI')
  const currentLangName = languages.find(l => l.code === currentLang)?.name.split(' ')[0] || 'English';

  return (
    <div className="relative pl-10 border-l border-gray-600 notranslate" ref={dropdownRef}>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 hover:text-white transition-colors uppercase font-semibold"
      >
        <Globe className="w-4 h-4 opacity-70 mr-1" />
        {currentLangName.substring(0, 2)} 
        <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-6 w-48 bg-[#1C1D1F] border border-gray-700 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-800 transition-colors ${
                currentLang === lang.code ? 'text-[#E28802] font-bold' : 'text-gray-300'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
