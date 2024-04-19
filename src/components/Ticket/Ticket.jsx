import TicketDateAndTime from "../TicketDateAndTime/TicketDateAndTime";
import TicketLogAndPrice from "../TicketLogAndPrice/TicketLogAndPrice";
import "./Ticket.scss";

function Ticket({ ticketData }) {
  return (
    <section className="ticket">
      <TicketLogAndPrice carrier={ticketData.carrier} />
      <TicketDateAndTime
        departureTime={ticketData.departure_time}
        arrivalTime={ticketData.arrival_time}
        stops={ticketData.stops}
      />
    </section>
  );
}
export default Ticket;
