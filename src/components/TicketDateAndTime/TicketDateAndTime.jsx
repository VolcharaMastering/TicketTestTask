import FlightPoints from "../../UI/FlightPoints/FlightPoints";
import FlightTime from "../../UI/FlightTime/FlightTime";
import TransfersArrow from "../../UI/TransfersArrow/TransfersArrow";
import "./TicketDateAndTime.scss";

function TicketDateAndTime({ ticketData }) {
  return (
    <div className="ticket-date-and-time">
      <div className="ticket-date-and-time__data">
        <FlightTime times={ticketData.departure_time} />
        <TransfersArrow stops={ticketData.stops} />
        <FlightTime times={ticketData.arrival_time} />
      </div>
      <div className="ticket-date-and-time__data">
        <FlightPoints
          airport={ticketData.origin}
          city={ticketData.origin_name}
          dateToshow={ticketData.departure_date}
        />
        <div className="ticket-date-and-time__separator"/>
        <FlightPoints
          airport={ticketData.destination}
          city={ticketData.destination_name}
          dateToshow={ticketData.arrival_date}
        />
      </div>
    </div>
  );
}
export default TicketDateAndTime;
