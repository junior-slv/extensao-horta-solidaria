import React from "react";

const Video: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-20" id="video">
      <div className="text-center font-bold">
        <h1 className="mb-3 text-4xl font-bold tracking-wide text-gray-900">
          Vídeo Institucional
        </h1>
        <p className="mb-8 font-light text-gray-500 sm:text-xl">
          Conheça mais sobre a nossa instituição
        </p>
        <div className=" mx-auto w-2/3">
          {/* Elemento <iframe> para incorporar o vídeo do YouTube */}
          <iframe
            title="Vídeo Institucional"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/KpcRwfvsy3s?si=E-1x4UDlV3kEhYpN"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
