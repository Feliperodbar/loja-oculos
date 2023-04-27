import Topo from './componentes/Topo/Topo';
import Conteudo from './componentes/Conteudo/index';
import Rodape from './componentes/SecaoRodape/index';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;