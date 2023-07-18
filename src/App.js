import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C04variable from './component/C04variable';

function App() {
  return (
    <div>
      <h1>Primer componente</h1>
      <C01componente />
      <h1>Segundo componente</h1>
      <C02contador />
      <h1>Tercero componente</h1>
      Desarrollado por el estudiante
      <h1>Cuarto componente</h1>
      <C04variable xVariable="Hola mundo..." />
      <h1>Quinto componente</h1>
    
      <h1>Sexto componente</h1>

    </div>
  );
}

export default App;
