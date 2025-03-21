window.addEventListener('load', function () {
    loadContent('home');
});

function loadContent(section) {
    let content = '';


    if (section === 'home') {
        content = `
           <h2 data-aos="fade-up" style="color: #8a2be2; font-size: 2.5em; font-weight: bold;">Über uns</h2>

            <p data-aos="fade-up" style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
                Willkommen bei <strong style="color: #8a2be2;">Agent Anarchy</strong> – einem hochgradig engagierten Esport-Team, das sich auf das Spiel <em>Valorant</em> spezialisiert hat. Unsere Leidenschaft für das Spiel und unser Streben nach Erfolg motivieren uns, jeden Tag auf das nächste Level zu gehen. Wir sind ein Team aus erfahrenen Spielern, die nicht nur als Individuen glänzen, sondern als eine starke Einheit zusammenarbeiten.
            </p>

            <p data-aos="fade-up" style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
                <strong style="color: #8a2be2;">Unsere Vision:</strong> Es ist unser Ziel, auf nationaler und internationaler Ebene zu dominieren und die Spitze der Esports-Welt zu erreichen. Wir setzen auf kontinuierliche Verbesserung, Teamarbeit und strategisches Gameplay, um bei jedem Turnier unser Bestes zu geben.
            </p>

            <p data-aos="fade-up" style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
                <strong style="color: #8a2be2;">Unsere Werte:</strong>
            </p>

            <ul data-aos="fade-up" style="font-size: 1.2em; line-height: 1.6; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 10px;"><strong>Teamarbeit:</strong> Erfolg entsteht durch enge Zusammenarbeit und Kommunikation.</li>
                <li style="margin-bottom: 10px;"><strong>Integrität:</strong> Ehrlichkeit und Fairplay sind für uns von höchster Bedeutung.</li>
                <li style="margin-bottom: 10px;"><strong>Beständigkeit:</strong> Wir arbeiten hart, um uns kontinuierlich zu verbessern.</li>
                <li style="margin-bottom: 10px;"><strong>Leidenschaft:</strong> Wir lieben, was wir tun, und das sieht man in unserem Gameplay.</li>
            </ul>

            <p data-aos="fade-up" style="font-size: 1.2em; line-height: 1.6; margin-bottom: 20px;">
                <strong style="color: #8a2be2;">Agent Anarchy</strong> ist mehr als nur ein Team – es ist eine Familie, die zusammenhält und gemeinsam auf das nächste Ziel hinarbeitet. Wir sind stolz darauf, eine starke Community von Fans und Unterstützern hinter uns zu haben. Schließe dich uns an und werde Teil der Anarchy!
            </p>

        `;
    } else if (section === 'team') {
        content = `
            <h2 data-aos="fade-up">Derzeitiges Roster</h2>
            <div class="team-member" data-aos="zoom-in" data-aos-delay="200">
                <img src="png/player1.png" alt="Spieler 1">
                <h3>Spieler 1</h3>
                <p>Rolle: Duelist</p>
            </div>
            <div class="team-member" data-aos="zoom-in" data-aos-delay="400">
                <img src="png/player2.png" alt="Spieler 2">
                <h3>Spieler 2</h3>
                <p>Rolle: Controller</p>
            </div>
            <div class="team-member" data-aos="zoom-in" data-aos-delay="600">
                <img src="png/player3.png" alt="Spieler 3">
                <h3>Spieler 3</h3>
                <p>Rolle: Initiator</p>
            </div>
        `;
    } else if (section === 'news') {
        content = '<h2 data-aos="fade-up">Neuigkeiten</h2><p data-aos="fade-up">Unsere neuesten Updates...</p>';
    } else if (section === 'calendar') {
        content = '<h2 data-aos="fade-up">Spielkalender</h2><p data-aos="fade-up">Hier sind unsere nächsten Matches...</p>';
    }

    // Dynamisches Ersetzen des Inhalts im Hauptbereich
    document.getElementById('main-content').innerHTML = content;

    // Nach dem Laden des neuen Inhalts, AOS neu initialisieren
    AOS.refresh();  // Nur Animationen neu anwenden
}
