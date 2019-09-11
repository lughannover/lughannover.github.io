# Die neue Homepage der Linux User Group Hannover

Die neue Homepage der LUG Hannover wurde mit GitLab Pages und Jekyll, einem Website 
Generator für statische HTML-Webseiten, erstellt.
Die fertige Seite selbst findest du hier: [lughannover.gitlab.io](https://lughannover.gitlab.io/)


## Wie funktioniert diese Seite?

Unter *_includes* sind HTML-Dateien für den Header und den Footer der Seite. 
Der Inhalt, der auf der Homepage in Footer und Header angezeigt werden, ändert man
allerdings in der Datei  *_config.yml* im Hauptverzeichnis.

Unter *_layouts* sind die HTML-Templates für die Webseite hinterlegt. Dabei ist
*index.html* das Template für die Hauptseite, *default.html* für alle Unterseiten,
die von *default.html* "erben", wie z.B. *page.html*. Das Template *index.html* 
enthält als Besonderheit den JavaScript-Code, um den ersten Mittwoch im Monat zu 
berechnen.

Unter *_pages* wird der Inhalt der Website in Markup-Dateien abgelegt (.md). Die 
*index.md* enhält den Text der Startseite. Die Datei *6 Gründe für Linux.md* 
enthält den Text der Unterseite **6 Gründe für Linux**. 

Es können weitere Unterseiten erstellt werden. Wichtig sind dann die Angaben im Kopf 
der Markup-Datei: 

* layout: page 
* title: Warum Linux?
* permalink: /gruende/


Das Layout der Seite kommt von *_layouts/page.html*, dann folgt der Titel der 
Seite und als 3. der Link, unter dem die Seite erreichbar sein soll, hier 
[*/gruende/*](https://lughannover.gitlab.io/gruende/).


## Was muss ich beachten?

Das LayOut der Seite wird in den HTML-Templates und durch das CSS geändert, das aus 
SASS-Dateien besteht, die man unter *_sass* und *css* findet (.scss). Will man am 
LayOut der Website nichts ändern, muss hier nichts weiter beachtet werden.

Unter *downloads* kann man alles zum Download ablegen, was für Menschen außerhalb 
der LUG evtl. auch interessant wäre.

Unter *img* sind Bilder und Grafiken der LUG zu finden.

Unter *js* werden JavaScript-Dateien der Website gespeichert:

* *ErsterMittwochImMonat.js* -- Errechnet den 1. Mittwoch im Monat, der kein Feiertag ist, und an dem unser Treffen stattfindet.
