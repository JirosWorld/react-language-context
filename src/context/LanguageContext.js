import React, { createContext, useEffect, useState } from 'react';

// 1. Het aanmaken van de context
export const LanguageContext = createContext({});

function LanguageContextProvider({ children }) {
    // Stukje state maken voor onze dynamische waarde
    const [language, toggleLanguage] = useState('nl');

    function setNl() {
        toggleLanguage('nl');
    }
    function setEs() {
        toggleLanguage('es');
    }

    // Loggen: Data maken om in de context te plaatsen en die geven we via de value-property mee aan de context
    const data = {
        test: 'test!',
        activeLanguage: language,
        setNlFunction: setNl,
        setEsFunction: setEs,
    }
    console.log("taal:");
    console.log(language);

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;