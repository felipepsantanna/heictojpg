"use client";

import { useState } from 'react';
import { Upload, FileImage, Download, Loader2, X } from 'lucide-react';

export default function Converter() {
    const [files, setFiles] = useState<{ name: string; downloadUrl: string | null; loading: boolean; id: string }[]>([]);


    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files).slice(0, 5);
        const newFiles = selectedFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            downloadUrl: null,
            loading: true
        }));

        setFiles(prev => [...newFiles, ...prev]);

        selectedFiles.forEach(async (file) => {

            try {
                const response = await fetch(`https://t6z3kapvru4xqahca4nfpksni40mguoj.lambda-url.us-east-1.on.aws/heictojpg/convert?targetExtension=jpg`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                    },
                    body: file,
                });

                if (!response.ok) {
                    // Se for 401, 403, etc, tiramos o loading e avisamos o usuário
                    setFiles(prev => prev.map(item =>
                        item.name === file.name ? { ...item, loading: false } : item
                    ));

                    if (response.status === 401) {
                        throw new Error("No authorized");
                    }
                    throw new Error("Erro na conversão.");
                }

                if (response.ok) {
                    // IMPORTANTE: Ler como blob
                    const imageBlob = await response.blob();

                    // Criar a URL para o usuário baixar
                    const downloadUrl = window.URL.createObjectURL(imageBlob);

                    setFiles(prev => prev.map(item =>
                        item.name === file.name
                            ? { ...item, loading: false, downloadUrl: downloadUrl }
                            : item
                    ));
                }
            } catch (error) {
                console.error(error);
                setFiles(prev => prev.filter(item => item.name !== file.name));
                alert("Erro ao converter arquivo: " + file.name);
            }
        });
    };
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 overflow-hidden">
                {/* Dropzone */}
                <label className="group relative flex flex-col items-center justify-center p-12 border-b border-slate-50 cursor-pointer hover:bg-blue-50/50 transition-colors">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Upload size={32} />
                    </div>
                    <span className="mt-4 font-semibold text-slate-700">Arraste seus arquivos ou clique aqui</span>
                    <span className="text-sm text-slate-400 mt-1">Suporta HEIC (Máx. 5 arquivos por vez)</span>
                    <input type="file" className="hidden" multiple accept=".heic" onChange={handleUpload} />
                </label>

                {/* Listagem de Arquivos */}
                {files.length > 0 && (
                    <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto bg-slate-50/30">
                        {files.map((f) => (
                            <div key={f.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                <div className="bg-slate-100 p-2 rounded-lg text-slate-500">
                                    <FileImage size={20} />
                                </div>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-sm font-medium text-slate-700 truncate">{f.name}</p>
                                    {f.loading ? (
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-blue-500">Processando...</span>
                                    ) : (
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-green-500">Pronto</span>
                                    )}
                                </div>
                                {f.loading ? (
                                    <Loader2 size={20} className="text-blue-500 animate-spin" />
                                ) : (
                                    <a
                                        href={f.downloadUrl}
                                        download={f.name.replace(".heic", ".jpg")} // Muda a extensão no nome do arquivo baixado
                                        className="..."
                                    >
                                        <Download size={18} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}