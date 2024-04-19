import { observer } from "mobx-react-lite";
import "./PriceButton.scss";
import { labelsRu } from "../../content/labels.json";

const PriceButton = observer(() => {
  console.log(labelsRu.buyRu);
  const price = 1000;
  const currency = labelsRu.currencyRu;
  return (
    <button
      className="currency-button"
      type="button"
      onClick={alert("You bought it!")}
    >
      <p>{labelsRu.buyRu}</p>
      <p>{`${labelsRu.forRu} ${price} ${currency}`}</p>
    </button>
  );
});
export default PriceButton;
