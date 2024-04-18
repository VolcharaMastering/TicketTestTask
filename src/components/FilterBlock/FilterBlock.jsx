import "./FilterBlock.scss";
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import TransfersBlock from "../TransfersBlock/TransfersBlock";

function FilterBlock() {
    return (
        <form className="filter-block">
            <CurrencyBlock />
            <TransfersBlock />
        </form>
    )
}
export default FilterBlock;