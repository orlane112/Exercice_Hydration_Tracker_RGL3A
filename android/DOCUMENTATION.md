# Documentation de l'Application Oasis Tracker (Android)

Ce document présente les spécifications fonctionnelles et techniques de l'application **Oasis Tracker** de suivi d'hydratation, développée en **Jetpack Compose** pour **Android Studio Meerkat (2024.3.2 Patch 1)** par **N'guessan Miensa Orlane** (Classe : **RGL3A**).

---

## 📘 1. Documentation Fonctionnelle

### 🎯 Objectif de l'Application
L'application **Oasis Tracker** a pour vocation d'aider les utilisateurs à maintenir une hydratation saine au quotidien. Elle fournit une interface intuitive et rapide pour enregistrer la consommation d'eau et visualiser l'avancement vers l'objectif journalier recommandé de **2 Litres (2000 ml)**.

### 📱 Parcours Utilisateur & Fonctionnalités clés
1. **Écran Principal Unique (Dashboard)** :
   * Un design épuré sans distractions, idéal pour des interactions quotidiennes ultra-rapides.
   * Un **cercle de progression fluide** indiquant visuellement le taux d'accomplissement de l'objectif (ex: 50% pour 1000ml bus).
   * Des compteurs textuels dynamiques affichant la quantité bue en temps réel (ex: `1250 / 2000 ml`).

2. **Ajout Rapide de Boissons (+250 ml)** :
   * Un bouton d'action principal bien en évidence permettant d'enregistrer instantanément un verre d'eau standard de **250 ml** d'une seule tape.

3. **Réinitialisation (Reset)** :
   * Un bouton secondaire permettant de remettre à zéro les compteurs et de vider l'historique du jour pour démarrer une nouvelle session d'hydratation.

4. **Historique Dynamique de la Journée** :
   * Une liste déroulante (`LazyColumn` native sous Android / liste réactive animée sous le simulateur) qui liste toutes les boissons ajoutées aujourd'hui avec l'heure exacte de l'enregistrement.
   * Un message d'accueil amical s'affiche lorsque l'historique est encore vide.

5. **Paramétrage de l'Objectif (Oasis Tracker Premium Option)** :
   * Possibilité d'ajuster l'objectif quotidien via un volet de réglage de 1.5L à 3L selon les besoins spécifiques de l'étudiante.

---

## 🛠️ 2. Documentation Technique

### 🏗️ Architecture Mobile Moderne
L'application respecte rigoureusement l'architecture recommandée par Google pour le développement Android moderne : **MVVM (Model-View-ViewModel)** combiné à l'**UDF (Unidirectional Data Flow)**.

*   **View (Vue) : `HydrationScreen.kt` & `MainActivity.kt`** :
    *   L'UI est entièrement déclarative, utilisant Jetpack Compose.
    *   Elle s'abonne à l'état de l'application via `collectAsState()` sur le `StateFlow` exposé par le ViewModel.
*   **ViewModel : `WaterViewModel.kt`** :
    *   Conserve et orchestre l'état de l'UI de manière étanche aux changements de configuration (comme la rotation de l'écran).
    *   Utilise `MutableStateFlow` pour mettre à jour l'état interne de façon atomique et thread-safe, et expose un `StateFlow` en lecture seule à la vue.
*   **Model : `WaterLog` & `HydrationUiState`** :
    *   Objets de données légers (`data class`) décrivant l'état immuable de l'application à un instant T.

### 🎨 Thémage & Design System
L'interface applique les standards de **Material Design 3 (M3)** :
*   `Theme.kt` force le mode sombre (`darkColorScheme`).
*   `Color.kt` définit une palette d'accents turquoise vifs (`0xFF00E5FF` pour la couleur primaire) symbolisant la clarté et l'eau pure sur un fond noir absolu (`0xFF121212`) très économe en batterie d'écran OLED.

---

## 🧩 3. Pourquoi utilise-t-on encore des fichiers XML ?

Même si **Jetpack Compose** remplace avantageusement le système historique de layouts XML (les anciens fichiers `layout.xml` et les `View` impératives), **les fichiers XML restent indispensables** dans un projet Android moderne. Voici pourquoi :

### 1. `AndroidManifest.xml` (Le Manifeste de l'Application)
C'est la carte d'identité indispensable de votre application pour le système d'exploitation Android. 
*   **Rôle** : Il indique au smartphone le nom de l'application, son icône (`ic_launcher`), son package Java/Kotlin unique, ainsi que l'activité principale à démarrer au lancement (`MainActivity` contenant notre filtre d'intention `LAUNCHER`).
*   **Pourquoi en XML ?** Le système d'exploitation Android a besoin de lire ces métadonnées globales très rapidement **avant même** de charger la machine virtuelle Java/Kotlin et d'exécuter la moindre ligne de code Jetpack Compose. Le format XML est le standard universel et ultra-léger lu par l'OS pour cela.

### 2. `themes.xml` (Le Style Système de Base)
*   **Rôle** : Configure l'apparence de la "fenêtre de démarrage" (Splash Screen) et applique des styles bas niveau à la barre d'état système et à la barre de navigation.
*   **Pourquoi en XML ?** Lors du clic sur l'icône de l'appli, l'OS affiche instantanément une fenêtre vide temporaire aux couleurs du thème système avant que Jetpack Compose n'ait fini de s'initialiser en mémoire. Définir ces couleurs système de base en XML évite un écran blanc désagréable au démarrage.

### 3. Fichiers de Règles de Sauvegarde et Configuration (`data_extraction_rules.xml`, `backup_rules.xml`)
*   **Rôle** : Spécifient au service Google Drive de l'utilisateur quels dossiers locaux ou préférences de l'application doivent être sauvegardés ou exclus lors d'un transfert vers un nouveau téléphone.
*   **Pourquoi en XML ?** Le service de sauvegarde d'Android fonctionne en tâche de fond de manière totalement déconnectée de l'exécution de l'application. Il a besoin d'un fichier de configuration déclaratif standardisé (XML) pour connaître les règles d'extraction sans avoir à exécuter de code Kotlin.

### 4. Ressources de Densité d'Écran et Icônes vectorielles (`ic_launcher.xml` ou Vector Drawables)
*   **Rôle** : Fournir des icônes de lanceur adaptatives et des illustrations vectorielles légères.
*   **Pourquoi en XML ?** Les fichiers Vector Drawables sous Android utilisent un sous-ensemble XML du format SVG. L'OS et Android Studio s'appuient sur ce format structuré pour redimensionner proprement les icônes de l'app sur toutes les résolutions d'écrans du marché sans perte de qualité.
