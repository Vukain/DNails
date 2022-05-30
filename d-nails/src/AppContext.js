import React, { createContext, useState, useRef } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [sectionRefs, setSectionRefs] = useState([]);
    const [sectionNames] = useState(['header', 'usługi', 'kolory', 'wizyty', 'galeria'])
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentSection, setCurrentSection] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);

    // Listener state freeze bypass, must be doubled with normal state for button styling
    const currentSectionRef = useRef(currentSection);

    const context = {sectionRefs, setSectionRefs, 
        currentLevel, setCurrentLevel, 
        currentSection, setCurrentSection, 
        showModal, setShowModal,
        modalMessage, setModalMessage,
        modalState, setModalState,
        sectionNames, 
        currentSectionRef};

    return (
    <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>);
} 

export default AppProvider;