import { Head, usePage, router } from "@inertiajs/react";
import { useEffect } from "react";

interface News {
  id: number;
  titulo: string;
  criado_por: string;
  data_criacao: string;
  conteudo: string;
  imagem?: string | null;
}

export default function Show({ news }: { news: News }) {

    // Função para fechar modal
    const closeModal = () => {
        router.get('/news'); // volta para a lista
    };

    // Fechar modal ao apertar Esc
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <Head title={news.titulo} />

            {/* Fundo escuro semi-transparente */}
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                
                {/* Modal */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg max-w-3xl w-full max-h-screen overflow-y-auto p-6 relative">

                    {/* Botão de fechar */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-white text-xl font-bold"
                    >
                        ×
                    </button>

                    <h1 className="text-2xl font-bold mb-4">{news.titulo}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Criado por {news.criado_por} em {news.data_criacao}
                    </p>

                    {news.imagem && (
                        <img src={`/storage/${news.imagem}`} alt={news.titulo} className="mb-4 rounded" />
                    )}

                    <div className="prose dark:prose-invert">
                        <p>{news.conteudo}</p>
                    </div>

                    {/* Botão de voltar */}
                    <div className="mt-6">
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Voltar para notícias
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
