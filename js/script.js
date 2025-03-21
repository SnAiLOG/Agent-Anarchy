// Funktion, um den entsprechenden Inhalt zu laden
function loadContent(section) {
    let content = '';

    // Inhalte basierend auf der gewählten Sektion
    if (section === 'home') {
        content = '<h2>Über uns</h2><p>Agent Anarchy ist ein Esport-Team...</p>';
    } else if (section === 'team') {
        content = `
            <h2>Unser Team</h2>
            <div class="team-member">
                <img src="png/player1.png" alt="Spieler 1">
                <h3>Spieler 1</h3>
                <p>Rolle: Duelist</p>
            </div>
            <div class="team-member">
                <img src="png/player2.png" alt="Spieler 2">
                <h3>Spieler 2</h3>
                <p>Rolle: Controller</p>
            </div>
            <div class="team-member">
                <img src="png/player3.png" alt="Spieler 3">
                <h3>Spieler 3</h3>
                <p>Rolle: Initiator</p>
            </div>
        `;
    } else if (section === 'news') {
        content = '<h2>Neuigkeiten</h2><p>Unsere neuesten Updates...</p>';
    } else if (section === 'calendar') {
        content = '<h2>Spielkalender</h2><p>Hier sind unsere nächsten Matches...</p>';
    }

    // Dynamisches Ersetzen des Inhalts
    document.getElementById('main-content').innerHTML = content;
}
