import Converter from '@/components/Converter';
import { Metadata } from "next"
import { Instagram, Linkedin, Facebook, ArrowRight, Zap, Shield, Smile, CheckCircle2, HelpCircle } from 'lucide-react';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = {
  title: 'Converter HEIC para JPG Online - Grátis e Ilimitado | Rocktools',
  description: 'Converta fotos HEIC do iPhone para JPG em segundos. Ferramenta online gratuita, segura e sem perda de qualidade. Arraste e solte agora!',
  keywords: ['HEIC para JPG', 'converter HEIC', 'foto iPhone para PC', 'formato HEIC'],
  openGraph: {
    title: 'Converter HEIC para JPG Online - Grátis',
    description: 'Transforme HEIC em JPG instantaneamente.',
    url: 'https://heictojpg.com.br',
    siteName: 'HEICtoJPG Rocktools',
    images: [
      {
        url: '/og-image.png', // Crie uma imagem de compartilhamento chamativa
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "HEICtoJPG Rocktools",
                "alternateName": "Conversor HEIC para JPG",
                "url": "https://heictojpg.com.br",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Windows, macOS, Android, iOS",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "BRL"
                },
                "description": "Converta fotos HEIC do iPhone para JPG online e gratuitamente. Rápido, seguro e sem perda de qualidade."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Como converter HEIC para JPG gratuitamente?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Basta arrastar seus arquivos HEIC para nossa ferramenta, aguardar o processamento e clicar em download para baixar sua imagem em formato JPEG."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O conversor HEIC para JPG é seguro?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a Rocktools processa os arquivos em tempo real e não armazena suas fotos em nossos servidores, garantindo total privacidade."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Zap size={20} className="text-white" fill="currentColor" />
                        </div>
                        <p className="font-bold text-xl tracking-tight">HEIC<span className="text-blue-600">to</span>JPG</p>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
    <a href="#como-converter" className="hover:text-blue-600 transition">Como Converter</a>
    <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
    <a href="#tudo-sobre-heic" className="hover:text-blue-600 transition">Guia HEIC</a> {/* Novo Link */}
    <a href="https://rocktools.com.br" target="_blank" className="hover:text-blue-600 transition">Rocktools</a>
</nav>
                </div>
            </header>

            <main>
                <section className="py-12 md:py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
                            Converter <span className="text-blue-600">HEIC para JPG</span> <br />
                            Online e Grátis
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Transforme fotos do seu iPhone (HEIC) em arquivos JPEG universais em segundos. Sem perda de qualidade e sem necessidade de cadastro.
                        </p>

                        <Converter />

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> 100% Seguro</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> Sem Cadastro</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> Qualidade Original</span>
                        </div>
                    </div>
                </section>

                <section id="como-converter" className="py-16 bg-white border-y border-slate-200 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Como converter HEIC para JPG?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <article className="relative p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                                <span className="text-5xl font-black text-blue-100 absolute top-4 right-6 leading-none">1</span>
                                <h3 className="font-bold text-lg mb-2 text-slate-800">Upload</h3>
                                <p className="text-slate-600 text-sm">Selecione ou arraste suas fotos .HEIC do seu dispositivo para o conversor.</p>
                            </article>
                            <article className="relative p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                                <span className="text-5xl font-black text-blue-100 absolute top-4 right-6 leading-none">2</span>
                                <h3 className="font-bold text-lg mb-2 text-slate-800">Processamento</h3>
                                <p className="text-slate-600 text-sm">Nossa tecnologia Rocktools converte o formato de alta eficiência para JPEG instantaneamente.</p>
                            </article>
                            <article className="relative p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                                <span className="text-5xl font-black text-blue-100 absolute top-4 right-6 leading-none">3</span>
                                <h3 className="font-bold text-lg mb-2 text-slate-800">Download</h3>
                                <p className="text-slate-600 text-sm">Clique no botão de baixar e pronto! Sua foto está pronta para ser usada em qualquer lugar.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-16 px-4 bg-slate-50">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
                            <HelpCircle className="text-blue-600" /> Perguntas Frequentes
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-lg mb-2 text-slate-800">O que é um arquivo HEIC?</h3>
                                <p className="text-slate-600 leading-relaxed font-normal">HEIC (High Efficiency Image Container) é o formato padrão da Apple para fotos no iOS. Embora economize espaço, ele não é compatível com todos os computadores, por isso a necessidade de converter para JPG.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-lg mb-2 text-slate-800">O conversor é gratuito?</h3>
                                <p className="text-slate-600 leading-relaxed font-normal">Sim, o conversor de HEIC para JPEG da Rocktools é 100% gratuito e não exige criação de conta ou cartão de crédito.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção de Guia de Uso e Blog Post */}
<section id="tudo-sobre-heic" className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                Tudo o que você precisa saber sobre arquivos HEIC
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-blue-600">Por que converter HEIC para JPG?</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        O formato <strong>HEIC (High Efficiency Image Coding)</strong> foi adotado pela Apple a partir do iOS 11. Ele é excelente para economizar espaço no seu iPhone, chegando a ocupar metade do tamanho de um JPG comum sem perder qualidade.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        No entanto, o grande problema é a <strong>compatibilidade</strong>. Softwares de edição antigos, sistemas Windows anteriores ao 10 e muitos sites de envio de documentos ainda não aceitam o formato .heic. Converter para JPG garante que sua foto abra em qualquer lugar.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Dicas de Uso</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                            <span><strong>Envio de Documentos:</strong> Muitos portais do governo e bancos aceitam apenas JPG ou PDF.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                            <span><strong>Redes Sociais:</strong> Embora Instagram aceite HEIC, postar via Desktop as vezes exige o formato JPG.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                            <span><strong>Impressão:</strong> Gráficas e totens de revelação de fotos costumam ler apenas o padrão JPEG.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="my-12 border-slate-100" />

            {/* Seção Técnica Complementar - Coloque logo após suas Dicas de Uso */}
<div className="mt-16 space-y-12">
    
    {/* Tabela Comparativa (Fator de Ranking no Google) */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 text-center">
            <h3 className="font-bold text-slate-800">HEIC vs JPG: Qual a diferença real?</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50/30">
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100">Característica</th>
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-blue-600 border-b border-slate-100 text-center">HEIC (Novo)</th>
                        <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 text-center">JPG (Clássico)</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-normal">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 border-b border-slate-100 text-slate-700 font-medium">Compressão</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-green-600">Alta (Menor arquivo)</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-slate-500">Média</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 border-b border-slate-100 text-slate-700 font-medium">Cores (Deep Color)</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-slate-600 font-semibold">16 bits</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-slate-500">8 bits</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 border-b border-slate-100 text-slate-700 font-medium">Compatibilidade</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-red-500">Restrita a Apple</td>
                        <td className="px-6 py-4 border-b border-slate-100 text-center text-green-600 font-semibold">Universal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>

<hr className="my-12 border-slate-100" />

            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900">Como abrir arquivos HEIC no Windows?</h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                    Se você não quer converter todas as suas fotos, o Windows 10 e 11 permitem baixar uma extensão chamada <strong>"Extensões de Vídeo HEVC"</strong> na Microsoft Store. Porém, ela é paga em alguns casos. Nosso conversor <strong>HEICtoJPG Rocktools</strong> surge como uma alternativa gratuita e sem instalação para resolver isso instantaneamente.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6 mt-8">
                    <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                        <h4 className="font-bold text-slate-800 mb-2">Qualidade</h4>
                        <p className="text-sm text-slate-500 font-normal">Mantemos os metadados (EXIF) da foto original, como data e local.</p>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                        <h4 className="font-bold text-slate-800 mb-2">Privacidade</h4>
                        <p className="text-sm text-slate-500 font-normal">As fotos são processadas e deletadas. Sua privacidade é nossa prioridade.</p>
                    </div>
                    <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                        <h4 className="font-bold text-slate-800 mb-2">Velocidade</h4>
                        <p className="text-sm text-slate-500 font-normal">Conversão em massa de até 5 arquivos simultâneos </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </main>

            <footer className="bg-slate-900 text-slate-400 py-12 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left">
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-4 italic">Rocktools</h2>
                        <p className="max-w-sm mb-6 text-sm leading-relaxed">
                            Especialistas em performance digital e ferramentas que facilitam o dia a dia de empresas e usuários.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <a href="https://instagram.com/digitalrocktools" className="hover:text-blue-400 transition" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://linkedin.com/company/digitalrocktools" className="hover:text-blue-400 transition" aria-label="Linkedin"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                        <Link href="/privacidade" className="text-xs hover:text-white underline decoration-slate-700 underline-offset-4">
                            Privacidade e Termos de Uso
                        </Link>
                    </div>
                    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 self-start">
                        <h3 className="text-white font-semibold mb-2 text-left">Desenvolvido por Rocktools</h3>
                        <p className="text-xs mb-4 text-left font-normal">Transformamos tecnologia complexa em soluções simples para o seu negócio.</p>
                        <a href="https://rocktools.com.br" target="_blank" className="text-blue-400 font-medium inline-flex items-center gap-2 hover:underline">
                            Conheça a Rocktools <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-[10px] uppercase tracking-widest">
                    © {new Date().getFullYear()} HEICtoJPG.com.br - Ferramenta Gratuita.
                </div>
            </footer>
        </div>
    );
}