import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';

const NavBar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>
      {/* Navigation Links */}
      {/* <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div> */}
      {/* Auth */}
      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton>
            <Button>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
