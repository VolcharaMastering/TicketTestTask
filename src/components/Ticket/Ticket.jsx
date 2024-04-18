import TicketDateAndTime from "../TicketDateAndTime/TicketDateAndTime";
import TicketLogAndPrice from "../TicketLogAndPrice/TicketLogAndPrice";
import "./Ticket.scss";

function Ticket() {
    return (
        <section className="ticket">
            <TicketLogAndPrice />
            <TicketDateAndTime />
            <TicketLogAndPrice />
        </section>
    )
}
export default Ticket;
