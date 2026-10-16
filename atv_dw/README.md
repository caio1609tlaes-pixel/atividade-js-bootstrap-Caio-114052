# TechSSD - Loja Virtual de SSDs

## 1. Nome e tema do projeto

O projeto se chama TechSSD e tem como tema uma loja virtual de unidades SSD para computadores.

O objetivo é apresentar produtos de armazenamento e demonstrar conceitos básicos de HTML, Bootstrap e JavaScript.

## 2. Explicação da interface

A interface apresenta uma barra de navegação, uma seção inicial com o nome e a descrição da loja, três cards de produtos, uma mensagem de oferta, um botão para simular uma compra e um rodapé.

A página foi organizada para se adaptar a diferentes tamanhos de tela, como celulares, tablets e computadores.

## 3. Componentes Bootstrap utilizados

Foram utilizados os seguintes componentes e classes do Bootstrap:

- `navbar`: barra de navegação.
- `container`: organiza o conteúdo da página.
- `row` e `col`: organizam os elementos em colunas responsivas.
- `card`: apresenta as informações dos SSDs.
- `badge`: destaca categorias dos produtos.
- `button` e classes `btn`: criam os botões.
- `alert`: exibe uma mensagem de oferta e o resultado da compra.
- `bg-dark`, `bg-light` e `text-white`: definem cores de fundo e texto.
- `py-5`, `mt-4` e `g-4`: controlam espaçamentos.
- `text-center`: centraliza textos e elementos.
- `fw-bold` e `display-4`: destacam títulos.

O Bootstrap foi conectado por meio de uma CDN, sem a necessidade de criar um arquivo CSS separado.

## 4. Diferença entre let, const e var

`const` é utilizado para declarar variáveis que não serão reatribuídas. No projeto, foi utilizado para armazenar o nome do produto, o preço unitário e o limite para o frete grátis.

`let` é utilizado quando o valor de uma variável precisa ser alterado. No projeto, foi utilizado para representar a quantidade de tarefas, o desconto e o total da compra.

`var` é uma forma mais antiga de declarar variáveis em JavaScript. Ela possui diferenças de escopo e permite redeclarações que podem causar confusão. Por isso, atualmente, priorizamos `const` e `let`, que oferecem um comportamento de escopo mais previsível.

## 5. Tipos de dados utilizados

- **String:** texto, como o nome do produto e o nome do projeto.
- **Number:** números, como o preço do SSD, a quantidade e o desconto.
- **Boolean:** valor lógico `true` ou `false`, utilizado para indicar se um produto está disponível.
- **Null:** representa a ausência intencional de um valor, utilizada na variável de observação.

## 6. Operadores utilizados

O projeto utiliza operadores matemáticos e de comparação.

- `+`: soma valores.
- `-`: subtrai o desconto do subtotal.
- `*`: calcula o preço de acordo com a quantidade.
- `/`: divide um valor.
- `>=`: verifica se o total atingiu o limite para frete grátis.
- `<=`: verifica se um preço está dentro de determinado limite.
- `===`: verifica se dois valores são iguais.
- `!==`: verifica se dois valores são diferentes.

## 7. Condição com if e else

A condição `if/else` verifica se o valor total da compra é maior ou igual a R$ 300,00.

Se a condição for verdadeira, o sistema informa que o cliente ganhou frete grátis.

Se a condição for falsa, o sistema informa que o valor mínimo para obter o benefício não foi atingido.

A condição também foi utilizada para verificar a aprovação de um aluno com base em sua média.

## 8. Desafio integrador

O desafio integrador simula a compra de um SSD NVMe de 1 TB.

O sistema armazena o nome do produto, seu preço, a quantidade comprada e o desconto. Em seguida, calcula o subtotal e o total da compra, monta uma mensagem com template literal e verifica se o cliente tem direito ao frete grátis.

O resultado é apresentado no Console e, ao clicar no botão da página, também é exibido na interface.

## 9. Maior dificuldade encontrada

Uma dificuldade encontrada foi [descreva aqui a dificuldade que você realmente enfrentou durante a atividade].

## 10. Como a dificuldade foi resolvida

A dificuldade foi resolvida por meio da revisão do código, da consulta aos exemplos apresentados em aula e da realização de testes no navegador e no Console.