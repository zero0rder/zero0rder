import React, { createContext } from 'react'

export const ResumeContext = createContext<{ 
    isResume: boolean; 
    setIsResume: React.Dispatch<React.SetStateAction<boolean>>; 
}>({isResume: false, setIsResume: () => false})

export const DrawerContext = createContext<{
    isDrawerOpen: boolean; 
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({isDrawerOpen: false, setIsDrawerOpen: () => false})

export const ModalContext = createContext<{
    isModalOpen: boolean; 
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({isModalOpen: false, setIsModalOpen: () => false})

// export type ModalType = 'os' | 'contact' | 'about' | null;

export const ModalTypeContext = createContext<{
    modalType: string|null; 
    setModalType: React.Dispatch<React.SetStateAction<string|null>>;
}>({modalType: null, setModalType: () => null})