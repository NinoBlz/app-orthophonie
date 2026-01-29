/**
 * Script du minuteur circulaire - Application Orthophonie
 */

let intervalId;
let totalDuration;
let startTime;

/**
 * Démarre le minuteur
 */
function startTimer() {
    const durationInput = document.getElementById('duration');
    const showOuterCheckbox = document.getElementById('showOuter');
    const soberModeCheckbox = document.getElementById('soberMode');
    totalDuration = parseInt(durationInput.value);

    if (!totalDuration || totalDuration <= 0) {
        alert('Veuillez entrer une durée valide !');
        return;
    }

    // Masquer la configuration et afficher la progression
    document.getElementById('setup').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'block';

    // Gérer le mode sobre
    if (soberModeCheckbox.checked) {
        document.body.classList.add('sober-mode');
    } else {
        document.body.classList.remove('sober-mode');
    }

    // Gérer l'affichage du cercle extérieur
    const outerCircle = document.querySelector('.outer-circle');
    if (!showOuterCheckbox.checked) {
        outerCircle.classList.add('hidden');
    } else {
        outerCircle.classList.remove('hidden');
    }

    startTime = Date.now();

    intervalId = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min((elapsed / (totalDuration * 1000)) * 100, 100);

        updateProgress(progress);

        if (progress >= 100) {
            clearInterval(intervalId);
            completeTimer();
        }
    }, 100);
}

/**
 * Met à jour la taille du cercle
 * @param {number} percentage - Pourcentage écoulé (0-100)
 */
function updateProgress(percentage) {
    const innerCircle = document.getElementById('innerCircle');
    const remaining = 100 - percentage;
    innerCircle.style.width = remaining + '%';
    innerCircle.style.height = remaining + '%';
}

/**
 * Appelé quand le minuteur est terminé
 */
function completeTimer() {
    document.getElementById('resetBtn').style.display = 'block';

    // Animation de fin
    const innerCircle = document.getElementById('innerCircle');
    innerCircle.style.animation = 'pulse 0.5s ease-in-out';
}

/**
 * Réinitialise le minuteur
 */
function resetTimer() {
    clearInterval(intervalId);
    document.getElementById('setup').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('innerCircle').style.width = '100%';
    document.getElementById('innerCircle').style.height = '100%';
    document.getElementById('resetBtn').style.display = 'none';
    document.querySelector('.outer-circle').classList.remove('hidden');
    document.body.classList.remove('sober-mode');
}

/**
 * Active/désactive le mode plein écran
 */
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Erreur plein écran:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

/**
 * Met à jour l'icône du bouton plein écran
 */
function updateFullscreenButton() {
    const btn = document.getElementById('fullscreenBtn');
    if (btn) {
        btn.textContent = document.fullscreenElement ? '⛶' : '⛶';
        btn.title = document.fullscreenElement ? 'Quitter le plein écran' : 'Plein écran';
    }
}

// Écouter les changements de mode plein écran
document.addEventListener('fullscreenchange', updateFullscreenButton);
