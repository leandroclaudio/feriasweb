import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarcaFerias from './components/MarcaFerias/MarcaFerias';
import Tabela from './components/tabela/Tabela'
import Calendar  from './components/Calendario/Calendar';
import Colaboradores from './components/Colaboradores/Colaboradores';

function App() {
  return (
    <div className="App">
        <MarcaFerias /> <br>      
        </br>        
        <Tabela />
        {/* <Calendar /> */}
        {/* <Colaboradores /> */}
    </div>
  );
}

export default App;
