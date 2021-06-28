import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [sections, setSections] = useState([]);
    const [sectionNames] = useState(['home', 'Div1', 'Div2', 'Div3', 'Div4'])
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentSection, setCurrentSection] = useState(0);

    return (
    <AppContext.Provider value={{sections, setSections, currentLevel, setCurrentLevel, currentSection, setCurrentSection, sectionNames}}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;