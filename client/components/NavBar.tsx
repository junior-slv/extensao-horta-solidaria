'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiBell, BiLeaf, BiSearchAlt2 } from 'react-icons/bi';

const NavItem: React.FC<{ href: string; active: boolean; activeClassName: string, children: string }> = ({ href, active, activeClassName, children }) => {
  return (
    <Link className={active ? activeClassName : ''} href={href}>
     {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
const pathname = usePathname()
  const ActiveStyle = `
    text-green-600
  `;

  return (
    <header className="sticky top-0 flex items-center justify-between bg-white p-4 text-white shadow-md">
      {/* título */}
      <div>
        <Link className="flex items-center justify-center gap-1" href="/">
            <BiLeaf className="text-3xl text-green-600" />
            <h2 className="text-2xl font-bold text-black">Horta Solidária</h2>
        </Link>
      </div>
      {/* navegação */}
      <nav className="inline-flex list-none gap-6 text-base font-semibold text-gray-500">
        <NavItem href="/" active={pathname === '/'} activeClassName={ActiveStyle}>
          Home
        </NavItem>
        <NavItem href="/projeto-de-extensao" active={pathname === '/projeto-de-extensao'} activeClassName={ActiveStyle}>
          Projeto de extensão
        </NavItem>
        <NavItem href="/atividades" active={pathname === '/atividades'} activeClassName={ActiveStyle}>
          Atividades
        </NavItem>
      </nav>
      {/* pesquisa + fique por dentro das novidades */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="rounded-full border-[0.5px] border-gray-400 p-2 outline outline-offset-1 outline-green-600 focus:outline-none	"
        >
          <BiSearchAlt2 className="text-xl text-gray-500" />
        </button>
        <div className="flex gap-2">
          <Link className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white" href="/newsletter">
              <BiBell />
              Novidades
          </Link>
        </div>
      </div>
    </header>
  );
};



export default Navbar;
