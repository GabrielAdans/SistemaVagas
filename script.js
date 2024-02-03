let vagas = [];

while (true) {
  let input = prompt("Bem vindo(a) ao Sistema de vagas de emprego da PaperStreet.\nSelecione uma das opções a seguir:\n\n1. Mostrar vagas (Vagas cadastradas: " + vagas.length + ")\n2. Criar nova vaga\n3. Visualizar uma vaga\n4. Inscrever candidato à vaga\n5. Excluir vaga\n6. Sair\n\nDigite o número da opção desejada:");
  if (input === null) {
    break;
  }

  let opcao = parseInt(input);

  switch (opcao) {
    case 1:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let listaVagas = "Vagas cadastradas:\n";
        for (let i = 0; i < vagas.length; i++) {
          listaVagas += (i + 1) + ". " + vagas[i] + "\n";
        }
        alert(listaVagas);
      }
      break;

    case 2:
      let novaVaga = prompt("Digite o nome da nova vaga:");
      vagas.push(novaVaga);
      alert("Vaga cadastrada com sucesso!");
      break;

    case 3:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let numeroVaga = prompt("Digite o número da vaga que deseja visualizar (1 a " + vagas.length + "):");
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          alert("Vaga selecionada: " + vagas[numeroVaga - 1]);
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 4:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let candidato = prompt("Digite o nome do candidato:");
        let numeroVaga = prompt("Digite o número da vaga que deseja se inscrever (1 a " + vagas.length + "):");
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          alert("Candidato " + candidato + " inscrito na vaga " + vagas[numeroVaga - 1] + " com sucesso!");
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 5:
      if (vagas.length === 0) {
        alert("Não há vagas cadastradas.");
      } else {
        let numeroVaga = prompt("Digite o número da vaga que deseja excluir (1 a " + vagas.length + "):");
        numeroVaga = parseInt(numeroVaga);

        if (numeroVaga >= 1 && numeroVaga <= vagas.length) {
          vagas.splice(numeroVaga - 1, 1);
          alert("Vaga excluída com sucesso!");
        } else {
          alert("Número de vaga inválido.");
        }
      }
      break;

    case 6:
      alert("Sistema encerrado.");
      break;

    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}
