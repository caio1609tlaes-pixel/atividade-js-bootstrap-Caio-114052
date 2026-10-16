
// Questão 1
console.log("Meu primeiro script foi executado!");

// Questão 2
console.log("Bem-vindo à loja TechSSD!");
console.log("Projeto de uma loja virtual de SSDs.");
console.log("Resultado da soma inicial:", 10 + 5);

// Questão 3
const nomeProjeto = "TechSSD";
const nomeAluno = "Seu nome";
const curso = "Desenvolvimento Web";

let quantidadeTarefas = 3;

console.log("Quantidade inicial de tarefas:", quantidadeTarefas);

quantidadeTarefas = 4;

console.log("Nova quantidade de tarefas:", quantidadeTarefas);

// Questão 4
var exemploAntigo = "Declaração utilizada em códigos antigos";

console.log(exemploAntigo);

// Questão 5
const produtoDisponivel = "SSD NVMe 1 TB";
const precoUnitario = 349.90;
const estoqueDisponivel = true;
const observacao = null;

console.log("Produto:", produtoDisponivel);
console.log("Preço:", precoUnitario);
console.log("Disponível:", estoqueDisponivel);
console.log("Observação:", observacao);

// Questão 6
const precoSSD1 = 200;
const precoSSD2 = 150;

const somaPrecos = precoSSD1 + precoSSD2;
const diferencaPrecos = precoSSD1 - precoSSD2;
const precoDuasUnidades = precoSSD1 * 2;
const precoPorPessoa = precoSSD1 / 2;

const temDesconto = precoSSD1 >= 200;
const precoDentroDoLimite = precoSSD2 <= 150;
const precosIguais = precoSSD1 === precoSSD2;
const precosDiferentes = precoSSD1 !== precoSSD2;

console.log("Soma dos preços:", somaPrecos);
console.log("Diferença entre os preços:", diferencaPrecos);
console.log("Preço de duas unidades:", precoDuasUnidades);
console.log("Preço dividido por duas pessoas:", precoPorPessoa);
console.log("Preço maior ou igual a R$ 200:", temDesconto);
console.log("Preço menor ou igual a R$ 150:", precoDentroDoLimite);
console.log("Os preços são iguais?", precosIguais);
console.log("Os preços são diferentes?", precosDiferentes);

// Questão 7
const mensagem = `O aluno ${nomeAluno} está estudando ${curso} no projeto ${nomeProjeto} e possui ${quantidadeTarefas} tarefas.`;

console.log(mensagem);

// Questão 8
const mediaAluno = 7;

if (mediaAluno >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno precisa revisar o conteúdo.");
}

// Questão 10
const produto = "SSD NVMe 1 TB";
const preco = 349.90;
const quantidade = 1;
const limiteFreteGratis = 300;

let desconto = 20;

const subtotal = preco * quantidade;
const total = subtotal - desconto;
const valorComDuasUnidades = preco * 2;

const resumoCompra = `Pedido: ${quantidade}x ${produto}. Subtotal: R$ ${subtotal.toFixed(2)}. Desconto: R$ ${desconto.toFixed(2)}. Total: R$ ${total.toFixed(2)}.`;

console.log("----- RESUMO DA COMPRA -----");
console.log(resumoCompra);
console.log("Total de duas unidades:", valorComDuasUnidades.toFixed(2));

if (total >= limiteFreteGratis) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("A compra não atingiu o valor mínimo para frete grátis.");
}

// Função do botão de compra
function realizarCompra() {
    const nomeProduto = "SSD NVMe 1 TB";
    const valorProduto = 349.90;
    const quantidadeComprada = 1;
    const descontoCompra = 20;
    const limiteFrete = 300;

    let totalCompra = valorProduto * quantidadeComprada;

    totalCompra = totalCompra - descontoCompra;

    const resumo = `Você comprou ${quantidadeComprada} unidade(s) de ${nomeProduto}. Total com desconto: R$ ${totalCompra.toFixed(2)}.`;

    console.log(resumo);

    let mensagemFrete;

    if (totalCompra >= limiteFrete) {
        mensagemFrete = "Parabéns! Você ganhou frete grátis!";
    } else {
        mensagemFrete = "Você não atingiu o valor mínimo para frete grátis.";
    }

    console.log(mensagemFrete);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Compra simulada!</h4>
            <p>${resumo}</p>
            <hr>
            <p class="mb-0">${mensagemFrete}</p>
        </div>
    `;
}