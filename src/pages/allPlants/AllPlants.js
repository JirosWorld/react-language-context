import React, { useContext } from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContext";

function AllPlants() {
    //importeer de juiste functies
    const { activeLanguage } = useContext(LanguageContext);

  return (
    <div className="page-container">
      <h2>{activeLanguage === "nl" ? content.nl.plants.title : content.es.plants.title}</h2>
      <p>{activeLanguage === "nl" ? content.nl.plants.text : content.es.plants.text}</p>
      <ul>
        {activeLanguage === "nl" ? content.nl.plants.plants.map((plant) => <li>{plant}</li>) : content.es.plants.plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
