import React from 'react'
import { BiLeaf } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 text-green-900 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex items-center gap-1 text-2xl font-semibold md:mb-0">
            <BiLeaf />
            <span className="self-center whitespace-nowrap">
              Horta Solidária
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Recursos</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link to="https://figma.com/" className="hover:underline">
                    Figma
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/junior-slv/extensao-horta-solidaria"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Política de privacidade
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Termos &amp; Condições
                  </Link>
                </li>
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
  )
}

export default Footer
