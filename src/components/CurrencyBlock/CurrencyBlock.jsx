import "./CurrencyBlock.scss";
import CurrencyButton from "../../UI/CurrencyButton/CurrencyButton";
import { labelsRu } from "../../content/labels";

function CurrencyBlock() {
  return (
    <div className="currency-block">
      <label className="filter-block__label">{labelsRu.currencyRu}</label>
      <div className="currency-block__buttons">
        <CurrencyButton label="RUB" />
        <CurrencyButton label="USD" />
        <CurrencyButton label="EUR" />
      </div>
    </div>
  );
}
export default CurrencyBlock;
