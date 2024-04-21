import { observer } from "mobx-react-lite";
import "./PriceButton.scss";
import { labelsRu } from "../../content/labels.json";
import CurrencyStore from "../../stores/CurrencyStore";

const PriceButton = observer(({ defaultPrice }) => {
  const price =
    Math.round((defaultPrice / CurrencyStore.currencyToShow.rate) * 100) / 100;
  const currencySymbol = CurrencyStore.currencyToShow.symbol;
  const handleClick = () => {
    alert("You bought it!");
  };
  return (
    <button className="price-button" type="button" onClick={handleClick}>
      <p>{labelsRu.buyRu}</p>
      <p>{`${labelsRu.forRu} ${price} ${currencySymbol}`}</p>
    </button>
  );
});
export default PriceButton;
