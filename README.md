# Historischer Vorläufer – ersetzt durch Memory & Lesen

Dieses Repository wird archiviert und nicht mehr weiterentwickelt.

Die aktuelle Fassung von „Ein Wort – zwei Bedeutungen“ liegt in [memory-sammlung/wortmemory](https://github.com/hamthor-web/memory-sammlung/tree/main/docs/wortmemory). Sie enthält auch das Fernrohrbild und den dazu passenden Fragesatz. Die Sammlung verwendet eigene Dateien und benötigt dieses Einzelrepository nicht.

Archivierung von Heike am 29.10.2026 bestätigt. Die folgende Beschreibung dokumentiert den älteren Stand; insbesondere die Zeitangaben zum Schließen von Fehlpaaren gelten nur für diesen Vorläufer.

---

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
