import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome = "Anderson"

  // const nome2 = "Patricia"

  const apresentaGaragem = (nome) => {
    alert(`Boas vindas a garagem de ${nome}`)
  }

  const dadosCarros1 = {
    marca: 'VW',
    nome: 'Polo',
    ano: 2003,
    cor: 'Verde',
    flex: false
  }

  const dadosCarros2 = {
    marca: 'GM',
    nome: 'Onix',
    ano: 2019,
    cor: 'Azul',
    flex: true
  }

  const dadosCarros3 = {
    marca: 'Fiat',
    nome: 'Uno',
    ano: 2001,
    cor: 'Vermelho',
    flex: true
  }

  const dadosCarros4 = {
    marca: 'Audi',
    nome: 'Q5',
    ano: 2021,
    cor: 'Vermelho',
    flex: true
  }



  return (
    <div className="App">
      <Garagem
        none={nome}
        apresentaGaragem={apresentaGaragem}
        dadosCarros1={dadosCarros1}
      />
      <Garagem
        // none={nome}
        apresentaGaragem={apresentaGaragem}
        dadosCarros2={dadosCarros2}
      />
      <Garagem
        // none={nome}
        apresentaGaragem={apresentaGaragem}
        dadosCarros3={dadosCarros3}
      />
      <Garagem
        // none={nome}
        apresentaGaragem={apresentaGaragem}
        dadosCarros4={dadosCarros4}
      />
    </div>
  );
}
