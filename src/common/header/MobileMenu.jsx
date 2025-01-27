import { useState } from 'react';
import { MobileMenuWrap, MobileNavWrap, Overlay } from './style';
import MobileNav from './MobileNav';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MobileMenuWrap $isOpen={isOpen} onClick={toggleMenu}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </MobileMenuWrap>
            <Overlay $isOpen={isOpen} onClick={toggleMenu} />
            <MobileNavWrap $isOpen={isOpen}>
                <MobileNav isOpen={isOpen} />
            </MobileNavWrap>
        </>
    );
};

export default MobileMenu;
