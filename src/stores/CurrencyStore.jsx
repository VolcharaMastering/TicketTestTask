import { makeAutoObservable } from "mobx";

class CurrecyStore {
  currencyToShow = { RUB: true, rate: 1, symbol: "₽" };

  constructor() {
    makeAutoObservable(this);
  }
  _setRateCurrency = (label) => {
    switch (label) {
      case "USD":
        this.currencyToShow = { ...this.currencyToShow, rate: 94, symbol: "$" };
        break;
      case "EUR":
        this.currencyToShow = {
          ...this.currencyToShow,
          rate: 100,
          symbol: "€",
        };
        break;
      default:
        this.currencyToShow = { ...this.currencyToShow, rate: 1, symbol: "₽" };
        break;
    }
  };
  setButtonPressed = (label) => {
    this.currencyToShow = this.currencyToShow = {};
    this.currencyToShow = { ...this.currencyToShow, [label]: true };
    this._setRateCurrency(label);
  };
}
export default new CurrecyStore();
