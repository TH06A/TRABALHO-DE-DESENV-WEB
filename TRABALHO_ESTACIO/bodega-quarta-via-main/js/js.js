const formulario = document.getElementById('form-cliente');
//FOI CRIADO UMA CONSTANTE PARA CONTER ELEMENTOS QUE FAÇAM REFERENCIA ASOS INPUTS 
const campos = {
    nome: {
        elemento: document.getElementById('nome'),
        erro: document.getElementById('erro-nome'),
        validar: valor => valor.trim().length >= 3 && /^[A-Za-zÀ-ÿ\s]+$/.test(valor.trim()),
        mensagem: "O nome deve ter pelo menos 3 letras "
    },
    email: {
        elemento: document.getElementById('email'),
        erro: document.getElementById('erro-email'),
        validar: valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()),
        mensagem: "Informe um e-mail válido, como: exemplo@dominio.com"
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
        validar: valor => /\d/.test(valor) && /[A-Za-zÀ-ÿ]/.test(valor) && valor.trim().length >= 5,
        mensagem: "O endereço deve conter pelo menos 5 caracteres, com letras e números."
    },
    observacao: {
        elemento: document.getElementById('observacao'),
        erro: document.getElementById('erro-observacao'),
        validar: valor => valor.trim().length === 0 || valor.trim().length >= 8,
        mensagem: "Se preenchida, a observação deve conter pelo menos 8 caracteres."
    }
};

formulario.addEventListener('submit', e => {
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
        formulario.reset();

        // Limpar erros visuais após reset
        for (const key in campos) {
            const campo = campos[key];
            campo.erro.style.display = 'none';
            campo.elemento.classList.remove('is-invalid');
        }
    }
});


const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', e => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (valor.length > 11) valor = valor.slice(0, 11); // Limita a 11 dígitos

    if (valor.length <= 10) {
        // Formato fixo: (99) 9999-9999
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        // Formato celular: (99) 99999-9999
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    e.target.value = valor;
});

const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', e => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (valor.length > 11) valor = valor.slice(0, 11); // Limita a 11 dígitos

    if (valor.length <= 10) {
        // Formato fixo: (99) 9999-9999
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        // Formato celular: (99) 99999-9999
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    e.target.value = valor;
});