document.getElementById("form-estudo").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;

    if (nome.trim().toLowerCase() !== "amanda paula mendes") {
        return alert("Esse não é o nome dela. VOCÊ NÃO É ELAGRRRR");
    }

    if (!email.includes("@")) return alert("Email inválido.");

    if (telefone.length < 8) return alert("Telefone deve ter pelo menos 8 dígitos");

    if (cpf === "") return alert("CPF é obrigatório");

    if (idade != 17) return alert("Essa não é a idade dela. VOCÊ NÃO É ELAGRRRRR");

    if (cidade.trim().toLowerCase() !== "olinda") {
        return alert("Esse não é a cidade dela. VOCÊ NÃO É ELA.");
    }

    if (moradia === "") return alert("Moradia é obrigatória");

    if (moradia === "apartamento") {
        return alert("Ela mora em casa.");
    }

    if (!quintal || quintal.value === "nao") {
        return alert("Ela tem quintal.");
    }

    if (motivo.length < 10) return alert("Motivo deve ter pelo menos 10 caracteres");

    if (!termo) return alert("Você deve aceitar os termos para enviar o formulário.");

    if (telefone.length < 10) return alert("Telefone inválido.");

    alert("Formulário enviado com sucesso!");
});
