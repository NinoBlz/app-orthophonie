/**
 * Script du minuteur à barre de progression - Application Orthophonie
 */

let intervalId;
let totalDuration;
let startTime;

/**
 * Démarre le minuteur
 */
function startTimer() {
    const durationInput = document.getElementById('duration');
    totalDuration = parseInt(durationInput.value);

    if (!totalDuration || totalDuration <= 0) {
        alert('Veuillez entrer une durée valide !');
        return;
    }

    // Masquer la configuration et afficher la barre de progression
    document.getElementById('setup').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'block';

    startTime = Date.now();
    const endTime = startTime + (totalDuration * 1000);

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
 * Met à jour la barre de progression
 * @param {number} percentage - Pourcentage de progression (0-100)
 */
function updateProgress(percentage) {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = percentage + '%';
}

/**
 * Appelé quand le minuteur est terminé
 */
function completeTimer() {
    document.getElementById('resetBtn').style.display = 'block';

    // Animation de fin
    const progressFill = document.getElementById('progressFill');
    progressFill.style.animation = 'pulse 0.5s ease-in-out';
}

/**
 * Réinitialise le minuteur
 */
function resetTimer() {
    clearInterval(intervalId);
    document.getElementById('setup').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('resetBtn').style.display = 'none';
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
