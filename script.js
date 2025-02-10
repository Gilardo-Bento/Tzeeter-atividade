const maxLength = 140; // Tamanho máximo para Tzeets

function updateCharacterCount() {
    const tweetInput = document.getElementById('tweet-input');
    const tweetInputModal = document.getElementById('tweet-input-modal'); // Novo campo para o modal
    const charCount = document.getElementById('character-counter');
    const charCountmodal = document.getElementById('counter'); // Novo botão para o modal
    const sendButton = document.getElementById('send-button');
    
    // Verifica qual campo de texto está sendo editado
    const currentInput = tweetInput || tweetInputModal;
    const currentLength = currentInput.value.length;

    // Exibe ou oculta o contador com base no conteúdo do tweet
    if (currentLength === 0) {
        charCount.style.display = 'none' ; // Oculta o contador se não houver texto
        sendButton.disabled = true; // Desabilita o botão se estiver vazio
    } 
    else {
        charCount.style.display = 'inline'; // Mostra o contador
        charCount.textContent = maxLength - currentLength; // Apenas o número restante

        // Define a cor do contador com base no comprimento da mensagem
        if (currentLength > maxLength) {
            charCount.style.color = 'rgb(255, 0, 0)'; // Vermelho (excede o máximo)
            sendButton.disabled = true; // Desabilita o botão
        } else if (currentLength >= maxLength - 40) {
            charCount.style.color = 'rgb(255, 200, 0)'; // Amarelo (menos de 40 caracteres restantes)
            sendButton.disabled = false; // Habilita o botão se válido
        } else {
            charCount.style.color = 'black'; // Preto (cor padrão)
            sendButton.disabled = false; // Habilita o botão se válido
        }
    }
    
    // Atualiza o contador do modal

}
document.addEventListener("DOMContentLoaded", function () {
    const tweetInput = document.getElementById("tweet-input");
    const tweetInputModal = document.getElementById("tweet-input-modal");
    const charCount = document.getElementById("counter");
    const sendButton = document.getElementById("send-button-cor");
    const maxLength = 140; // Limite de caracteres

    function updateCharacterCount(event) {
        const currentInput = event.target; // Identifica qual input foi modificado
        const currentLength = currentInput.value.length;

        // Exibe ou oculta o contador com base no conteúdo do tweet
        if (currentLength === 0) {
            charCount.style.display = 'none'; // Oculta o contador
            sendButton.disabled = true; // Desabilita o botão
        } else {
            charCount.style.display = 'inline'; // Mostra o contador
            charCount.textContent = maxLength - currentLength; // Atualiza contagem

            // Define a cor do contador com base no número de caracteres restantes
            if (currentLength > maxLength) {
                charCount.style.color = 'rgb(255, 0, 0)'; // Vermelho se exceder o limite
                sendButton.disabled = true;
            } else if (currentLength >= maxLength - 40) {
                charCount.style.color = 'rgb(255, 200, 0)'; // Amarelo se estiver próximo do limite
                sendButton.disabled = false;
            } else {
                charCount.style.color = 'black'; // Cor normal
                sendButton.disabled = false;
            }
        }
    }

    // Adiciona o evento de input aos dois campos de texto (página principal e modal)
    if (tweetInput) tweetInput.addEventListener("input", updateCharacterCount);
    if (tweetInputModal) tweetInputModal.addEventListener("input", updateCharacterCount);
});

// Função para abrir o modal
function openModal() {
    document.getElementById('tzeet-modal').showModal();
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('tzeet-modal').close();
}

//Configura os eventos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const tweetInput = document.getElementById('tweet-input');
    const tweetInputModal = document.getElementById('tweet-input-modal');
    
    // Adiciona evento para ambos os campos de texto
    if (tweetInput) {
        tweetInput.addEventListener('input', updateCharacterCount);
    }
    if (tweetInputModal) {
        tweetInputModal.addEventListener('input', updateCharacterCount);
    }

    // Seleciona o botão que abre o modal
    const openModalButton = document.getElementById('open-modal');
    
    // Adiciona um evento de clique ao botão
    if (openModalButton) {
        openModalButton.addEventListener('click', openModal);
    }

    // Se houver um botão de fechar no modal, adiciona evento de clique
    const closeModalButton = document.querySelector('#tzeet-modal button[onclick="closeModal()"]');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }
});




