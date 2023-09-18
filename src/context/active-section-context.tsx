"use client";

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from 'react';

type ActiveSectionNameProps = {
    children: React.ReactNode; // Corrigido de chidren para children
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionNameProvider({ children }: ActiveSectionNameProps) { // Corrigido de chidren para children
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); 
    return (
        <div>
            <ActiveSectionContext.Provider value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}>
                {children} {/* Corrigido de chidren para children */}
            </ActiveSectionContext.Provider>   
        </div>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
}
