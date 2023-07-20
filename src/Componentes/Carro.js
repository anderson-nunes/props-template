function Carro({ dadosCarros1, dadosCarro2, dadosCarro3, dadosCarro4 }) {

  const verificaCarroFlex = () => {
    if (dadosCarros1.flex === true) {
      return "Sim";
    } else {
      return "Não";
    }
  };

  return (
    <div>
      <h2>{dadosCarros1.nome}</h2>
      <ul>
        <li>Cor: {dadosCarros1.cor}</li>
        <li>Ano: {dadosCarros1.ano}</li>
        <li>Flex: {verificaCarroFlex()}</li>
      </ul>
    </div>
  );
}

export default Carro;
