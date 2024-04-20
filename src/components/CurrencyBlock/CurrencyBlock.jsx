import "./CurrencyBlock.scss";
import { labelsRu } from "../../content/labels";
import CurrencyButton from "../../UI/CurrencyButton/CurrencyButton";

function CurrencyBlock() {
  return (
    <div className="currency-block">
      <label className="filter-block__label">{labelsRu.currencyRu}</label>
      <div className="currency-block__buttons">
        <CurrencyButton label="RUB" />
        <CurrencyButton label="USB" />
        <CurrencyButton label="EUR" />
      </div>
    </div>
  );
}
export default CurrencyBlock;
