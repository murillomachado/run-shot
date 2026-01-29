import React, { useState, useEffect } from 'react';
import { Search, Globe, Cpu, UserCheck, CheckCircle2 } from 'lucide-react';

const LoadingIA = ({ onFinished }) => {
    const [currentStatus, setCurrentStatus] = useState(0);

    const statuses = [
        { icon: <Globe size={20} />, text: "Conectando aos bancos de dados esportivos...", duration: 2000 },
        { icon: <Search size={20} />, text: "Varrendo álbuns da Maratona de Verão...", duration: 3000 },
        { icon: <Cpu size={20} />, text: "Iniciando Reconhecimento Facial por IA...", duration: 3500 },
        { icon: <UserCheck size={20} />, text: "Filtrando melhores ângulos e iluminação...", duration: 2500 },
        { icon: <CheckCircle2 size={20} />, text: "Gerando sua galeria personalizada!", duration: 1500 },
    ];

    useEffect(() => {
        if (currentStatus < statuses.length) {
            const timer = setTimeout(() => {
                setCurrentStatus(prev => prev + 1);
            }, statuses[currentStatus].duration);
            return () => clearTimeout(timer);
        } else {
            onFinished();
        }
    }, [currentStatus]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                {/* Animação de Scan */}
                <div className="relative w-48 h-48 mx-auto mb-10">
                    <div className="absolute inset-0 border-4 border-orange-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-orange-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-4 overflow-hidden rounded-full bg-slate-50 flex items-center justify-center">
                        {/* Aqui podes colocar a foto que o usuário subiu com um efeito de scan passando por cima */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                            <Cpu size={48} className="animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent h-1/2 w-full animate-[scan_2s_ease-in-out_infinite]"></div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    A nossa IA está a trabalhar para si...
                </h2>

                {/* Lista de Status */}
                <div className="space-y-4 text-left">
                    {statuses.map((s, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-3 transition-all duration-500 ${index === currentStatus ? "text-orange-600 font-bold scale-105" :
                                    index < currentStatus ? "text-green-600 opacity-60" : "text-slate-300"
                                }`}
                        >
                            <div className={index < currentStatus ? "text-green-600" : ""}>
                                {index < currentStatus ? <CheckCircle2 size={20} /> : s.icon}
                            </div>
                            <span className="text-sm">{s.text}</span>
                            {index === currentStatus && (
                                <span className="flex gap-1">
                                    <span className="w-1 h-1 bg-orange-600 rounded-full animate-bounce"></span>
                                    <span className="w-1 h-1 bg-orange-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1 h-1 bg-orange-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-xs text-slate-400">
                    Não feche esta janela. Estamos a analisar mais de 5.000 fotos para encontrar os seus melhores momentos.
                </p>
            </div>

            <style jsx>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
      `}</style>
        </div>
    );
};

export default LoadingIA;