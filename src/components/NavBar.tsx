import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      {/* Auth */}
      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
