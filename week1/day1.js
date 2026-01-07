/*
const age = 67;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// Jetzt TESTE mit verschiedenen Werten:
// 1. Ändere age auf 15 → speichern → ausführen → was passiert?
// 2. Ändere age auf 18 → speichern → ausführen → was passiert?
// 3. Ändere age auf 67 → speichern → ausführen → was passiert?

// Schreibe hier deine Beobachtungen als Kommentar:
// Mit age = 15: minor
// Mit age = 18: adult
// Mit age = 67: adult
*/

//Task 2
/*
const temperature = 15;
if (temperature >= 25) {
  console.log("Hot");
} else if (temperature >= 15) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// Jetzt TESTE mit verschiedenen Werten:
// 1. temperature = 30 → was kommt raus?
// 2. temperature = 20 → was kommt raus?
// 3. temperature = 10 → was kommt raus?
// 4. temperature = 15 → was kommt raus? (GRENZFALL!)
// 5. temperature = 25 → was kommt raus? (GRENZFALL!)

// Deine Beobachtungen:
// temperature = 30: Hot
// temperature = 20: Warm
// temperature = 10: Cold
// temperature = 15: Cold
// temperature = 25: Warm

// Was hast du über else if gelernt?
// wenn man kein >= eingibt, dann kommen Grenzfälle raus. Mit if, else if und else kann man drei und mehr Bedingungen festlegen. Dann erst das Spezielle festlegen und danach das Allgemeine

// MEINE VERSION mit >= statt >
// Teste wieder mit: 30, 25, 20, 15, 10
// Stimmen die Ergebnisse jetzt besser? YES!

*/

// Task 3: Meine erste eigene if/else - Kino-Tickets
// Aufgabe: Ticket-Preis nach Alter

// DEIN CODE HIER:
/*
const age = 12;
if (age <= 8) {
  console.log("Ticket Price 8€");
} else if (age > 8) {
  console.log("Ticket Price 12€");
} else age >= 18;
{
  console.log("Ticket Price 15€");
}
*/
// TESTS (ändere age und führe mehrmals aus):
// Test 1: age = 8 → Ergebnis:
// Test 2: age = 12 → Ergebnis: 12 & 15€ :/ --> mistake!
// Test 3: age = 25 → Ergebnis:

/*
// Was ich gelernt habe:
// 1. else braucht keine Bedingung
if (x) { }
else { }  // ← fängt "alles andere" auf

// 2. Reihenfolge ist wichtig - wird von oben geprüft
if (age <= 8) { }      // zuerst
else if (age < 18) { } // dann (wenn erste false)
else { }               // zuletzt (wenn beide false)

// 3. Bei else if ist vorherige Bedingung schon false
else if (age < 18) // ← age ist automatisch > 8
                   //   weil <= 8 schon gecheckt wurde!

// 4. && = UND (beide müssen true sein)
if (age > 8 && age < 18) { }

// 5. Nur EINE Block läuft, dann ist Schluss!
*/

const age = 25;
if (age <= 8) {
  console.log("Ticket Price 8€");
} else if (age < 18) {
  console.log("Ticket Price 12€");
} else {
  console.log("Ticket Price 15€");
}

// TESTS (ändere age und führe mehrmals aus):
// Test 1: age = 8 → Ergebnis: 8 €
// Test 2: age = 12 → Ergebnis: 12 €
// Test 3: age = 25 → Ergebnis: 15 €
