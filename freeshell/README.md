# Verzeichnis mit Skripten in der FreeShell #

Mit den folgenden Skripten, die in einer FreeShell laufen, werden unsere nächsten Termine und Konfigurationsdateien für die Homepage und den Mailversand der Einladungsmail über unsere Maillingliste.

## ErsterMittwochImMonat
Python-Skript, das den 1. Mittwoch eines Monats errechnet, wenn der nicht auf einen Feiertag fällt. Dann werden 7 Tage zum Datum des 1. Mittwoch hinzugerechnet.

Als Parameter werden dem Skript Jahr und Monat übergeben. Der 1. Mittwoch im Januar 2020 war der 08. Januar 2020:

```
$ ./ErsterMittwochImMonat 2020 01
      08. Januar 2020
```

Der Mittwoch wird aber erst angezeigt, wenn der 08. Januar, der Tag an der das LUG-Treffen war, schon vergangen ist, also erst nach dem nächsten Termin. Mit dem Parameter "-m" bekommt man jeden 1. Mittwoch angezeigt, egal, ob der Termin schon war, oder nicht.

```
$ ./ErsterMittwochImMonat 2020 02 -m
      05.02.2020
```

Außerdem erstellt das Skript eine JavaScript-Datei mit dem nächsten LUG-Termin unter "~/public_html/termin.js", die auf der GitGub-Page eingebunden wird.

Das Pythonskript wird aufgerufen von der Datei

## lugh

Mit dem Bash-Skript *lugh* wird der Einladungstext nach "~/public_html/Einladung.txt" geschrieben, der dann mit dem *mail*-Befehl von Postfix an die Maillingliste verschickt wird. *lugh* wird von *cron* täglich aufgerufen, das Skript, um die Einladung mit Postfix zu verschicken, monatlich.
