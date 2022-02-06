import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { BiCommentDetail } from 'react-icons/bi';
import Modal from './modal';

const NavigationBar = ({toggleMenu}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navigation-container flex justify-between items-center'>
            <span className='p-4'>
                <HiOutlineMenu className='menu_burger' onClick={() => toggleMenu()}/>
            </span> 
            <span className='p-4'>
                <BiCommentDetail className='contact_bubble' onClick={() => setIsOpen(true)}/>
            </span>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </nav>
    )
}

export default NavigationBar;