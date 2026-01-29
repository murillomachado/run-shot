import React from 'react';
import { Camera, Search, CheckCircle, Zap, ShieldCheck, ArrowRight, Star, Cpu, Clock } from 'lucide-react';
import PhotoShowcase from './photoShowcase';


const LandingPage = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-100">

            {/* --- NAV BAR --- */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
                        <div className="bg-orange-600 p-1 rounded-lg text-white"><Zap size={20} fill="currentColor" /></div>
                        <span>RUN<span className="text-orange-600">SHOT</span></span>
                    </div>
                    <button onClick={() => document.getElementById('buscar').scrollIntoView({ behavior: 'smooth' })}
                        className="text-sm font-bold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
                        Buscar Fotos
                    </button>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100 rounded-full blur-[120px] opacity-50" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-40" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        IA treinada para reconhecer você em movimento
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        Não procure suas fotos.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                            Deixe que elas te encontrem.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
                        Nossa inteligência artificial analisa milhares de fotos de todos os sites do evento para entregar seus melhores momentos em segundos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('buscar').scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-slate-200">
                            Encontrar minhas fotos <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                            <div className="pl-5 text-sm font-medium text-slate-500">+500 corredores hoje</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BENTO GRID FEATURES --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card Principal */}
                    <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative group">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                                    <Cpu size={28} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Curadoria Facial com IA</h3>
                                <p className="text-slate-400 max-w-md">
                                    Esqueça números de peito dobrados. Nosso algoritmo identifica traços faciais únicos para te encontrar mesmo em meio à multidão.
                                </p>
                            </div>
                            <div className="mt-12 flex gap-4">
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm">99.8% de Precisão</div>
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm">Busca Multissite</div>
                            </div>
                        </div>
                        {/* Elemento Decorativo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[80px] group-hover:bg-orange-600/40 transition-colors" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-orange-50 rounded-[2.5rem] p-10 border border-orange-100 flex flex-col justify-between">
                        <div className="bg-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                            <Clock size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Zero Espera</h3>
                            <p className="text-slate-600 text-sm italic leading-relaxed">
                                "Em vez de gastar minha tarde de domingo procurando fotos, eu apenas subi uma selfie e recebi tudo no meu e-mail."
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 flex flex-col justify-between">
                        <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-2xl font-bold">Privacidade Total</h3>
                        <p className="text-slate-500 text-sm">
                            Sua foto de referência é processada de forma criptografada e removida imediatamente após a busca.
                        </p>
                    </div>

                    {/* Card 4 - Prova Social */}
                    <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-200 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start gap-1 mb-4 text-orange-500">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Aprovado por Maratonistas</h3>
                            <p className="text-slate-500">Otimizamos o pós-prova de centenas de atletas profissionais e amadores todos os fins de semana.</p>
                        </div>
                        <div className="flex gap-4 overflow-hidden mask-fade">
                            <PhotoShowcase />

                        </div>
                    </div>
                </div>
            </section>



            {/* --- FORM SECTION --- */}
            <section id="buscar" className="py-24 bg-slate-900 relative">
                <div className="max-w-xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">Pronto para se ver?</h2>
                        <p className="text-slate-400">Preencha os dados e deixe a mágica acontecer.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl">
                            <div className="space-y-4">
                                <select className="w-full p-4 bg-white/10 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-white">
                                    <option className="bg-slate-900">Selecione o Evento</option>
                                    <option className="bg-slate-900">Maratona de Verão 2026</option>
                                </select>
                                <input type="text" placeholder="Seu Nome Completo" className="w-full p-4 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-orange-500" />
                                <input type="email" placeholder="E-mail para entrega" className="w-full p-4 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-orange-500" />

                                <div className="group relative border-2 border-dashed border-white/20 hover:border-orange-500/50 transition-colors bg-white/5 p-10 rounded-2xl text-center cursor-pointer">
                                    <Camera className="mx-auto text-orange-500 mb-2 group-hover:scale-110 transition-transform" size={32} />
                                    <p className="text-white font-medium">Subir foto de referência</p>
                                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Selfie ou Foto de Rosto</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={onStart}
                                    className="w-full bg-orange-600 hover:bg-orange-500 text-white p-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-orange-900/20">
                                    GERAR MINHA GALERIA AGORA
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
                    <div className="font-bold text-slate-900 text-xl tracking-tighter">
                        RUN<span className="text-orange-600">SHOT</span>
                    </div>
                    {/* <div className="flex gap-8 font-medium">
                        <a href="#" className="hover:text-orange-600 transition-colors">Termos</a>
                        <a href="#" className="hover:text-orange-600 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-orange-600 transition-colors">Suporte</a>
                    </div> */}
                    <p>© 2026 Run Shot Ltda.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;