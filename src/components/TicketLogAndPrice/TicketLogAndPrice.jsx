import AirlineIcon from "../../UI/AirlineIcon/AirlineIcon";
import PriceButton from "../../UI/PriceButton/PriceButton";
import "./TicketLogAndPrice.scss";

function TicketLogAndPrice({ carrier }) {
  return (
    <div className="ticket-log-and-price">
      <AirlineIcon iconName={carrier} />
      <PriceButton />
    </div>
  );
}
export default TicketLogAndPrice;
