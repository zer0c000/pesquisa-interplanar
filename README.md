# INTER.PLANAR — Pesquisa de Mercado

> O único metaverso feito para quem vive a noite.

Landing page + formulário de pesquisa para validação de mercado do primeiro metaverso brasileiro de música eletrônica.

## 🚀 Deploy na Vercel

1. Push este repo pro GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta automaticamente como site estático
4. Clique em **Deploy** — pronto!

### URLs geradas:

- `/` → Landing page do projeto
- `/pesquisa` → Formulário de pesquisa completo

## 📊 Salvar respostas no Google Sheets (opcional)

1. Crie uma planilha no Google Sheets
2. Vá em **Extensões > Apps Script**
3. Cole o conteúdo de `SHEETS_BACKEND.js` (na raiz do repo)
4. Clique em **Implantar > Nova Implantação > App da Web**
5. Acesso: **Qualquer pessoa**
6. Copie a URL gerada
7. Edite `public/pesquisa.html` e cole a URL na variável `GOOGLE_SHEETS_URL`
8. Commit + push → Vercel faz redeploy automático

## 📁 Estrutura

```
pesquisa-interplanar/
├── public/
│   ├── index.html          # Landing page
│   ├── pesquisa.html       # Formulário de pesquisa
│   └── og-image.png        # Imagem para compartilhamento social
├── SHEETS_BACKEND.js       # Script para Google Sheets (instruções acima)
├── vercel.json             # Configuração da Vercel
├── package.json
└── README.md
```

## 🎨 Identidade Visual

- **Cor primária:** `#00ff41` (Verde Neon)
- **Background:** `#0a0a0f` (Preto Espacial)
- **Accent:** `#00ffff` (Cyan)
- **Tipografia:** JetBrains Mono + Space Grotesk
- **Estética:** Minimalismo Sônico

---

**INTER.PLANAR** © 2026 — Belo Horizonte, MG
