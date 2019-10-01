function firstDayInMonth(day, month, year) {
	/* Die Funktion firstDayInMonth() ermittelt den 1. Tag
	 * eines Monats, egal welcher Wochentag das ist
	 *
	 * Autor: Christian Imhorst
	 *
	 * Parameter:
	 * year = Das Jahr, z.B. 2019
	 * month = Der Monat von 0 bis 11
	 * day = Der Wochentag im Monat von 0 - 6: 0 ist Sonntag, 1 ist Samstag
	 */
    var y = year;
    var m = month;
    return new Date(y, m, 1 + (day - new Date(y, m, 1).getDay() + 7) % 7);
}

function nthDayInMonth(n, day, month, year) {
	/* Die Funktion nthDayInMonth() ermittelt den 1. 
	 * Wochentag eines Monats, z.B. immer den 1. Mittwoch
	 *
	 * Benötigte Funktion: firstDayInMonth()
	 *
	 * Parameter:
	 * year = Das Jahr, z.B. 2019
	 * month = Der Monat von 0 bis 11
	 * day = Der Wochentag im Monat von 0 - 6: 0 ist Sonntag, 1 ist Samstag
	 */
    var y = year;
    var m = month;
    var d = firstDayInMonth(day, m, y);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (n - 1) * 7);
}

// Berechne den 1. Mittwoch. Wenn es ein Feiertag ist, dann nimm den Mittwoch in 8 Tage.
var y = (new Date().getFullYear());
var m = (new Date().getMonth()); // Wert von 0 - 11

// Wenn das Treffen stattgefunden hat, das nächste Treffen anzeigen:
if ((nthDayInMonth(1, 3, m, y)).getTime() < Date.now()) { //(new Date(2018,8,5).getTime())
    m = m + 1;
}

// Datum des Treffens am 1. Mittwoch
var datumTreffen = nthDayInMonth(1, 3, m, y)

// Ist das Treffen am 01.01., 01.05. oder am 03.10.? Dann ist es 8 Tage später
if (datumTreffen.getDate() === 1 && datumTreffen.getMonth() === 0 ||
    datumTreffen.getDate() === 1 && datumTreffen.getMonth() === 4 ||
    datumTreffen.getDate() === 3 && datumTreffen.getMonth() === 9) {
    var neuesDatumTreffen = new Date(datumTreffen);
    neuesDatumTreffen.setDate(neuesDatumTreffen.getDate() + 7);
    datumTreffen = neuesDatumTreffen;
}

// Ausgabe in HTML
var out = "";
var jahr = datumTreffen.getFullYear();
var monat = datumTreffen.getMonth();
var tag = datumTreffen.getDate();

out += 'Das n&auml;chste Treffen ist am <b>Mittwoch, den ' + (("0" + tag).slice(-2)) + '.' +
    ("0" + (monat + 1)).slice(-2) + '.' + jahr + ' um 19 Uhr</b>.';

document.getElementById("datumTreffen").innerHTML = out;
