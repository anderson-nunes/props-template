import Carro from "./Carro";

function Garagem({
  nome,
  apresentaGaragem,
  dadosCarros1,
  dadosCarros2,
  dadosCarros3,
  dadosCarros4 }) {

  return (
    <div>
      <h1>Garagem do {nome}</h1>
      <Carro dadosCarros1={dadosCarros1} />
      <Carro dadosCarros2={dadosCarros2} />
      <Carro dadosCarros3={dadosCarros3} />
      <Carro dadosCarros4={dadosCarros4} />
      <button onClick={() => apresentaGaragem(nome)}>Clicar</button>
    </div>
  );
}

export default Garagem;
