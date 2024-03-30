import React from 'react'
import { BiBell, BiLeaf, BiSearchAlt2 } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const ActiveStyle = `
    text-green-600
  `

  const active = useLocation()

  return (
    <header className="sticky top-0 flex items-center justify-between bg-white p-4 text-white shadow-md">
      {/* titulo */}
      <div>
        <NavLink to={'/'}>
          <div className="flex items-center justify-center gap-1">
            <BiLeaf className="text-3xl text-green-600" />
            <h2 className="text-2xl font-bold text-black">Horta Solidária</h2>
          </div>
        </NavLink>
      </div>
      {/* navegacao */}
      <nav className="inline-flex list-none gap-6 text-base font-semibold text-gray-500">
        <NavLink
          to={'/'}
          className={active.pathname === '/' ? ActiveStyle : ''}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={'/projeto-de-extensao'}
          className={
            active.pathname === '/projeto-de-extensao' ? ActiveStyle : ''
          }
        >
          <li>Projeto de extensão</li>
        </NavLink>
        <>
          <NavLink
            to={'/atividades'}
            className={active.pathname === '/atividades' ? ActiveStyle : ''}
          >
            <li>Atividades</li>
          </NavLink>
        </>
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
          <NavLink to={'/newsletter'}>
            <button className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white">
              <BiBell />
              Novidades
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
