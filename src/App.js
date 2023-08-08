import MiPrimerComponente from "./componentes/MiPrimerComponente";
import PersonCardFuncional from "./componentes/PersonCarFuncional";
import PersonCard from "./componentes/PersonCard";

const App =() => {
  return (
    <div className="App">
      <h1>¡Bienvenida a tu primer app en React!</h1>
      <MiPrimerComponente/>

      <PersonCard nombre="Juana" apellido="De Arco" edad="18" ciudad="Paris"/>
      <PersonCard nombre="Elena" apellido="De Troya" edad="30" ciudad="Roma"/>

      <PersonCardFuncional nombre="Pedro" apellido="Paramo" edad={32} ciudad="Comala"/>
    </div>
  )
}

export default App;
