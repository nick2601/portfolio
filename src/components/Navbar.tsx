import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, ThemeProvider } from '../context/ThemeContext';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 ${isScrolled ? 'bg-opacity-90 backdrop-blur' : ''}`}
        >
            {/* Navigation content */}
            <button onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </motion.nav>
    );
}; 