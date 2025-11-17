import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

type NewsItem = {
    id: number;
    titulo: string;
    criado_por: string;
    data_criacao: string;
    imagem?: string | null;
};

interface IndexProps {
    news: NewsItem[];
}

export default function Index({ news }: IndexProps) {

    const handleDelete = (id: number) => {
        if (!confirm("Tem certeza que deseja excluir esta notícia?")) return;

        router.delete(`/news/${id}`);
    };

    return (
        <AppLayout breadcrumbs={[{ title: "Todas as Notícias", href: "/news" }]}>
            <Head title="Notícias" />

            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded-xl shadow border">
                <h1 className="text-2xl font-bold mb-6">Todas as Notícias</h1>

                <div className="space-y-4">
                    {news.map((item: NewsItem) => (
                        <div
                            key={item.id}
                            className="border p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800"
                        >
                            <h2 className="text-xl font-semibold">{item.titulo}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Criado por {item.criado_por} em{" "}
                                {new Intl.DateTimeFormat("pt-BR").format(
                                    new Date(item.data_criacao + "T00:00:00")
                                )}
                            </p>

                            <div className="mt-2 flex gap-4">
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Ver detalhes →
                                </Link>

                                <Link
                                    href={`/news/${item.id}/edit`}
                                    className="text-green-600 dark:text-green-400"
                                >
                                    Editar
                                </Link>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-600 dark:text-red-400"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
