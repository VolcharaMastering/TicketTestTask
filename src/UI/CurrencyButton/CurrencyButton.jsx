import { observer } from "mobx-react-lite";
import CurrencyStore from "../../stores/CurrencyStore";
import "./CurrencyButton.scss";

const CurrencyButton = observer(({ label }) => {
  const active = CurrencyStore.currencyToShow[label];
  const handleSetCurrency = () => {
    CurrencyStore.setButtonPressed(label);
  };
  return (
    <button
      className={`currency-button ${active && "currency-button__active"}`}
      type="button"
      onClick={handleSetCurrency}
    >
      {label}
    </button>
  );
});
export default CurrencyButton;
