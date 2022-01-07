import React, { useContext } from 'react';
import content from '../../data/content.json';
// abonneer deze pagina op de Context
import { LanguageContext} from "../../context/LanguageContext";

function Home() {
    // Destructeren van data die we nodig hebben. De waarde uit de context uitlezen
    const { test } = useContext(LanguageContext);

    //importeer de juiste functies
    const { activeLanguage } = useContext(LanguageContext);

  return (
    <div className="page-container">
      <h2>{activeLanguage === "nl" ? content.nl.home.title : content.es.home.title}</h2>
      <p>{activeLanguage === "nl" ? content.nl.home.introText : content.es.home.introText}</p>
        <p>data: {test}</p>
    </div>
  );
}

export default Home;
