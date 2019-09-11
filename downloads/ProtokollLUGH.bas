REM  *****  BASIC  *****
'
' LibreOffice Makro zum Erzeugen von Protokollen für die LUG Hannover
' Autor: Christian Imhorst 
'
' Nützliche Links:
' ================
'
' VBA-Zeichentabelle: http://vba-wiki.net/index.php?title=Zeichentabelle

Option Explicit

Sub ProtokollLUGH
	' Variablen definieren:
	Dim oDoc As Object
	Dim sTeilnehmer, sNeu As String
	
	' Abfrage wieviele Teilnehmer*innen da sind ...
	sTeilnehmer = InputBox ("Anzahl der Teilnehmer*innen: ","Teilnahme")
	' und wieviele davon neu:
	sNeu = InputBox ("Anzahl davon neu: ","Davon neue Teilnehmer*innen")
	
	' Der Text wird ins aktuelle Writer-Dokument geschrieben, Zoom = 160%:
	oDoc = thisComponent
	oDoc.CurrentController.ViewSettings.ZoomValue = 160
	
	' Der Text:
	oDoc.text.string = "Protokoll LUG Hannover-Treffen vom " & date() & chr(13) & _
	"====================================" & chr(13) & chr(13) & _
	"Teilgenommen: " & sTeilnehmer & ", davon neu: " & sNeu & chr(13) & chr(13) & _
	"0. Wie halte ich Kontakt zur LUG-Hannover:" & chr(13) & chr(13) & _
	chr(9) & "Maillingliste: " & "http:" & chr(47) & chr(47) & "www" & chr(46) & "han" & ".de" & chr(47) & "mailman" & chr(47) & "listinfo" & chr(47) & "lugh" & chr(13) & chr(13) & _
	chr(9) & "Twitter: @lughannover" & chr(13) & chr(13) & _
	"Wir sammeln erst mal alle Punkte, bevor wir beginnen:" & chr(13) & chr(13) & _
	"1." & chr(13) & chr(13) & _
	"2." & chr(13) & chr(13) & _
	"3." & chr(13) & chr(13) & chr(13)& chr(13) & _
	"99. Kneipe" 

End Sub
