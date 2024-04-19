import FlightTime from "../../UI/FlightTime/FlightTime";
import TransfersArrow from "../../UI/TransfersArrow/TransfersArrow";
import "./TicketDateAndTime.scss";

function TicketDateAndTime({ departureTime, arrivalTime, stops }) {
  return (
    <div className="ticket-date-and-time">
      <FlightTime times={departureTime} />
      <TransfersArrow stops={stops} />
      <FlightTime times={arrivalTime} />
    </div>
  );
}
export default TicketDateAndTime;
