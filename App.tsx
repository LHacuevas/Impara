import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Conversation from './components/Conversation';
import ApiKeyPrompt from './components/ApiKeyPrompt';
import type { AppMode } from './types';
import { BookOpenIcon, MicrophoneIcon } from './components/Icons';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('quiz');
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Carica la chiave API dal localStorage all'avvio
    const storedApiKey = localStorage.getItem('userApiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
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
        return <Quiz apiKey={apiKey} isOnline={isOnline} />;
      case 'conversation':
        return isOnline ? <Conversation apiKey={apiKey} /> : <OfflineContent />;
      default:
        return <Quiz apiKey={apiKey} isOnline={isOnline} />;
    }
  };
  
  const OfflineContent = () => (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Modalità Offline</h2>
        <p className="text-slate-600">
          La modalità conversazione richiede una connessione a Internet attiva.
          <br/>
          Puoi comunque continuare a fare gli esercizi predefiniti!
        </p>
      </div>
    </div>
  );

  const NavButton: React.FC<{
    label: string;
    targetMode: AppMode;
    icon: React.ReactNode;
    disabled?: boolean;
    title?: string;
  }> = ({ label, targetMode, icon, disabled, title }) => {
    const isActive = mode === targetMode;
    return (
      <button
        onClick={() => !disabled && setMode(targetMode)}
        disabled={disabled}
        title={title}
        className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 ${
          isActive
            ? 'text-emerald-600 bg-emerald-50'
            : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100'
        } ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
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
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="AlexIA Logo" className="h-8 w-8 rounded-lg" />
                <span className="text-xl font-bold text-slate-800">AlexIA</span>
              </div>
              <nav className="flex items-center gap-2">
                 <NavButton label="Esercizi" targetMode="quiz" icon={<BookOpenIcon className="h-5 w-5" />} />
                 <NavButton 
                    label="Conversazione" 
                    targetMode="conversation" 
                    icon={<MicrophoneIcon className="h-5 w-5" />}
                    disabled={!isOnline}
                    title={!isOnline ? "Funzionalità non disponibile offline" : "Parla con Alex"}
                 />
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full transition-colors ${isOnline ? 'bg-green-500' : 'bg-slate-400'}`} title={isOnline ? 'Online' : 'Offline'}></span>
                <button onClick={handleApiKeyClear} className="text-xs text-slate-500 hover:text-emerald-600 whitespace-nowrap">
                  Cambia Key
                </button>
              </div>
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