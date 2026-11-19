const formOrcamento = document.getElementById("form-orcamento");

formOrcamento.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede a página de recarregar

    const nome = document.getElementById("nome").value.trim();
    const veiculo = document.getElementById("veiculo").value.trim();
    const servico = document.getElementById("servico").value;

    const telefone = "5561996195327"; // Substitua pelo número desejado (DDI + DDD + número)

    const mensagem = `Olá! Me chamo ${nome} e gostaria de um orçamento.%0A` +
                     `*Veículo:* ${veiculo}%0A` +
                     `*Serviço:* ${servico}`;

    const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(
        `Olá! Me chamo ${nome} e gostaria de um orçamento.\nVeículo: ${veiculo}\nServiço: ${servico}`
    )}`;

    window.open(urlWhatsApp, "_blank");
});