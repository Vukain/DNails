import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [sections, setSections] = useState([]);
    const [sectionNames] = useState(['header', 'services', 'appointment', 'calendar', 'gallery'])
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentSection, setCurrentSection] = useState(0);

    return (
    <AppContext.Provider value={{sections, setSections, currentLevel, setCurrentLevel, currentSection, setCurrentSection, sectionNames}}>
        {children}
    </AppContext.Provider>);
} 

export default AppProvider;