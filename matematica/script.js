function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  document.getElementById('quizForm').addEventListener('submit', function(e) {
      e.preventDefault(); 
  
      const form = e.target;
      const totalQuestoes = 5;
      let pontuacao = 0;
      let todasRespondidas = true;
  
      for(let i = 1; i <= totalQuestoes; i++) {
        const resposta = form['q' + i];
        let marcada = false;
  
        for (const option of resposta) {
          if(option.checked) {
            pontuacao += Number(option.value);
            marcada = true;
            break;
          }
        }
  
        if(!marcada) {
          todasRespondidas = false;
          break;
        }
      }
  
      const resultadoDiv = document.getElementById('resultado');
  
      if(!todasRespondidas) {
        resultadoDiv.textContent = '⚠️ Por favor, responda todas as perguntas antes de enviar.';
        resultadoDiv.className = 'aviso';
        return;
      }
  
      if(pontuacao === totalQuestoes * 2) {
        resultadoDiv.textContent = `🎉 Parabéns! Você acertou todas as questões! Nota: ${pontuacao} de ${totalQuestoes * 2}`;
        resultadoDiv.className = 'sucesso';
      } else if (pontuacao >= totalQuestoes * 1) {
        resultadoDiv.textContent = `👍 Você fez uma boa pontuação: ${pontuacao} de ${totalQuestoes * 2}`;
        resultadoDiv.className = 'sucesso';
      } else {
        resultadoDiv.textContent = `😕 Você marcou ${pontuacao} de ${totalQuestoes * 2}. Tente novamente para melhorar!`;
        resultadoDiv.className = 'aviso';
      }
  
      // rolar suavemente até o resultado para o usuário ver rápido
      resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  
  
    });