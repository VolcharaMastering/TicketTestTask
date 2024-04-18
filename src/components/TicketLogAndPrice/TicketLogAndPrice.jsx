import AirlineIcon from "../../UI/AirlineIcon/AirlineIcon";
import PriceButton from "../../UI/PriceButton/PriceButton";
import "./TicketLogAndPrice.scss";

function TicketLogAndPrice() {
    return (
        <div className="ticket-log-and-price">
            <AirlineIcon />
            <PriceButton />
        </div>
    )
}
export default TicketLogAndPrice;