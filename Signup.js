document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmacaoSenha = document.getElementById('confirmacao-senha');
    const agree = document.getElementById('agree');
    const submitButton = document.querySelector('.submit-button');
    const mesSelect = document.getElementById('mes');
    const diaSelect = document.getElementById('dia');
    const anoSelect = document.getElementById('ano');

    function validarNome() {
        if (nome.value.trim() === '') {
            document.getElementById('nome-error').textContent = 'Por favor, informe um nome de usuário.';
            document.getElementById('nome-error').classList.add('active');
            nome.classList.add('input-error');
            return false;
        } else {
            document.getElementById('nome-error').textContent = '';
            document.getElementById('nome-error').classList.remove('active');
            nome.classList.remove('input-error');
            return true;
        }
    }

    function validarEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('email-error').textContent = 'Informe um Email válido';
            document.getElementById('email-error').classList.add('active');
            email.classList.add('input-error');
            return false;
        } else {
            document.getElementById('email-error').textContent = '';
            document.getElementById('email-error').classList.remove('active');
            email.classList.remove('input-error');
            return true;
        }
    }

    function validarSenha() {
        let isValid = true;

        // Validando senha
        if (senha.value.length < 6) {
            document.getElementById('senha-error').textContent = 'A senha é obrigatória e deve ter pelo menos 6 caracteres';
            document.getElementById('senha-error').classList.add('active');
            senha.classList.add('input-error');
            isValid = false;
        } else {
            document.getElementById('senha-error').textContent = '';
            document.getElementById('senha-error').classList.remove('active');
            senha.classList.remove('input-error');
        }

        // Validando confirmação de senha
        if (senha.value !== confirmacaoSenha.value) {
            document.getElementById('confirmacao-senha-error').textContent = 'A senha é obrigatória e deve ter pelo menos 6 caracteres';
            document.getElementById('confirmacao-senha-error').classList.add('active');
            confirmacaoSenha.classList.add('input-error');
            isValid = false;
        } else {
            document.getElementById('confirmacao-senha-error').textContent = '';
            document.getElementById('confirmacao-senha-error').classList.remove('active');
            confirmacaoSenha.classList.remove('input-error');
        }

        return isValid;
    }

    function validarData() {
        const mes = mesSelect.value;
        const dia = diaSelect.value;
        const ano = anoSelect.value;
        let isValid = true;

        // Validação de data obrigatória
        if (!mes || !dia || !ano) {
            document.getElementById('data-error').textContent = 'Campo obrigatório';
            document.getElementById('data-error').classList.add('active');
            mesSelect.classList.add('input-error');
            diaSelect.classList.add('input-error');
            anoSelect.classList.add('input-error');
            isValid = false;
        } else {
            document.getElementById('data-error').textContent = '';
            document.getElementById('data-error').classList.remove('active');
            mesSelect.classList.remove('input-error');
            diaSelect.classList.remove('input-error');
            anoSelect.classList.remove('input-error');
        }

        return isValid;
    }

    function validarBotao() {
        submitButton.disabled = !(agree.checked && validarNome() && validarEmail() && validarSenha() && validarData());
    }

    nome.addEventListener('input', function() {
        validarNome();
        validarBotao();
    });
    email.addEventListener('input', function() {
        validarEmail();
        validarBotao();
    });
    senha.addEventListener('input', function() {
        validarSenha();
        validarBotao();
    });
    confirmacaoSenha.addEventListener('input', function() {
        validarSenha();
        validarBotao();
    });
    mesSelect.addEventListener('change', function() {
        validarData();
        validarBotao();
    });
    diaSelect.addEventListener('change', function() {
        validarData();
        validarBotao();
    });
    anoSelect.addEventListener('change', function() {
        validarData();
        validarBotao();
    });
    agree.addEventListener('change', validarBotao);

    function popularDatas() {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        meses.forEach((mes, index) => {
            let option = document.createElement('option');
            option.value = index + 1;
            option.textContent = mes;
            mesSelect.appendChild(option);
        });
        for (let ano = new Date().getFullYear(); ano >= 1900; ano--) {
            let option = document.createElement('option');
            option.value = ano;
            option.textContent = ano;
            anoSelect.appendChild(option);
        }
        atualizarDias();
    }

    function atualizarDias() {
        const mes = parseInt(mesSelect.value);
        const ano = parseInt(anoSelect.value);
        const diasNoMes = new Date(ano || 2000, mes, 0).getDate();
        diaSelect.innerHTML = '<option value="">Dia</option>';
        for (let dia = 1; dia <= diasNoMes; dia++) {
            let option = document.createElement('option');
            option.value = dia;
            option.textContent = dia;
            diaSelect.appendChild(option);
        }
    }

    mesSelect.addEventListener('change', atualizarDias);
    anoSelect.addEventListener('change', atualizarDias);

    popularDatas();
});
