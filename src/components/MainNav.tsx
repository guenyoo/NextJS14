'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function MainnNav() {
  const pathName = usePathname();
  return (
    <ul className="list-none grid gap-4 grid-cols-[repeat(4,max-content)]">
      {links.map((link) => (
        <li key={link.name} className={clsx('inline', pathName === link.path ? 'font-bold' : '')}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
