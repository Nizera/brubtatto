# Bru B Tattoo — site

Landing page estática de Bruna Baldez, tatuadora em Lajeado. O pacote inclui as imagens reais selecionadas do Instagram em `public/images/` para que o projeto não dependa do armazenamento do Manus nem de URLs temporárias do Instagram. Cada imagem da galeria leva ao post original.

## Executar localmente

Requer Node.js 22 ou compatível; não há dependências externas de Node para instalar.

```bash
node server.mjs
```

Acesse `http://localhost:3000`. Para mudar a porta: `PORT=8080 node server.mjs`.

Também é possível hospedar o conteúdo da pasta `public/` como site estático, usando `public/index.html` como página inicial. O manifesto de rotas fica em `public/manus-routes.json`.

## Estrutura

- `public/`: página, CSS, JavaScript, favicon e imagens locais do portfólio.
- `server.mjs`: servidor local opcional para desenvolvimento.
- `pesquisa-de-mercado.md`: referências e decisões de mercado que orientaram a página.
- `plan.md` e `TODO.md`: plano e critérios entregues.
- `app.config.ts`: metadados de logo para Manus WebDev; fora do Manus, é opcional.

## Adicionar a um repositório Git

Extraia o ZIP, abra um terminal nesta pasta e use:

```bash
git init
git add .
git commit -m "Adicionar site Bru B Tattoo"
git branch -M main
git remote add origin <URL-DO-SEU-REPOSITORIO>
git push -u origin main
```

O ZIP não inclui `.git`; assim você pode enviá-lo para um repositório novo ou existente sem misturar histórico de outro projeto.

## Fontes das imagens

Os arquivos de portfólio vieram de posts e Reels públicos do perfil [`@brubtattoo_`](https://www.instagram.com/brubtattoo_/) e mantêm os links para as publicações de origem no site. O perfil publica o endereço profissional usado na seção “Visite”.
