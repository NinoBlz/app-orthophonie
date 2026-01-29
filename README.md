# Application Minuteurs pour l'Orthophonie

Application web de minuteurs visuels conçue pour les séances d'orthophonie. Elle permet aux orthophonistes et aux patients de visualiser le temps restant lors des exercices de rééducation.

## Fonctionnalités

### Deux styles de minuteurs

1. **Barre de Progression** (`progress_timer.html`)
   - Minuteur classique avec barre horizontale
   - Design simple et épuré
   - Idéal pour les exercices nécessitant une visualisation linéaire du temps

2. **Progression Circulaire** (`progress_circle.html`)
   - Minuteur moderne avec cercle qui rétrécit
   - Option pour afficher/masquer le cercle extérieur
   - Mode sobre (cercle blanc sur fond noir) pour réduire les distractions
   - Parfait pour les exercices de concentration

### Caractéristiques communes

- **Mode plein écran** : Bouton en haut à droite pour une meilleure visibilité
- **Durée personnalisable** : Définissez la durée en secondes selon vos besoins
- **Interface responsive** : Fonctionne sur ordinateurs, tablettes et smartphones
- **Sans installation** : Ouvrez simplement les fichiers HTML dans un navigateur

## Structure du projet

```
app-orthophonie/
├── index.html              # Page d'accueil avec sélection du minuteur
├── progress_timer.html     # Minuteur à barre de progression
├── progress_circle.html    # Minuteur circulaire
├── css/
│   ├── common.css          # Styles partagés entre les pages
│   ├── index.css           # Styles de la page d'accueil
│   ├── progress-timer.css  # Styles du minuteur à barre
│   └── progress-circle.css # Styles du minuteur circulaire
├── js/
│   ├── progress-timer.js   # Script du minuteur à barre
│   └── progress-circle.js  # Script du minuteur circulaire
└── README.md               # Documentation
```

## Utilisation

### Démarrage rapide

1. Ouvrez `index.html` dans votre navigateur web
2. Choisissez le style de minuteur souhaité
3. Définissez la durée de l'exercice (en secondes)
4. Cliquez sur "Démarrer"

### Mode plein écran

Cliquez sur le bouton ⛶ en haut à droite de l'écran pour activer le mode plein écran. Appuyez sur `Échap` ou cliquez à nouveau sur le bouton pour quitter.

### Minuteur circulaire - Options avancées

- **Cercle extérieur** : Cochez/décochez pour afficher ou masquer le cercle de fond
- **Mode sobre** : Active un affichage minimaliste (cercle blanc sur fond noir)

## Cas d'utilisation en orthophonie

- **Exercices de respiration** : Chronométrez les inspirations et expirations
- **Lecture minutée** : Mesurez le temps de lecture de textes
- **Exercices de prononciation** : Définissez une durée pour maintenir un son
- **Jeux de langage** : Limitez le temps de réflexion
- **Exercices de fluence** : Comptez les mots produits en un temps donné

## Technologies utilisées

- HTML5
- CSS3 (avec flexbox et grid)
- JavaScript (ES6)
- Aucune dépendance externe

## Compatibilité navigateurs

- Google Chrome (recommandé)
- Mozilla Firefox
- Microsoft Edge
- Safari

## Licence

Ce projet est libre d'utilisation pour les professionnels de santé et l'éducation.

---

Développé pour faciliter les séances d'orthophonie.
