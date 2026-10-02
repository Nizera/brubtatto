# Plano do site — Bru B Tattoo

## Escopo aprovado

Criar um site profissional, responsivo e em português para Bru B Tattoo, com pesquisa de mercado, apresentação da artista, portfólio baseado em imagens reais do perfil público `@brubtattoo_`, caminhos claros de contato/agendamento, integração ao Instagram e conteúdo preparado para descoberta local. O perfil confirma o nome Bruna Baldez, a identificação “TATTOO LAJEADO” e o endereço “Fábio Brito de Azambuja, 712”. Não serão inventados telefone, preços, horários, anos de experiência, especialidades ou uma biografia não publicada.

## Fundamentação de mercado

As referências examinadas mostram quatro padrões úteis: (1) Bang Bang destaca agendamento, localização e galerias individuais; (2) Noam Yona combina posicionamento visual, portfólio e canais de contato; (3) Bardadim apresenta uma prática autoral com processo de consulta explícito; (4) Brücius deixa o foco da especialidade e o acesso a Tattoos/About/Booking evidentes. A coleção da Site Builder Report indexa dezenas de sites de tatuadores e estúdios; as observações e fontes estão registradas em `pesquisa-de-mercado.md`.

Aplicação ao site da Bru: arte em primeiro plano; uma apresentação curta e verídica; galeria com links aos posts originais; endereço/contexto local; e chamadas consistentes para conversar pelo Instagram. A navegação será curta para não competir com as tatuagens.

## Direção visual

- **Movimento:** editorial botânico contemporâneo, inspirado em cadernos de desenho e na precisão da tatuagem de linha — sem recorrer aos clichês visuais de caveiras e neon.
- **Princípios:** a obra vem antes do ornamento; hierarquia clara; calor humano sem alegações exageradas; leitura e toque confortáveis no celular.
- **Paleta:** papel marfim e tinta quase preta formam a base neutra para manter as fotos fiéis; verde-musgo suave conecta a presença botânica e funciona como **cor de marca** distintiva.
- **Layout:** composição editorial assimétrica, com chamada e imagem principal em planos desencontrados; galeria vertical/mosaico com ritmo, sem cartões uniformes em grade centralizada.
- **Elementos de assinatura:** selo/monograma “brub.” com traço floral simples; filetes e pequenos marcadores inspirados em anotações de caderno; etiquetas tipográficas de localização e Instagram.
- **Interação:** links de navegação e Instagram evidentes; galeria abre visualização ampliada com saída por botão, Escape e clique externo; foco de teclado visível; respeitar `prefers-reduced-motion`.
- **Animação:** revelar elementos com transições breves e discretas; sem paralaxe, movimento contínuo ou atraso que esconda conteúdo; remover/reduzir movimento quando solicitado pelo sistema.
- **Tipografia:** Cormorant Garamond para títulos expressivos e DM Sans para navegação, legendas e texto funcional; escala editorial com contrastes de tamanho, sem comprometer legibilidade.
- **Essência:** “Tatuagens autorais em Lajeado, com espaço para a sua ideia e o traço da Bru.” Personalidade: artística, próxima e precisa.
- **Voz:** direta, gentil e convidativa; CTA “Vamos conversar sobre sua ideia?”; microcopy “Veja de perto. O próximo desenho pode começar numa conversa.”
- **Wordmark:** lettering tipográfico próprio “brub.” em caixa baixa, com ponto inspirado em marca de agulha e um pequeno ramo linear desenhado em vetor; não usar o nome em uma fonte padrão como se fosse logotipo pronto.

## Implementação e estrutura

A pasta de projeto estava vazia e não há necessidade de login, banco de dados ou formulários com armazenamento. A implementação será um site estático, com HTML semântico presente na resposta inicial, CSS responsivo e JavaScript leve apenas para menu móvel e visualização da galeria. As imagens de trabalhos serão extraídas de posts públicos identificáveis do perfil e armazenadas no recurso de mídia do projeto; cada obra fará referência ao post de origem. O endereço será apresentado conforme publicado no Instagram; o contato será direcionado ao perfil oficial, sem inventar outro canal.

Estrutura principal:

- `public/index.html` — conteúdo inicial completo, metadados sociais, apresentação, obras, localização e links.
- `public/styles.css` — paleta, tipografia, layout assimétrico e pontos de quebra.
- `public/script.js` — menu acessível e lightbox da galeria.
- `public/manus-routes.json` — declaração da rota pública `/`.
- `public/favicon.svg` — versão pequena do monograma.
- `server.mjs` — servidor estático local para o preview no WebDev.
- `app.config.ts` — metadado de logo do projeto Manus.
- `pesquisa-de-mercado.md`, `plan.md`, `TODO.md` — fontes, decisões e critérios acompanháveis.

Para publicação futura, declarar saída estática `public` com build sem etapa de compilação. O site será entregue em Preview e salvo em checkpoint; a publicação pública não será iniciada sem solicitação explícita.
