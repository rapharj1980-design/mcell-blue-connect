# MCell Digital — catálogo com pedido no WhatsApp

Novo site da MCell reaproveitando integralmente a estrutura e o design do projeto `newconnection-blueshop`, trocando o conteúdo pelos dados extraídos do `mcell.digital.zip` (pasta baseTabelas).

## O que será reaproveitado do blueshop

Confirmado lendo o repositório `rapharj1980-design/newconnection-blueshop` (branch main):

- Página única de catálogo em `src/routes/index.tsx`: hero, busca, filtros por categoria, grade de produtos, blocos de diferenciais, contato e rodapé.
- Componentes de catálogo: `ProductCard`, `CartContext`, `CartDrawer`, `SoundToggle` e o som de interface (`lib/ui-sound.ts`).
- Fluxo de pedido: itens vão para o carrinho e o pedido é enviado por link `wa.me` montado em `data/contato.ts`.
- Design system completo (`styles.css`, botões 3D, tokens de cor) e a biblioteca shadcn/ui.
- Camada de dados desacoplada: `data/products.ts`, `data/imagens.ts`, `data/contato.ts`.

## O que muda para a MCell

1. **Contato** — `src/data/contato.ts` passa a:
   - Empresa: MCell Digital
   - WhatsApp: 5521979660549 — exibido como (21) 97966-0549
   - Endereço: Praça Olavo Bilac, 28 — Lj H, Centro, Rio de Janeiro — RJ, 20041-900
2. **Catálogo** — o HTML do zip (tabelas de telas, baterias, conectores, tampas, tablets) é convertido em `src/data/products.ts`, com um item por linha das tabelas: nome do modelo, preço, descrição/observações e categoria.
3. **Categorias** — derivadas das próprias tabelas do zip, por exemplo Telas iPhone, Telas Samsung, Telas Motorola, Telas Xiaomi, Baterias, Conectores de Carga, Tampas, Tablets. A lista final sai do conteúdo real do zip.
4. **Imagens** — as imagens do zip vão para `public/produtos/` e são mapeadas em `src/data/imagens.ts`. Onde o zip não tiver imagem, o card usa o fallback já existente no `ProductCard`.
5. **Identidade** — logo/hero e textos do hero, diferenciais e SEO (`head()` da rota `/`) ajustados para MCell Digital, mantendo o layout e o design do blueshop.

## Escopo técnico

- Stack atual do projeto: TanStack Start + React + Tailwind v4; sem backend, sem banco — todo o catálogo é estático em `src/data`.
- Página principal em `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio: title, description, og:title, og:description, og:type, twitter:card.
- Extração do zip feita por script de parsing do HTML (Python + BeautifulSoup) gerando `products.ts` e `imagens.ts`; o script é descartável, não fica no repo.
- Arquivos copiados do blueshop: componentes de catálogo, `ui-sound.ts`, `styles.css` e os componentes shadcn/ui utilizados.

## Dependência

O `mcell.digital.zip` (baseTabelas) precisa ser anexado no chat — não está acessível no GitHub. Assim que chegar, extraio o conteúdo e sigo com a implementação. Se alguma tabela tiver colunas fora do padrão nome/preço, faço a normalização e aviso o que ficou de fora.
