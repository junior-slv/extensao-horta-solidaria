import React from 'react'
import { BiCameraMovie } from 'react-icons/bi'

const Mission: React.FC = () => {
  return (
    <section className="grid w-full grid-cols-2 bg-green-100 p-20">
      <div className="mx-auto w-full px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Projeto Horta Solidária
        </h2>
        <p className="mb-8 font-thin text-gray-600 sm:text-xl">
          A Horta Solidária é um projeto social inovador promovido pela
          Prefeitura de Apucarana, dedicado a atender famílias carentes e idosos
          na comunidade. O projeto tem como base a criação e manutenção de
          hortas comunitárias, cujo propósito vai além da produção de alimentos
          saudáveis.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-center text-base font-medium text-white"
          >
            <BiCameraMovie className="text-lg" />
            Vídeo Explicativo
          </a>
        </div>
      </div>
      <div>
        <img
          src="/justificativa-imagem.jpg"
          alt="imagem projeto"
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default Mission
