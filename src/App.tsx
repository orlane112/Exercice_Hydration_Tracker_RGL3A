import { AndroidEmulator } from './components/AndroidEmulator';
import { HydrationApp } from './components/HydrationApp';
import { ComposeCodeViewer } from './components/ComposeCodeViewer';
import { Droplet, Smartphone, Layout, Cpu, RefreshCw, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Premium Dashboard Header */}
      <header className="border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Droplet className="w-5.5 h-5.5 text-neutral-950 fill-neutral-950" />
            </div>
            <div>
              <h1 className="text-xl font-black text-neutral-100 tracking-tight flex items-center gap-2">
                Suivi d'Hydratation Android <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Jetpack Compose</span>
              </h1>
              <p className="text-xs text-neutral-400">Démonstrateur d'application Material 3 et Générateur de Code ViewModel</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Simulateur Interactif Live</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Description, Specs & Jetpack Compose Code Viewer */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Intro Information Card */}
          <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-neutral-200 flex items-center gap-2">
              <Layout className="w-5 h-5 text-cyan-400" />
              <span>Architecture & Fonctionnalités</span>
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Ce démonstrateur simule fidèlement une application Android native d'hydratation. 
              Le design applique les directives de style **Material 3 (M3) Dark Theme** avec des accents turquoise vifs pour un effet rafraîchissant haut de gamme.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-2">
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800/60 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">ViewModel</span>
                </div>
                <span className="text-[11px] text-neutral-400">Gestion réactive et robuste de l'état avec des StateFlows.</span>
              </div>

              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800/60 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Objectif 2L</span>
                </div>
                <span className="text-[11px] text-neutral-400">Suivi d'un objectif de 2L avec cercle de progression fluide.</span>
              </div>

              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800/60 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Material 3</span>
                </div>
                <span className="text-[11px] text-neutral-400">Thème sombre premium, boutons arrondis et palette turquoise.</span>
              </div>
            </div>
          </div>

          {/* Jetpack Compose Code Viewer */}
          <div className="flex-1 min-h-[400px]">
            <ComposeCodeViewer />
          </div>
        </div>

        {/* Right Side: High-Fidelity Android Emulator with Interactive App */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-2 bg-neutral-950">
          
          {/* Floating interactive instructions badge */}
          <div className="mb-4 flex items-center gap-2 text-xs font-bold text-cyan-400/90 bg-cyan-950/30 border border-cyan-500/20 px-4 py-2 rounded-2xl shadow-sm select-none">
            <Smartphone className="w-4 h-4" />
            <span>Touchez l'émulateur ci-dessous pour interagir</span>
          </div>

          <AndroidEmulator>
            <HydrationApp />
          </AndroidEmulator>
        </div>
      </main>

      {/* Decorative footer */}
      <footer className="border-t border-neutral-900 py-6 px-6 mt-12 bg-neutral-950/40 text-center select-none text-xs text-neutral-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Suivi d'Hydratation Android • Conçu avec amour avec Jetpack Compose & React</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-500" />
            <span>100% Type-Safe & Conforme Material Design 3</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
