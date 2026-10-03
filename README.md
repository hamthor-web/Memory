# Ein Wort – zwei Bedeutungen

Installierbares Wort-Memory mit 20 Wortpaaren und 80 Fragesätzen.

Beim Start werden 6, 8, 10 oder 12 Paare gewählt. Neue Fehlpaare bleiben
5 Sekunden offen, bereits bekannte Fehlpaare 2 Sekunden. Gefundene Karten
bleiben angegraut mit Häkchen sichtbar. Zu jedem Treffer folgt eine Wortfrage.

## GitHub Pages

Alle App-Dateien liegen im Repository-Hauptverzeichnis. GitHub Pages muss
aus dem Hauptverzeichnis des Branches main veröffentlichen:
https://hamthor-web.github.io/Memory/

Das Manifest verwendet relative Start-, Scope- und Icon-Pfade.
Der Service Worker speichert beim ersten Online-Aufruf die komplette App
einschließlich aller Bilddateien. Nach abgeschlossener Speicherung kann
die App ohne Internet neu geöffnet und gespielt werden.

Die Icons stammen aus 1000256580.png. Enthalten sind 192- und 512-Pixel-Icons,
ein 180-Pixel-Apple-Touch-Icon und ein separates maskierbares 512-Pixel-Icon.

Bei Änderungen an gespeicherten Dateien die Cache-Version in sw.js erhöhen.
