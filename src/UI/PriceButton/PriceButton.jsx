import { observer } from "mobx-react-lite";
import "./PriceButton.scss";
import { labelsRu } from "../../content/labels.json";

const PriceButton = observer(() => {
  const price = 1000;
  const currency = labelsRu.currencyRu;
  const handleClick = () => {
    alert("You bought it!");
  };
  return (
    <button className="price-button" type="button" onClick={handleClick}>
      <p>{labelsRu.buyRu}</p>
      <p>{`${labelsRu.forRu} ${price} ${currency}`}</p>
    </button>
  );
});
export default PriceButton;
