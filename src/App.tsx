import { useState } from 'react';
import { AndroidEmulator } from './components/AndroidEmulator';
import { HydrationApp } from './components/HydrationApp';
import { ComposeCodeViewer } from './components/ComposeCodeViewer';
import { 
  Droplet, 
  Smartphone, 
  Layout, 
  Cpu, 
  RefreshCw, 
  Award, 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  TrendingUp, 
  Info, 
  User, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  FileCode
} from 'lucide-react';

export default function App() {
  const [activeLeftTab, setActiveLeftTab] = useState<'code' | 'rapport'>('code');

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
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                <p className="text-xs text-neutral-400">Démonstrateur d'application Material 3 et Générateur de Code ViewModel</p>
                <span className="text-[11px] text-cyan-400 font-medium">• Étudiante : N'guessan Miensa Orlane (RGL3A)</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800 self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Simulateur Interactif Live</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Description, Specs, Tabs & Viewers */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Student Info Presentation Banner */}
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-cyan-950/20 border border-neutral-800/80 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-950 flex items-center justify-center border border-neutral-800 text-cyan-400">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Auteur du Projet</span>
                <h2 className="text-base font-bold text-neutral-100">N'guessan Miensa Orlane</h2>
                <p className="text-xs text-neutral-400">Classe : <strong className="text-cyan-300">RGL3A</strong> • Projet d'Étude AI Studio</p>
              </div>
            </div>
            
            {/* Custom Tab selector styled like a smartphone widget */}
            <div className="flex bg-neutral-950 p-1.5 rounded-2xl border border-neutral-800/60 w-full sm:w-auto self-stretch sm:self-auto">
              <button
                onClick={() => setActiveLeftTab('code')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeLeftTab === 'code'
                    ? 'bg-neutral-800 text-cyan-400 shadow-md'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Code Compose</span>
              </button>
              <button
                onClick={() => setActiveLeftTab('rapport')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeLeftTab === 'rapport'
                    ? 'bg-neutral-800 text-cyan-400 shadow-md'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Rapport d'Étude</span>
              </button>
            </div>
          </div>

          {/* Conditional rendering of active tab */}
          {activeLeftTab === 'code' ? (
            <>
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
            </>
          ) : (
            /* Study Report Presentation */
            <div className="flex flex-col gap-6 overflow-y-auto pr-1">
              
              {/* Section 1: Structure du projet généré */}
              <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-cyan-950 text-cyan-400">
                    <Layout className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-neutral-100">Structure du Projet Généré : Une base solide</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800/60">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      UI Déclarative
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Composants <code className="text-cyan-300 font-mono">@Composable</code> structurés et totalement isolés pour garantir la réutilisabilité et la lisibilité du code d'interface graphique.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800/60">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Design System
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Fichiers de configuration centralisés <code className="text-cyan-300 font-mono">Color.kt</code> et <code className="text-cyan-300 font-mono">Theme.kt</code> respectant la charte Material 3 sombre aux accents turquoise.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800/60">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      State Management
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Architecture moderne avec séparation stricte de la vue et des données grâce au <code className="text-cyan-300 font-mono">ViewModel</code> exposant des flux d'états asynchrones réactifs.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800/60">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Build System
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Fichiers de build Gradle en Kotlin DSL (<code className="text-cyan-300 font-mono">build.gradle.kts</code>) intégrant toutes les dépendances AndroidX et Compose prêtes à l'emploi.
                    </p>
                  </div>

                </div>
              </div>

              {/* Section 2: Comparaison des Méthodes */}
              <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-cyan-950 text-cyan-400">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-neutral-100">Comparaison des Méthodes : Productivité vs Contrôle</h3>
                </div>

                <div className="overflow-hidden border border-neutral-800 rounded-2xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-neutral-950 border-b border-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        <th className="p-3 pl-4">Critère</th>
                        <th className="p-3">Classique (15-30 min)</th>
                        <th className="p-3 pr-4 text-cyan-400">AI Studio (1 min)</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs divide-y divide-neutral-800/60">
                      <tr className="hover:bg-neutral-900/40">
                        <td className="p-3 pl-4 font-semibold text-neutral-300">Configuration</td>
                        <td className="p-3 text-neutral-400">Création manuelle des fichiers, dépendances instables.</td>
                        <td className="p-3 text-cyan-300/80 font-medium">Boutonnage immédiat, structure optimisée d'office.</td>
                      </tr>
                      <tr className="hover:bg-neutral-900/40">
                        <td className="p-3 pl-4 font-semibold text-neutral-300">Création UI</td>
                        <td className="p-3 text-neutral-400">Saisie et ajustements de syntaxe à tâtons.</td>
                        <td className="p-3 text-cyan-300/80 font-medium">Génération descriptive rapide à partir d'intentions.</td>
                      </tr>
                      <tr className="hover:bg-neutral-900/40">
                        <td className="p-3 pl-4 font-semibold text-neutral-300">Résolution de bugs</td>
                        <td className="p-3 text-neutral-400">Lecture complexe de logs d'erreurs brutes.</td>
                        <td className="p-3 text-cyan-300/80 font-medium">Analyse et correction assistées par chat IA.</td>
                      </tr>
                      <tr className="hover:bg-neutral-900/40">
                        <td className="p-3 pl-4 font-semibold text-neutral-300">Focus Étudiant</td>
                        <td className="p-3 text-neutral-400">Concentré sur la syntaxe élémentaire.</td>
                        <td className="p-3 text-cyan-300/80 font-medium">Maîtrise de l'architecture et du design système.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Meilleures Pratiques de Prompting */}
              <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-cyan-950 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-neutral-100">Meilleures Pratiques de Prompting avec l'IA</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-neutral-950/50 border border-neutral-800/40">
                    <div className="p-1 bg-cyan-950 text-cyan-400 rounded-lg mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-200">Précision Technologique</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Exiger explicitement des technologies précises et modernes telles que <strong className="text-cyan-400">"Jetpack Compose"</strong> et <strong className="text-cyan-400">"Material 3"</strong> pour éviter d'obtenir du code XML obsolète.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 rounded-xl bg-neutral-950/50 border border-neutral-800/40">
                    <div className="p-1 bg-cyan-950 text-cyan-400 rounded-lg mt-0.5">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-200">Approche Incrémentale</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Structurer et fignoler d'abord l'interface utilisateur générale (mises en page, thèmes), puis injecter la logique réactive (les ViewModel, états de données) dans un second temps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start p-3 rounded-xl bg-neutral-950/50 border border-neutral-800/40">
                    <div className="p-1 bg-cyan-950 text-cyan-400 rounded-lg mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-200">Esprit Critique & Audit</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Vérifier systématiquement la cohérence des algorithmes, la gestion réactive et s'assurer que l'architecture répond à de hauts standards de qualité industriels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Pourquoi XML ? */}
              <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-cyan-950 text-cyan-400">
                    <FileCode className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-neutral-100">Pourquoi XML reste indispensable en Jetpack Compose ?</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Bien que Jetpack Compose remplace les layouts XML d'interface graphique, Android s'appuie toujours sur le XML pour configurer le système d'exploitation et les services bas niveau d'une application native.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">1. AndroidManifest.xml</span>
                    <h4 className="text-xs font-bold text-neutral-200 mt-1">Identité de l'App pour l'OS</h4>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Indique au système Android le nom de l'app, son icône, son point d'entrée unique (<code className="text-cyan-400 font-mono text-[10px]">MainActivity</code>) et ses permissions avant d'exécuter le moindre code Kotlin.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">2. themes.xml (Styles OS)</span>
                    <h4 className="text-xs font-bold text-neutral-200 mt-1">Splash Screen & Écran de Démarrage</h4>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Configure la couleur de fond de la fenêtre et des barres d'état système au moment exact où l'utilisateur appuie sur l'icône, évitant tout écran blanc transitoire le temps que Compose démarre.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">3. backup_rules.xml</span>
                    <h4 className="text-xs font-bold text-neutral-200 mt-1">Sécurité & Sauvegardes Cloud</h4>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Définit les fichiers locaux à sauvegarder sur Google Drive lors des transferts de téléphone. Les services de sauvegarde de l'OS lisent ce XML de façon asynchrone sans démarrer l'app.
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">4. Vector Drawables (XML)</span>
                    <h4 className="text-xs font-bold text-neutral-200 mt-1">Icônes Adaptatives Redimensionnables</h4>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Les icônes adaptatives modernes d'Android s'appuient sur un format vectoriel XML spécifique que le système d'exploitation sait afficher et animer de manière extrêmement fluide sur n'importe quelle taille d'écran.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

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
          <span>Oasis Tracker • Conçu avec amour avec Jetpack Compose, Material 3 & React</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-500" />
            <span>Projet d'Étude RGL3A • N'guessan Miensa Orlane</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

