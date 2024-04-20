import "./CurrencyButton.scss";

function CurrencyButton({label}) {
    return (
        <button className="currency-button" type="button" >
            {label}
        </button>
    )
}
export default CurrencyButton;