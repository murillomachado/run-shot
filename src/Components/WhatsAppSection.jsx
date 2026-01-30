import React from 'react';
import { MessageCircle, ArrowRight, Camera, ShieldCheck } from 'lucide-react';

const WhatsAppSection = () => {
    // Configurações do WhatsApp
    const WHATSAPP_NUMBER = "5545999999999"; // Substitua pelo seu número
    const INITIAL_MESSAGE = encodeURIComponent("Olá! Participei de um evento e quero encontrar minhas fotos usando reconhecimento facial.");
    const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${INITIAL_MESSAGE}`;

    return (
        <section id="buscar" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-0" />

            <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-12">
                    <h2 className="text-4xl font-black text-white mb-4 leading-tight">
                        Pronto para <span className="text-orange-500">se ver</span> em ação?
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Inicie uma conversa no WhatsApp. Nosso assistente guiará você no envio da selfie e localizará suas fotos em segundos.
                    </p>
                </div>

                <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
                    <div className="space-y-8">
                        {/* Ícone e Feedback Visual */}
                        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                            <div className="relative bg-green-500 p-5 rounded-3xl text-white shadow-lg shadow-green-900/40">
                                <MessageCircle size={40} fill="currentColor" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Fluxo de Busca Inteligente</h3>
                            <ul className="text-left space-y-3">
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold text-xs">1</div>
                                    <span>Envie seu <b>E-mail</b> e <b>Evento</b></span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold text-xs">2</div>
                                    <span>Envie sua <b>Selfie</b> de referência</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center font-bold text-xs">3</div>
                                    <span>Receba sua <b>Galeria</b> na mesma conversa</span>
                                </li>
                            </ul>
                        </div>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full bg-green-600 hover:bg-green-500 text-white p-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 hover:scale-[1.02]"
                        >
                            INICIAR BUSCA NO WHATSAPP
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="pt-4 flex items-center justify-center gap-6 border-t border-white/10">
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                                <Camera size={14} className="text-orange-500" /> Reconhecimento Ativo
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                                <ShieldCheck size={14} className="text-orange-500" /> Dados Criptografados
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-slate-500 text-xs italic">
                    *Ao clicar, você será redirecionado para o WhatsApp oficial do RUNSHOT.
                </p>
            </div>
        </section>
    );
};

export default WhatsAppSection;