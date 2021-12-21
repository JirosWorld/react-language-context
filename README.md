# Opdracht - door Jiro

## Inleiding
Bob en Betsy hebben een website over planten en willen deze graag in zowel Spaans als Nederlands aanbieden. De gebruiker moet door het vlag-icoontje op de website van taal kunnen wisselen.
Alle vertalingen hebben zij gelukkig al voor je gemaakt. Gezien jij al super veel hebt geleerd over React, weet je dat je dit het beste kunt oplossen met React Context.

Je besluit Bob en Betsy te helpen.

Het project is opgezet met [Create React App](https://github.com/facebook/create-react-app).

## Eindresultaat
Je zult niets veranderen aan de styling - alleen aan de content. De website ziet er in het Nederlands zo uit:

![Eindresultaat](src/assets/screenshot.png)

## De applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. 
Begin met het maken van wijzigingen in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Randvoorwaarden
* Als de taal op 'Nederlands' staat, zijn alle teksten op de website het Nederlands.
* Als de taal op 'Spaans staat', zijn alle teksten op de website het Spaans.
* De gebruiker kan de taal wisselen door op de vlag in de header te klikken. De taal wordt dan aangepast doormiddel van context. Als de huidige taal op 'Spaans' staat, 
ziet de gebruiker 'Wissel taal naar [nederlandse vlag]'. Staat de taal op 'Nederlands', dan staat er: 'Cambiar el idioma a [spaanse vlag]'.

## Plan de campagne
* Ieder component of pagina die tekst gebruikt, importeert het content JSON bestand. Daarin staan zowel de keys "nl" als "es", maar de onderliggende object properties zijn exact hetzelfde.
Op basis van die taal-property krijg je een Nerlandse of Spaanse tekst. Probeer het maar eens! Hier ga je tussen wisselen op basis van de taal die via context wordt ingesteld.
* Maak eerst een aparte file om jouw context in te maken. Geef jouw context een descriptieve naam.
* Maak een context-provider component. Deze gebruikt state om de taal en de taal-setter functie in bij te houden.
* Gebruik het context-provider component en wrap deze om alle componenten heen die context nodig hebben
* Zorg dat alle pagina's die context weergeven, toegang hebben tot de data die in de context is geplaatst.

## Stappenplan

**Benodigdheden**:

* Context(`LanguageContext`)
* in die context beschikbaar: de geselecteerde taal ("NL / "ES")
* in cont. beschikbaar: taal-verander functie (`toggleLanguage`) zodat we in Header kunnen wisselen

1. `LanguageContext` maken (individueel bestand) en export
2. `LanguageContext` importeren in `App.js` - doet nog niets na importeren
3. Gebruiken van `LanguageContext.provider` en wikkelen dit als component om alle componenten heen in App.js
4. testen of provider werkt met Log maar ook meteen data er in zetten: Via de `value` property een data object in de context plaatsen (`const data = { test: "test"}`) 
5. dat kan alleen door die context in een ander component te gebruiken; kies een pagina en abonneer die op`LanguageContext`
   * importeer `LanguageContext`
   * `useContext` functie importeren uit React en aan roepen in `LanguageContext`
   * destructure de propert uit het dataobject dat we nodig hebben, in dit geval de `test` property
   * toegang is niet voldoende, om het kunnen worden laten zien: gebruik de data die in `test` staat in het component: <p>{test}</p> (en/of console loggen)
6. Werkt dit? Zo ja dan verder
7. Maak op de plek waar je dataobject staat een stukje State aan voor `setLanguage` o.i.d. zodat je geen letterlijke data erin zet maar alleen de state
8. 