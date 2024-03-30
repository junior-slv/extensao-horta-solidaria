import React from 'react'

const HortaSolidariaInformations: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-20 pt-20">
      <h1 className="mt-4 text-2xl font-bold tracking-wide text-green-900 sm:text-3xl">
        Contribuindo para o crescimento das hortas solidárias
      </h1>
      <p className="mt-6 text-center text-xl leading-7 text-gray-600">
        Nossa missão é desenvolver uma plataforma digital dedicada à
        horticultura. Oferecendo informações sobre técnicas de plantio, tempo de
        colheita e capacitando os usuários a registrar e gerenciar suas
        atividades na horta de forma simplificada, desde o plantio até a
        comercialização dos produtos.
      </p>

      <div className="flex px-4 py-6 text-center lg:px-6 lg:pt-10">
        <div className="grid gap-8 text-green-900 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <p className="mb-2 text-3xl font-bold text-green-600 md:text-5xl">
              500+
            </p>
            <p className="text-lg font-light text-gray-600">
              Horticultores impactados
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <p className="mb-2 text-3xl font-bold text-green-600 md:text-5xl">
              2000+
            </p>
            <p className="text-lg font-light text-gray-600">
              Área auxiliada (ha)
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <p className="mb-2 text-3xl font-bold text-green-600 md:text-5xl">
              20k+
            </p>
            <p className="text-lg font-light text-gray-600">
              Renda compartilhada (R$)
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <p className="mb-2 text-3xl font-bold text-green-600 md:text-5xl">
              200+
            </p>
            <p className="text-lg font-light text-gray-600">Hortas apoiadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HortaSolidariaInformations
