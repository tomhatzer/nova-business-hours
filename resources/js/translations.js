translations = {
    switchOpen: 'Geöffnet',
    switchClosed: 'Geschlossen',
    placeholderOpens: 'Öffnet',
    placeholderCloses: 'Schließt',
    addHours: 'Zeit hinzufügen',
    open: {
        invalidInput: 'Bitte geben Sie eine Öffnungszeit im 12-Stunden-Format ein (z. B. 08:00 Uhr). Sie können auch "24 Stunden" eingeben.',
        greaterThanNext: 'Bitte geben Sie eine Öffnungszeit ein, die vor der Schließzeit liegt.',
        lessThanPrevious: 'Bitte geben Sie eine Öffnungszeit ein, die nach der vorherigen Schließzeit liegt.',
        midnightNotLast: 'Mitternacht kann nur für die letzte Schließzeit des Tages gewählt werden.'
    },
    close: {
        invalidInput: 'Bitte geben Sie eine Schließzeit im 12-Stunden-Format ein (z. B. 05:00 PM). Sie können auch "24 Stunden" oder "Mitternacht" eingeben.',
        greaterThanNext: 'Bitte geben Sie eine Schließzeit ein, die nach der Öffnungszeit liegt.',
        lessThanPrevious: 'Bitte geben Sie einen Schließzeitpunkt ein, der vor dem nächsten Öffnungszeitpunkt liegt.',
        midnightNotLast: 'Mitternacht kann nur für den letzten Schließzeitpunkt des Tages ausgewählt werden.'
    },
    t24hours: '24 Stunden',
    midnight: 'Mitternacht',
    days: {
        monday: 'Montag',
        tuesday: 'Dienstag',
        wednesday: 'Mittwoch',
        thursday: 'Donnerstag',
        friday: 'Freitag',
        saturday: 'Samstag',
        sunday: 'Sonntag',
        newYearsEve: 'Silvester', // prettier-ignore
        newYearsDay: 'Neujahrstag', // prettier-ignore
        martinLutherKingJrDay: 'Martin Luther King, Jr. Day',
        presidentsDay: 'Tag der Präsidenten', // prettier-ignore
        easter: 'Ostern',
        memorialDay: 'Volkstrauertag',
        independenceDay: 'Unabhängigkeitstag',
        fourthOfJuly: '4th of July',
        laborDay: 'Tag der Arbeit',
        columbusDay: 'Kolumbus-Tag',
        veteransDay: 'Tag der Veteranen',
        thanksgivingDay: 'Erntedanktag',
        christmasEve: 'Heiligabend',
        christmas: 'Weihnachten',
    }
}

module.exports = translations
