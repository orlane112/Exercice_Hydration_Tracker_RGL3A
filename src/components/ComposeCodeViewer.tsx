import { useState } from 'react';
import { Copy, Check, FileCode, Code, Palette, BookOpen } from 'lucide-react';
import { waterViewModelCode, themeCode, hydrationScreenCode } from '../data/composeCode';

export function ComposeCodeViewer() {
  const [activeTab, setActiveTab] = useState<'viewmodel' | 'screen' | 'theme'>('screen');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    switch (activeTab) {
      case 'viewmodel':
        return waterViewModelCode;
      case 'theme':
        return themeCode;
      case 'screen':
      default:
        return hydrationScreenCode;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'viewmodel':
        return 'WaterViewModel.kt';
      case 'theme':
        return 'Theme.kt';
      case 'screen':
      default:
        return 'HydrationScreen.kt';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
      
      {/* Code Header with tab selection */}
      <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <h2 className="text-sm font-bold text-neutral-200 uppercase tracking-wider">Code Jetpack Compose</h2>
        </div>
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-300 hover:text-cyan-400 border border-neutral-800 transition-all cursor-pointer select-none"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copier le code</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-800 bg-neutral-950/50 p-1.5 gap-1 select-none">
        <button
          onClick={() => setActiveTab('screen')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'screen'
              ? 'bg-neutral-800 text-cyan-400 shadow-sm border-b border-cyan-500/20'
              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>HydrationScreen.kt</span>
        </button>

        <button
          onClick={() => setActiveTab('viewmodel')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'viewmodel'
              ? 'bg-neutral-800 text-cyan-400 shadow-sm border-b border-cyan-500/20'
              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40'
          }`}
        >
          <FileCode className="w-3.5 h-3.5" />
          <span>WaterViewModel.kt</span>
        </button>

        <button
          onClick={() => setActiveTab('theme')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'theme'
              ? 'bg-neutral-800 text-cyan-400 shadow-sm border-b border-cyan-500/20'
              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Theme.kt</span>
        </button>
      </div>

      {/* Code viewer console container */}
      <div className="flex-1 overflow-y-auto font-mono text-xs p-4 bg-neutral-950/80 text-neutral-300 leading-relaxed scrollbar-thin">
        <div className="flex items-center gap-2 mb-3 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800/80 w-fit select-none">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-[10px] text-neutral-400 font-bold">{getFileName()}</span>
        </div>

        <pre className="overflow-x-auto select-text whitespace-pre">
          <code>
            {getCode().split('\n').map((line, index) => {
              // Custom lightweight styling for kotlin keywords in the viewer to make it look exceptionally gorgeous
              let lineContent = line;
              const keywords = [
                'package', 'import', 'class', 'fun', 'val', 'var', 'data class', 'return', 'if', 'else', 'listOf', 'emptyList', 'override', 'private'
              ];
              
              return (
                <div key={index} className="table-row hover:bg-neutral-900/40 px-1 rounded">
                  <span className="table-cell text-right pr-4 text-neutral-600 select-none text-[10px] w-8">
                    {index + 1}
                  </span>
                  <span className="table-cell pl-1 text-neutral-300">
                    {lineContent}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* M3 Theme Color palette status bar for theme.kt context */}
      {activeTab === 'theme' && (
        <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center gap-4 text-[10px] text-neutral-400 select-none">
          <span className="font-bold uppercase tracking-wider">Palette Material 3 Turquoise :</span>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-[#00E5FF] border border-neutral-800"></span>
              <span>Primary (0xFF00E5FF)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-[#4DD0E1] border border-neutral-800"></span>
              <span>Secondary (0xFF4DD0E1)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-[#121212] border border-neutral-800"></span>
              <span>Background (0xFF121212)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
