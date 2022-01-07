import React, { useContext } from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContext";

function AboutUs() {
    //importeer de juiste functies
    const { activeLanguage } = useContext(LanguageContext);

  return (
    <div className="page-container">
      <h2>{activeLanguage === "nl" ? content.nl.aboutUs.title : content.es.aboutUs.title}</h2>
      <p>Dit is je profielpagina!</p>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{activeLanguage === "nl" ? content.nl.aboutUs.writers : content.es.aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
