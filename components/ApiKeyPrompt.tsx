import React, { useState } from 'react';

interface ApiKeyPromptProps {
  onApiKeySave: (key: string) => void;
}

const ApiKeyPrompt: React.FC<ApiKeyPromptProps> = ({ onApiKeySave }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onApiKeySave(inputValue.trim());
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Benvenuto in AlexIA</h1>
        <p className="text-slate-600 mb-6">Per iniziare, inserisci la tua API Key di Google Gemini.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Inserisci la tua API Key qui"
            className="w-full p-3 border-2 border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            aria-label="API Key Input"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Salva e Inizia a Imparare
          </button>
        </form>
        
        <div className="mt-6 pt-4 border-t border-slate-200">
           <p className="text-sm text-slate-700 font-medium mb-3">
             Come ottenere la tua API Key gratuita:
           </p>
           <ol className="text-sm text-left list-decimal list-inside text-slate-600 space-y-2 mb-4">
             <li>
               Vai su{' '}
               <a
                 href="https://aistudio.google.com/app/apikey"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-emerald-600 hover:underline font-semibold"
               >
                 Google AI Studio
               </a>.
             </li>
             <li>Clicca sul pulsante "Create API key in new project".</li>
             <li>Copia la chiave generata e incollala nel campo qui sopra.</li>
           </ol>

           <p className="text-xs text-slate-500 mt-4">
             La tua chiave verrà salvata solo nel tuo browser e non sarà condivisa con nessuno.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyPrompt;