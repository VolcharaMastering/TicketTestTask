import TicketDateAndTime from "../TicketDateAndTime/TicketDateAndTime";
import TicketLogAndPrice from "../TicketLogAndPrice/TicketLogAndPrice";
import "./Ticket.scss";

function Ticket({ ticketData }) {
  return (
    <section className="ticket">
      <TicketLogAndPrice carrier={ticketData.carrier} />
      <TicketDateAndTime />
    </section>
  );
}
export default Ticket;
