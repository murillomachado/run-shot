import React from 'react';
// Importando as imagens da sua pasta assets
import runner1 from '../assets/celebration.jpg';
import runner2 from '../assets/win.jpg';
import runner3 from '../assets/corredores.jpg';

const PhotoShowcase = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

            <div className="relative w-full max-w-[300px] h-[400px] mt-10">

                {/* Foto 1 (Esquerda/Fundo) */}
                <div className="absolute inset-0 transform -rotate-12 -translate-x-16 translate-y-4 transition-all duration-500 hover:rotate-0 hover:translate-x-0 hover:z-40 group">
                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-slate-100">
                        <div className="relative overflow-hidden aspect-[3/4]">
                            <img src={runner1} alt="Exemplo 1" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                        </div>
                        <div className="h-8 mt-2 bg-slate-50 w-2/3 rounded-full animate-pulse" /> {/* Simula legenda da Polaroid */}
                    </div>
                </div>

                {/* Foto 2 (Centro) */}
                <div className="absolute inset-0 transform rotate-2 -translate-y-4 z-20 transition-all duration-500 hover:rotate-0 hover:translate-y-0 hover:z-40 group">
                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-slate-100">
                        <div className="relative overflow-hidden aspect-[3/4]">
                            <img src={runner2} alt="Exemplo 2" className="w-full h-full object-cover group-hover:scale-105 transition-all" />
                        </div>
                        <div className="h-8 mt-2 bg-slate-50 w-1/2 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Foto 3 (Direita/Frente) */}
                <div className="absolute inset-0 transform rotate-12 translate-x-16 translate-y-8 z-10 transition-all duration-500 hover:rotate-0 hover:translate-x-0 hover:z-40 group">
                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-slate-100">
                        <div className="relative overflow-hidden aspect-[3/4]">
                            <img src={runner3} alt="Exemplo 3" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                        </div>
                        <div className="h-8 mt-2 bg-slate-50 w-3/4 rounded-full animate-pulse" />
                    </div>
                </div>

            </div>

            <p className="mt-20 text-slate-400 text-sm italic">
                Encontramos sempre os melhores cliques!
            </p>
        </div>
    );
};

export default PhotoShowcase;