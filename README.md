# TRABALHO-DE-DESENV-WEB
TRABALHO DE DESENV WEB
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cliente');

    // Objeto com campos e regras de validação e mensagens
    const campos = {
        nome: {
            elemento: document.getElementById('nome'),
            erro: document.getElementById('erro-nome'),
            validar: valor => valor.trim().length >= 3 && /^[A-Za-zÀ-ÿ\s]+$/.test(valor.trim()),
            mensagem: "O nome deve ter pelo menos 3 letras e não conter números ou símbolos."
        },
        email: {
            elemento: document.getElementById('email'),
            erro: document.getElementById('erro-email'),
            validar: valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()),
            mensagem: "Digite um email válido. EX: teste@dominio.net"
        },
        telefone: {
            elemento: document.getElementById('telefone'),
            erro: document.getElementById('erro-telefone'),
            validar: valor => valor.replace(/\D/g, '').length >= 10,
            mensagem: "O telefone deve conter pelo menos 10 números."
        },
        endereco: {
            elemento: document.getElementById('endereco'),
            erro: document.getElementById('erro-endereco'),
            validar: valor => valor.trim().length >= 5,
            mensagem: "O endereço deve conter pelo menos 5 caracteres."
        },
        observacao: {
            elemento: document.getElementById('observacao'),
            erro: document.getElementById('erro-observacao'),
            validar: valor => valor.trim().length === 0 || valor.trim().length >= 10,
            mensagem: "Se preenchida, a observação deve conter pelo menos 10 caracteres."
        }
    };

    form.addEventListener('submit', e => {
        e.preventDefault();

        let erros = [];

        // Validação genérica
        for (const key in campos) {
            const campo = campos[key];
            const valor = campo.elemento.value;

            if (!campo.validar(valor)) {
                campo.erro.textContent = campo.mensagem;
                campo.erro.style.display = 'block';
                campo.elemento.classList.add('is-invalid');
                erros.push(key);
            } else {
                campo.erro.textContent = "";
                campo.erro.style.display = 'none';
                campo.elemento.classList.remove('is-invalid');
            }
        }

        if (erros.length === 0) {
            alert("Cliente cadastrado com sucesso!");
            form.reset();

            // Limpar erros visuais após reset
            for (const key in campos) {
                const campo = campos[key];
                campo.erro.style.display = 'none';
                campo.elemento.classList.remove('is-invalid');
            }
        }
    });
});
