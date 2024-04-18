import "./App.scss";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import Ticket from "./components/Ticket/Ticket";
import logo from "./assets/main.png";

function App() {
  return (
    <main className="app">
      <img className="app__logo" src={logo} />
      <section className="app__content">
        <FilterBlock />
        <Ticket/>
      </section>
    </main>
  );
}

export default App;
