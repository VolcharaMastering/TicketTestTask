import AirlineIcon from "../../UI/AirlineIcon/AirlineIcon";
import PriceButton from "../../UI/PriceButton/PriceButton";
import "./TicketLogAndPrice.scss";

function TicketLogAndPrice({ carrier, defaultPrice }) {
  return (
    <div className="ticket-log-and-price">
      <AirlineIcon iconName={carrier} />
      <PriceButton defaultPrice={defaultPrice} />
    </div>
  );
}
export default TicketLogAndPrice;
