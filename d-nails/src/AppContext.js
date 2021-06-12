import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [sections, setSections] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentSection, setCurrentSection] = useState(0);

    return (
    <AppContext.Provider value={{sections, setSections, currentLevel, setCurrentLevel, currentSection, setCurrentSection}}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;