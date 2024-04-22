import { observer } from "mobx-react-lite";
import "./App.scss";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import TicketsBlock from "./components/TicketsBlock/TicketsBlock";
import logo from "./assets/main.png";

const App = observer(() => {
  return (
    <main className="app">
      <img className="app__logo" src={logo} />
      <section className="app__content">
        <FilterBlock />
        <TicketsBlock />
      </section>
    </main>
  );
});
export default App;
