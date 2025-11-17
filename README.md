# 📰 Projeto de Notícias — Laravel + React + Inertia.js

Este é um projeto full-stack desenvolvido com **Laravel**, **React**, **Inertia.js** e **TailwindCSS**. Ele foi criado como parte de um estudo prático para uma vaga de desenvolvedor **Laravel + React**, demonstrando domínio em autenticação, CRUD completo, integração front‑end/back‑end, upload de imagens e boas práticas estruturais.

---

## 🚀 Tecnologias Utilizadas

### **Backend**

* **Laravel 12**
* **Inertia.js** (adapter Laravel)
* **Fortify** (autenticação + verificação de e-mail)
* **Eloquent ORM**
* **Storage Público** (upload e manipulação de imagens)
* **Blade apenas para bootstrap do Inertia**

### **Frontend**

* **React + TypeScript**
* **Inertia.js React Adapter**
* **TailwindCSS**
* **Dark Mode** nativo

### **Banco de Dados**

* MySQL / MariaDB (ou PostgreSQL)

---

## 📌 O que este projeto demonstra

### ✔️ **Autenticação completa (login, registro e verificação de email)**

Implementada usando Laravel Fortify e integrada ao React via Inertia.

### ✔️ **CRUD completo de Notícias**

* Criar
* Listar
* Exibir em modal
* Editar (com preview e manutenção de imagem antiga)
* Excluir

### ✔️ **Upload de Imagens com Storage Público**

* Salvando dentro de `storage/app/public/news`
* Removendo imagem antiga ao atualizar
* Mantendo imagem original caso o usuário não envie nova

### ✔️ **Interface moderna e responsiva com Tailwind + Dark Mode**

* Layout simples e funcional
* Componentes reativos

### ✔️ **Uso correto de Inertia.js**

* Navegação sem recarregar a página
* Rotas integradas ao controlador
* Erros de validação trazidos automaticamente para o React

---

## 📂 Estrutura do Projeto

```
project/
├── app/
│   ├── Http/Controllers/NewsController.php
│   ├── Models/News.php
├── database/
│   ├── migrations/xxxx_create_news_table.php
├── public/
│   ├── storage → link simbólico para imagens
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   │   ├── News/
│   │   │   │   ├── Index.tsx
│   │   │   │   ├── Create.tsx
│   │   │   │   ├── Edit.tsx
│   │   │   │   ├── Show.tsx
│   │   ├── Layouts/AppLayout.tsx
│   ├── css/app.css
├── routes/web.php
```

---

## 🛠️ Como rodar o projeto

### **1. Clonar o repositório**

```bash
git clone https://github.com/SEU-USUARIO/seu-repo.git
cd seu-repo
```

### **2. Instalar dependências do Laravel**

```bash
composer install
```

### **3. Instalar dependências do React**

```bash
npm install
```

### **4. Criar o arquivo .env**

```bash
cp .env.example .env
```

Configure o banco de dados e o nome da aplicação.

### **5. Gerar a key do Laravel**

```bash
php artisan key:generate
```

### **6. Rodar as migrations**

```bash
php artisan migrate
```

### **7. Criar o link simbólico para imagens**

```bash
php artisan storage:link
```

### **8. Rodar o servidor**

Backend:

```bash
php artisan serve
```

Frontend:

```bash
npm run dev
```

---

## 📝 Funcionalidades implementadas no CRUD de Notícias

### **Create**

* Formulário completo com validação
* Upload de imagem opcional

### **Index**

* Lista paginada (ou completa)
* Datas formatadas em **pt-BR** com correção de timezone
* Botão de editar
* Botão de excluir com confirmação + delete via Inertia

### **Show (Modal)**

* Exibe notícia em modal centralizado
* Fechar com ESC
* Scroll interno se o conteúdo for grande
* Preview da imagem

### **Edit**

* Mantém a imagem antiga se o usuário não enviar uma nova
* Preview instantâneo da nova imagem
* Atualização via método PUT usando Inertia

### **Delete**

* Confirmação no front-end
* Exclusão no controller removendo também a imagem

---

## 🤝 Contribuições

Sinta-se livre para abrir **issues** ou enviar **pull requests**.

---

## 🧑‍💻 Autor

**José Isaías Lourenço**
**Vetor256**

Desenvolvedor focado em Laravel, PHP, React, TypeScript e arquitetura limpa. Sempre buscando evoluir e construir soluções diretas, eficientes e sem frescura.

---

## ⭐ Se este projeto te ajudou

Deixe uma **estrela no repositório** para apoiar!

---
