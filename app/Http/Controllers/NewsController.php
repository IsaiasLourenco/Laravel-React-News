<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{

    public function index()
    {
        $news = News::latest()->get();

        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }

    public function show(News $news)
    {
        return Inertia::render('News/Show', [
            'news' => $news,
        ]);
    }

    public function edit(News $news)
    {
        return Inertia::render('News/Edit', [
            'news' => $news
        ]);
    }

    public function update(Request $request, News $news)
    {
        $data = $request->validate([
            'titulo' => 'required|string|max:255',
            'criado_por' => 'required|string|max:255',
            'conteudo' => 'required|string',
            'data_criacao' => 'required|date',
            'imagem' => 'nullable|image|max:2048',
        ]);

        // Só altera a imagem se uma nova for enviada
        if ($request->hasFile('imagem')) {

            // Deletar a imagem antiga, se existir
            if ($news->imagem) {
                Storage::disk('public')->delete($news->imagem);
            }

            // Salvar nova imagem
            $data['imagem'] = $request->file('imagem')->store('news', 'public');
        } else {
            // Não sobrescreve a imagem — mantém a antiga
            $data['imagem'] = $news->imagem;
        }

        $news->update($data);

        return redirect()->route('news.index')->with('success', 'Notícia atualizada com sucesso!');
    }

    public function destroy(News $news)
    {
        // Deletar imagem se existir
        if ($news->imagem) {
            Storage::disk('public')->delete($news->imagem);
        }

        // Deletar notícia
        $news->delete();

        return redirect()->route('news.index')->with('success', 'Notícia excluída com sucesso!');
    }

    public function create()
    {
        return Inertia::render('News/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'titulo' => 'required|string|max:255',
            'criado_por' => 'required|string|max:255',
            'conteudo' => 'required|string',
            'data_criacao' => 'required|date',
            'imagem' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('imagem')) {
            $data['imagem'] = $request->file('imagem')->store('news', 'public');
        }

        News::create($data);

        return redirect()->route('news.create')->with('success', 'Notícia cadastrada com sucesso!');
    }
}
