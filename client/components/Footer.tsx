import Link from 'next/link';
import { ReactNode } from 'react';
import { BiLeaf } from 'react-icons/bi';

interface FooterItemProps {
  href: string;
  children: ReactNode;
}

const FooterItem: React.FC<FooterItemProps> = ({ href, children }) => {
  return (
    <li className="mb-4">
      <Link className="hover:underline" href={href} passHref>
        {children}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 text-green-900 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex items-center gap-1 text-2xl font-semibold md:mb-0">
            <BiLeaf />
            <span className="self-center whitespace-nowrap">Horta Solidária</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Recursos</h2>
              <ul className="font-medium">
                <FooterItem href="https://figma.com/">Figma</FooterItem>
                <FooterItem href="https://github.com/junior-slv/extensao-horta-solidaria">Github</FooterItem>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <FooterItem href="#">Política de privacidade</FooterItem>
                <FooterItem href="#">Termos &amp; Condições</FooterItem>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Horta Solidária™
            </a>
            . Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
