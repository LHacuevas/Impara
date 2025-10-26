import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Conversation from './components/Conversation';
import ApiKeyPrompt from './components/ApiKeyPrompt';
import type { AppMode } from './types';
import { BookOpenIcon, MicrophoneIcon } from './components/Icons';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('quiz');
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    // Carica la chiave API dal localStorage all'avvio
    const storedApiKey = localStorage.getItem('userApiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleApiKeySave = (key: string) => {
    if (key.trim()) {
      setApiKey(key);
      localStorage.setItem('userApiKey', key);
    }
  };
  
  const handleApiKeyClear = () => {
    setApiKey(null);
    localStorage.removeItem('userApiKey');
  };

  if (!apiKey) {
    return <ApiKeyPrompt onApiKeySave={handleApiKeySave} />;
  }

  const renderContent = () => {
    switch (mode) {
      case 'quiz':
        return <Quiz apiKey={apiKey} />;
      case 'conversation':
        return <Conversation apiKey={apiKey} />;
      default:
        return <Quiz apiKey={apiKey} />;
    }
  };

  const NavButton: React.FC<{
    label: string;
    targetMode: AppMode;
    icon: React.ReactNode;
  }> = ({ label, targetMode, icon }) => {
    const isActive = mode === targetMode;
    return (
      <button
        onClick={() => setMode(targetMode)}
        className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 ${
          isActive
            ? 'text-emerald-600 bg-emerald-50'
            : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100'
        }`}
      >
        {icon}
        <span className="hidden sm:inline text-sm font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-slate-100">
      <header className="bg-white shadow-md z-10 sticky top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 sm:gap-6">
              <h1 className="text-xl font-bold text-slate-800">AlexIA</h1>
              <nav className="flex items-center gap-2">
                 <NavButton label="Esercizi" targetMode="quiz" icon={<BookOpenIcon className="h-5 w-5" />} />
                 <NavButton label="Conversazione" targetMode="conversation" icon={<MicrophoneIcon className="h-5 w-5" />} />
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
               <button onClick={handleApiKeyClear} className="text-xs text-slate-500 hover:text-emerald-600 whitespace-nowrap">
                Cambia Key
              </button>
              <div className="hidden sm:flex items-center space-x-1">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span className="w-4 h-4 bg-white border-2 border-slate-300 rounded-full"></span>
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;