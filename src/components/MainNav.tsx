import Link from 'next/link';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function MainnNav() {
  return (
    <ul className="list-none grid gap-4 grid-cols-[repeat(4,max-content)]">
      {links.map((link) => (
        <li key={link.name} className="inline">
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
