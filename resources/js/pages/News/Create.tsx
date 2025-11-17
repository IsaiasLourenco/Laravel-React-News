import { useForm, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { useState, useEffect } from "react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<{
        titulo: string;
        criado_por: string;
        conteudo: string;
        data_criacao: string;
        imagem: File | null;
    }>({
        titulo: "",
        criado_por: "",
        conteudo: "",
        data_criacao: "",
        imagem: null,
    });

    // Estado para o preview da imagem
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (!data.imagem) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(data.imagem);
        setPreview(objectUrl);

        // Limpa o URL temporário quando mudar a imagem
        return () => URL.revokeObjectURL(objectUrl);
    }, [data.imagem]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/news", {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={[{ title: "Nova Notícia", href: "/news/create" }]}>
            <Head title="Criar Notícia" />

            <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 p-6 rounded-xl shadow border">
                <h1 className="text-2xl font-bold mb-6">Criar Nova Notícia</h1>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    {/* Título */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Título</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded"
                            value={data.titulo}
                            onChange={(e) => setData("titulo", e.target.value)}
                        />
                        {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo}</p>}
                    </div>

                    {/* Criado por */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Criado por</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded"
                            value={data.criado_por}
                            onChange={(e) => setData("criado_por", e.target.value)}
                        />
                        {errors.criado_por && <p className="text-red-500 text-sm">{errors.criado_por}</p>}
                    </div>

                    {/* Conteúdo */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Conteúdo</label>
                        <textarea
                            className="w-full border p-2 rounded min-h-[150px]"
                            value={data.conteudo}
                            onChange={(e) => setData("conteudo", e.target.value)}
                        />
                        {errors.conteudo && <p className="text-red-500 text-sm">{errors.conteudo}</p>}
                    </div>

                    {/* Data */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Data</label>
                        <input
                            type="date"
                            className="border p-2 rounded"
                            value={data.data_criacao}
                            onChange={(e) => setData("data_criacao", e.target.value)}
                        />
                        {errors.data_criacao && <p className="text-red-500 text-sm">{errors.data_criacao}</p>}
                    </div>

                    {/* Imagem */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Imagem</label>
                        <input
                            type="file"
                            className="border p-2 rounded w-full"
                            accept="image/*"
                            onChange={(e) => setData("imagem", e.target.files?.[0] ?? null)}
                        />
                        {errors.imagem && <p className="text-red-500 text-sm">{errors.imagem}</p>}

                        {/* Preview da imagem */}
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview da notícia"
                                className="mt-2 w-32 h-32 object-cover rounded border"
                            />
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        Salvar Notícia
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
