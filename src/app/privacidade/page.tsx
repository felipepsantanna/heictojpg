import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8 gap-2 text-sm font-medium">
                    <ArrowLeft size={16} /> Voltar para o conversor
                </Link>

                <h1 className="text-3xl font-bold mb-6 text-slate-900">Privacidade e Termos de Uso</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">1. Processamento de Dados</h2>
                        <p>
                            O <strong>HEICtoJPG.com.br</strong>, desenvolvido pela Rocktools, preza pela privacidade total dos seus usuários.
                            As imagens enviadas para conversão são processadas de forma efêmera. Isso significa que, após a conversão bem-sucedida
                            e o download, não mantemos cópias dos seus arquivos em nossos servidores permanentemente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">2. Segurança</h2>
                        <p>
                            Utilizamos protocolos de transferência segura (HTTPS) para garantir que seus dados não sejam interceptados durante
                            o upload ou download. Não solicitamos e-mail, nome ou qualquer dado pessoal para o uso da ferramenta.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">3. Uso de Cookies</h2>
                        <p>
                            Utilizamos o Google Tag Manager para fins estatísticos de acesso, visando melhorar a performance da ferramenta.
                            Nenhum dado sensível ou de identificação pessoal é extraído desse processo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">4. Isenção de Responsabilidade</h2>
                        <p>
                            A ferramenta é fornecida "como está", de forma gratuita. Embora busquemos a máxima precisão na conversão,
                            não nos responsabilizamos por perdas de dados decorrentes do uso inadequado ou falhas técnicas de terceiros.
                        </p>
                    </section>

                    <p className="pt-6 border-t border-slate-100 text-[10px] uppercase">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </div>
            </div>
        </div>
    );
}