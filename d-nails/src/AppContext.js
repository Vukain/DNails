import React, { createContext, useState, useRef } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [sectionRefs, setSectionRefs] = useState([]);
    const [sectionNames] = useState(['header', 'usługi', 'kolory', 'wizyty', 'galeria'])
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentSection, setCurrentSection] = useState(0);
    // Listener state freeze bypass, must be doubled with normal state for button styling
    const currentSectionRef = useRef(currentSection);

    return (
    <AppContext.Provider value={{sectionRefs, setSectionRefs, currentLevel, setCurrentLevel, currentSection, setCurrentSection, sectionNames, currentSectionRef}}>
        {children}
    </AppContext.Provider>);
} 

export default AppProvider;