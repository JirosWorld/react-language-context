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
Op basis van die taal-property krijg je een Nederlandse of Spaanse tekst. Probeer het maar eens! Hier ga je tussen wisselen op basis van de taal die via context wordt ingesteld.
* Maak eerst een aparte file om jouw context in te maken. Geef jouw context een descriptieve naam.
* Maak een context-provider component. Deze gebruikt state om de taal en de taal-setter functie in bij te houden.
* Gebruik het context-provider component en wrap deze om alle componenten heen die context nodig hebben
* Zorg dat alle pagina's die context weergeven, toegang hebben tot de data die in de context is geplaatst.

## Stappenplan

**Benodigdheden**:

* Context(`LanguageContext`)
* in die context beschikbaar: de geselecteerde taal ("NL / "ES")
* in context beschikbaar: taal-verander functie (`toggleLanguage`) zodat we in Header kunnen wisselen

1. `LanguageContext` maken (individueel bestand) en export
2. `LanguageContext` importeren in `App.js` - doet nog niets na importeren
3. Gebruiken van `LanguageContext.provider` en wikkelen dit als component om alle componenten heen in App.js
4. testen of provider werkt met Log maar ook meteen data er in zetten: Via de `value` property een data object in de context plaatsen (`const data = { test: "test"}`) 
5. dat kan alleen door die context in een ander component te gebruiken; kies een pagina en abonneer die op`LanguageContext`
   * importeer `LanguageContext`
   * `useContext` functie importeren uit React en aan roepen in `LanguageContext`
   * destructure de property uit het dataobject dat we nodig hebben, in dit geval de `test` property
   * toegang is niet voldoende, om het kunnen worden laten zien: gebruik de data die in `test` staat in het component: <p>{test}</p> (en/of console loggen)
6. Werkt dit? Zo ja dan verder
7. Maak op de plek waar je dataobject staat (wordt later `App.js`) een stukje State aan voor `setLanguage/toggleLanguage` o.i.d. zodat je geen letterlijke data erin zet maar alleen de state
8. Maak daar een aparte functie die bij aanroep (dmv de toggleLanguage functie) de taal op NL zet (nog steeds in App.js) 
9. Maak daar een aparte functie die bij aanroep (dmv de toggleLanguage functie) de taal op ES zet (nog niet in de Context component want die nog niet gemaakt dus <Counter.Provider> bestaat nog steeds zo)
10. Stop de 2 functies en de waarden v `language` in dat dataobject

```javascript
const [language, toggleLanguage] = useState('nl');

function setNl() {
   toggleLanguage('nl');
}
function setEs() {
   toggleLanguage('es');
}

const data = {
    activeLanguage: language,
   setNlFunction: setNl,
   setEsFunction: setEs,
}
```

11. (nu eerst checken of het wel werkt want alleen in context zetten is niet genoeg) Test of je 'de actieve taal' vanuit een pagina uit de context kunt halen en kunt loggen zoals stap 5 inclusief importeren.
12. dan op iedere pagina juiste content weergeven
13. zorg ervoor dat je met knopje on header van taal kunt wisselen, een andere vlag weergeven = onClick functie
14. maak dán pas het LanguageContextProvider **jasje**, dus 
* kopieer hele `function App.js ` uit App.js en plak dit in het context bestand en 
* verander de naam v d functie App naar `LanguageContextProvider` met {children}.
* Exporteer deze functie
* Wikkel het nieuwe LanguageContextProvider compnent om het <App/> compon. in index.js


BananaSecurity:

# Stappenplan 1e Banana opdracht maken
1. Mapje maken voor de context in de `src` folder
2. Bestandje maken met `AuthContext.js`
3. In de `AuthContext.js` gaan we twee dingen dingen doen:
   1. De daadwerkelijke `AuthContext` maken en die exporteren én
      `export const AuthContext = createContext({})`
   2. Het custom-ContextProvider component maken (als functie) en die als default exporteren. Vergeet hierbij niet dat
      dit component een `children` property nodig heeft! Wat je returned is het `.Provider`-component dat nu op
      de `AuthContext` beschikbaar is (zie slide 34)
```javascript
function AuthContextProvider() {
  return (<vul zelf in>)
    }
    export default AuthContextProvider;
```
4. Wikkel ons custom-provider component om de `<App />` heen (in `index.js`)
5. Maak data-object in het custom-provider component en stop er wat zelfbedachte data in
6. Geef de data mee aan de context doormiddel van de `value`-property (slide 36)
7. Test vervolgens of het werkt, door in één van de componenten van de applicatie gebruik te maken van de context en
   deze te loggen in de console! (slide 40)