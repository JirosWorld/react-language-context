import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';
import content from '../../data/content.json';
import './Header.css';
import {LanguageContext} from "../../context/LanguageContext";

function Header() {
  //importeer de juiste functies
  const { setNlFunction } = useContext(LanguageContext);
  const { setEsFunction } = useContext(LanguageContext);
  const { activeLanguage } = useContext(LanguageContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                {activeLanguage === "nl" ? "home " : "casa "}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about-us">
                {activeLanguage === "nl" ? content.nl.header.menuItems.aboutUs : content.es.header.menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {activeLanguage === "nl" ? content.nl.header.menuItems.allPlants : content.es.header.menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{activeLanguage === "nl" ? content.nl.header.changeTo : content.es.header.changeTo}</p>
              {activeLanguage === "nl" ?
                  <button
                      type="button"
                      onClick={setEsFunction}
                  >

                    <FlagES/>
                  </button>
                  :
                  <button
                      type="button"
                      onClick={setNlFunction}
                  >
                    <FlagNL/>
                  </button>
              }
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{activeLanguage === "nl" ? content.nl.header.title : content.es.header.title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
