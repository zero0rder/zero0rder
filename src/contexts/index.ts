import React, { createContext } from 'react'

export const ResumeContext = createContext<{ 
    isResume: boolean; 
    setIsResume: React.Dispatch<React.SetStateAction<boolean>>; 
}>({isResume: false, setIsResume: () => false})

export const DrawerContext = createContext<{
    isOpen: boolean; 
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({isOpen: false, setIsOpen: () => false})

export const ContactWrapperContext = createContext<{
    element: HTMLDivElement | null
}>({element: null})

export const OSWrapperContext = createContext<{
    element: HTMLDivElement | null
}>({element: null})