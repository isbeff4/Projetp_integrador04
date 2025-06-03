function mostrarMapa() {
  const mapa = document.getElementById('mapaMental');
  mapa.classList.toggle('mostrar');
}


function corrigir() {
  const respostasCorretas = ['b', 'b', 'b', 'c', 'b', 'c', 'c', 'b'];
  const explicacoes = [
    "A resposta correta é (b): o texto discute os efeitos positivos e negativos das redes sociais.",
    "A resposta correta é (b): adultos jovens são os mais impactados pelo uso das redes.",
    "A resposta correta é (b): a área correta da Amazônia é de aproximadamente 5,5 milhões de km².",
    "A resposta correta é (c): cerca de 10% das espécies conhecidas vivem na Amazônia.",
    "A resposta correta é (b): o texto menciona claramente a WHO como a responsável.",
    "A resposta correta é (c): H3N2 é a cepa dominante segundo o relatório mencionado.",
    "A resposta correta é (c): o foco está nas aplicações e potencial da inteligência artificial.",
    "A resposta correta é (b): machine learning permite que os computadores aprendam com dados."
  ];

  let acertos = 0;
  let resultado = "";

  for (let i = 1; i <= 8; i++) {
    const respostaUsuario = document.querySelector('input[name="q' + i + '"]:checked');
    if (respostaUsuario && respostaUsuario.value === respostasCorretas[i - 1]) {
      acertos++;
      resultado += `✅ Questão ${i} correta.<br>`;
    } else {
      resultado += `❌ Questão ${i} incorreta. ${explicacoes[i - 1]}<br>`;
    }
  }

  document.getElementById("resultado").style.display = "block";
  document.getElementById("resultado").innerHTML = `<h2>Você acertou ${acertos} de 8 questões.</h2>`;
  document.getElementById("explicacoes").innerHTML = resultado;
}

document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', () => {
    const hiddenText = button.nextElementSibling;
    if (hiddenText) {
      hiddenText.classList.toggle('hidden');

      // Muda o texto do botão conforme o estado do resumo
      button.textContent = hiddenText.classList.contains('hidden') ? 'Saiba Mais' : 'Mostrar Menos';

      // Opcional: pode pausar o áudio se o resumo for escondido
      const audio = hiddenText.querySelector('audio');
      if (audio && hiddenText.classList.contains('hidden')) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  });
});
