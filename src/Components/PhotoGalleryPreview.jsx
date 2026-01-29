import React from 'react';
import { QrCode, Download, ArrowLeft, Star, ShoppingCart } from 'lucide-react';

const PhotoGalleryPreview = ({ onBack }) => {
    // Simulação das fotos encontradas pela IA
    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=400' },
        { id: 2, url: 'https://images.unsplash.com/photo-1452621933871-dd6e0ee14a58?q=80&w=400' },
        { id: 3, url: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=400' },
        { id: 4, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header da Galeria */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition">
                        <ArrowLeft size={20} /> Voltar e ajustar busca
                    </button>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900">Encontramos {photos.length} fotos incríveis!</h2>
                        <p className="text-slate-500">Selecionadas por IA baseadas no seu melhor ângulo.</p>
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star size={16} fill="currentColor" /> Curadoria Ativa
                    </div>
                </div>

                {/* Grade de Fotos com Marca d'Água */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                            <img
                                src={photo.url}
                                alt="Sua foto de corrida"
                                className="w-full h-72 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Overlay de Marca d'Água */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 select-none">
                                <span className="text-white text-4xl font-black rotate-[-30deg] border-4 border-white px-4 py-2 uppercase tracking-widest">
                                    PREVIEW IA
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Card de Oferta e Checkout (Gatilho de Contraste e Conveniência) */}
                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Seu pacote completo está pronto.</h3>
                        <p className="text-slate-600 mb-6">
                            Compramos as versões em alta resolução nos sites oficiais e entregamos tudo organizado no seu e-mail em até 5 minutos.
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle size={16} className="text-green-500" /> {photos.length} Fotos em Alta Resolução (Sem marca d'água)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle size={16} className="text-green-500" /> Curadoria e Busca em 4 plataformas incluída
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle size={16} className="text-green-500" /> Entrega Prioritária via E-mail
                            </li>
                        </ul>

                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-black text-slate-900 leading-none">R$ 47,90</span>
                            <span className="text-slate-400 line-through text-lg leading-none">R$ 89,00</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 italic font-medium text-orange-600">
                            *Economia de R$ 41,10 (Taxa de conveniência promocional de lançamento)
                        </p>
                    </div>

                    {/* Área do PIX (Gatilho de Urgência) */}
                    <div className="w-full md:w-80 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Pague com PIX para liberar</p>
                        <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-sm">
                            {/* Placeholder para o QR Code Real */}
                            <QrCode size={160} className="text-slate-800" />
                        </div>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
                            <ShoppingCart size={18} /> COPIAR CÓDIGO PIX
                        </button>
                        <p className="text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
                            <ShieldCheck size={12} /> Pagamento processado com segurança
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGalleryPreview;