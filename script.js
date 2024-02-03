let vagas = [];
let continuarExecucao = true;

while (continuarExecucao) {
  let input = prompt("Bem vindo(a) ao Sistema de vagas de emprego da PaperStreet.\nSelecione uma das opções a seguir:\n\n1. Mostrar vagas (Vagas cadastradas: " + vagas.length + ")\n2. Criar nova vaga\n3. Visualizar uma vaga\n4. Inscrever candidato à vaga\n5. Excluir vaga\n6. Sair\n\nDigite o número da opção desejada:");
  if (input === null && !continuarExecucao) {
    break;
  }
  let opcao = parseInt(input);

  switch (opcao) {
    case 1:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let listaVagas = "Vagas cadastradas:\n\n";
        for (let i = 0; i < vagas.length; i++) {
          let quantidadeCandidatos = vagas[i].candidatos ? vagas[i].candidatos.length : 0;
          listaVagas += (i + 1) + ". " + vagas[i].nome + " - (Quantidade de candidatos inscritos: " + quantidadeCandidatos + ")\n";
        }
        alert(listaVagas);
      }
      break;

    case 2:
      let novaVagaNome = prompt("Digite o nome da nova vaga:");
      let novaVagaDescricao = prompt("Digite a descrição da nova vaga:");
      let novaVagaData = prompt("Digite a data da nova vaga:");

      let novaVaga = {
        nome: novaVagaNome,
        descricao: novaVagaDescricao,
        data: novaVagaData
      };

      let confirmacao = confirm("Deseja confirmar o preenchimento da nova vaga?\nVaga: " + novaVaga.nome + "\nDescrição: " + novaVaga.descricao + "\nData: " + novaVaga.data);

      if (confirmacao) {
        vagas.push(novaVaga);
        alert("Vaga cadastrada com sucesso!");
      } else {
        alert("Cadastro da vaga cancelado.");
      }
      break;

    case 3:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let listaVagas = "Vagas cadastradas:\n\n";
        for (let i = 0; i < vagas.length; i++) {
          listaVagas += (i + 1) + ". " + vagas[i].nome + "\n";
        }

        listaVagas += "\nDigite o número da vaga que deseja ter mais detalhes:";
        let numeroVaga = prompt(listaVagas);
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          let vagaSelecionada = vagas[numeroVaga - 1];
          let detalhesVaga = "Detalhes da vaga:\n\nVaga: " + vagaSelecionada.nome + "\nDescrição: " + vagaSelecionada.descricao + "\nData: " + vagaSelecionada.data;

          if (vagaSelecionada.candidatos && vagaSelecionada.candidatos.length > 0) {
            detalhesVaga += "\n\nCandidatos Inscritos:\n";
            for (let j = 0; j < vagaSelecionada.candidatos.length; j++) {
              detalhesVaga += "- " + vagaSelecionada.candidatos[j].primeiroNome + " " + vagaSelecionada.candidatos[j].sobrenome + "\n";
            }
          } else {
            detalhesVaga += "\n\nNão há candidatos inscritos nesta vaga.";
          }

          alert(detalhesVaga);
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 4:
      let primeiroNomeCandidato = prompt("Digite o primeiro nome do candidato:");
      let sobrenomeCandidato = prompt("Digite o sobrenome do candidato:");

      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let listaVagas = "Vagas disponíveis para inscrição:\n\n";
        for (let i = 0; i < vagas.length; i++) {
          listaVagas += (i + 1) + ". " + vagas[i].nome + "\n";
        }

        listaVagas += "\nDigite o número correspondente à vaga para inscrever o candidato:";
        let numeroVaga = prompt(listaVagas);
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          let vagaSelecionada = vagas[numeroVaga - 1];

          if (!vagaSelecionada.candidatos) {
            vagaSelecionada.candidatos = [];
          }

          let candidato = {
            primeiroNome: primeiroNomeCandidato,
            sobrenome: sobrenomeCandidato
          };

          vagaSelecionada.candidatos.push(candidato);
          alert("Candidato " + primeiroNomeCandidato + " " + sobrenomeCandidato + " inscrito na vaga " + vagaSelecionada.nome + " com sucesso!");
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 5:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let listaVagas = "Vagas cadastradas:\n\n";
        for (let i = 0; i < vagas.length; i++) {
          listaVagas += (i + 1) + ". " + vagas[i].nome + "\n";
        }
        listaVagas += "\nDigite o número da vaga que deseja excluir (1 a " + vagas.length + "):";
        let numeroVaga = prompt(listaVagas);
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          let vagaSelecionada = vagas[numeroVaga - 1];

          if (vagaSelecionada.candidatos && vagaSelecionada.candidatos.length > 0) {
            let confirmacaoExclusao = confirm("Existem candidatos cadastrados nessa vaga.\n\nTem certeza que deseja excluir a vaga?");

            if (!confirmacaoExclusao) {
              alert("Exclusão da vaga cancelada.");
              break;
            }
          }

          vagas.splice(numeroVaga - 1, 1);
          alert("Vaga excluída com sucesso!");
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 6:
      alert("Sistema encerrado.");
      continuarExecucao = false;
      break;

    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}