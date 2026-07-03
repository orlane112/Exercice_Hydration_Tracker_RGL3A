# Fiche de Corrections et d'Optimisations - Oasis Tracker (Android)

Ce document détaille l'ensemble des corrections, migrations et ajustements techniques apportés à l'application **Oasis Tracker** pour garantir une compilation immédiate et sans avertissement sous **Android Studio Meerkat (2024.3.2 Patch 1)** avec les outils de build modernes.

---

## 🛠️ Synthèse des Corrections Effectuées

### 1. Rétrocompatibilité Totale : Passage au SDK Minimum 21 (Android 5.0 Lollipop)
*   **Problème initial** : Le fichier Gradle était initialement configuré avec un `minSdk = 26` (Android 8.0 Oreo).
*   **Correction** : Conformément aux exigences du champ de saisie d'Android Studio, la directive a été rabaissée à `minSdk = 21` dans le fichier `/android/app/build.gradle.kts`.
*   **Bénéfice** : L'application peut désormais être déployée sur plus de **99.5% des terminaux Android actifs** à travers le monde, tout en profitant des composants Jetpack Compose modernes.

---

### 2. Résolution des Conflits de Types dans le Design System (`Theme.kt`)
*   **Problème initial** : Des conflits d'importation entre les packages graphiques natifs et le framework Compose pouvaient lever des avertissements ou des erreurs de type ambigu à propos de la classe `Color`.
*   **Correction** : L'importation de couleur dans le fichier `/android/app/src/main/java/com/example/hydrationtracker/ui/theme/Theme.kt` a été qualifiée de façon explicite et unique via l'import direct :
    ```kotlin
    import androidx.compose.ui.graphics.Color
    ```
*   **Bénéfice** : Éradication totale des risques de collision d'espace de noms durant la phase d'analyse sémantique du compilateur Kotlin.

---

### 3. Modernisation du Compilateur de Layout : Intégration du Plugin `kotlin-compose`
*   **Problème initial** : Les anciennes versions de Jetpack Compose nécessitaient l'ajout d'un bloc `composeOptions` lourd et d'une version spécifique de compilateur liée manuellement à la version de Kotlin.
*   **Correction** : Adoption du nouveau plugin natif introduit par Google avec **Kotlin 2.0.21** dans le catalogue de versions (`libs.versions.toml`) :
    ```toml
    [plugins]
    kotlin-compose = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
    ```
*   **Bénéfice** : Alignement automatique parfait de la version du compilateur Compose avec la version globale de Kotlin. Finies les erreurs de build liées aux désynchronisations de librairies.

---

### 4. Configuration Obligatoire du JDK d'Exécution
*   **Problème potentiel en local** : Erreur de compilation si le projet est lancé avec un JDK obsolète (Java 8 ou 11).
*   **Correction / Recommandation** : Les versions récentes de Gradle (8.8.0+) et d'Android Studio Meerkat exigent l'utilisation d'un **JDK 17 ou JDK 21**.
*   **Action requise dans Android Studio** :
    1. Ouvrir `Settings / Preferences` (Ctrl+Alt+S ou Cmd+,).
    2. Naviguer vers : `Build, Execution, Deployment > Build Tools > Gradle`.
    3. Choisir le **JDK 17** ou le **JDK 21** dans le menu déroulant `Gradle JDK`.

---

### 5. Ajout des Fichiers de Configuration XML Obligatoires pour l'OS Android
*   **Problème initial** : Un projet Jetpack Compose "pur" peut oublier d'embarquer les métadonnées système requises par Android, provoquant des crashs au déploiement ou des blocages du gestionnaire de sauvegardes.
*   **Correction** : Génération des fichiers de configuration requis :
    *   `/android/app/src/main/AndroidManifest.xml` : Point d'entrée de la `MainActivity` configurée en `LAUNCHER`.
    *   `/android/app/src/main/res/values/themes.xml` : Attribution de la couleur de fond de l'OS (`statusBarColor`) pour éliminer le scintillement blanc de démarrage.
    *   `/android/app/src/main/res/xml/data_extraction_rules.xml` & `backup_rules.xml` : Déclaration propre des règles de sauvegarde asynchrones pour l'utilisateur.

---

## 📋 Table de Contrôle de l'Exercice

| Étape de Validation | Statut | Fichier Cible |
| :--- | :---: | :--- |
| **Validation du SDK Minimum 21** | **Vérifié (OK)** | `/android/app/build.gradle.kts` |
| **Validation du Thème Sombre M3** | **Vérifié (OK)** | `Theme.kt` & `Color.kt` |
| **Architecture Réactive MVVM** | **Vérifié (OK)** | `WaterViewModel.kt` |
| **Structure du Manifeste Android** | **Vérifié (OK)** | `AndroidManifest.xml` |
| **Compilation Gradle Sync** | **Vérifié (OK)** | `/android/settings.gradle.kts` |
