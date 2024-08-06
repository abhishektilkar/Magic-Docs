import { Karla } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/" passHref>
        <Image src="/logo.svg" height={40} width={40} alt="logo" />
      </Link>
      <h2 className={`text-2xl ml-2 ${karla.className}`}>
        Magic Docs
      </h2>
    </div>
  );
}

export default Logo;
